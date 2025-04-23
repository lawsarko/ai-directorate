import React, { useState } from 'react';
import { Tool } from '../lib/types';

type ToolUsageTrackerProps = {
  tools: Tool[];
  initialTrackedTools?: {
    id: string;
    status: 'tried' | 'using' | 'favorite' | 'want-to-try';
    notes?: string;
    dateAdded: string;
    reminderDate?: string;
  }[];
};

export default function ToolUsageTracker({ 
  tools, 
  initialTrackedTools = [] 
}: ToolUsageTrackerProps) {
  const [trackedTools, setTrackedTools] = useState(initialTrackedTools);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<'tried' | 'using' | 'favorite' | 'want-to-try'>('want-to-try');
  const [notes, setNotes] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  
  const handleAddTool = () => {
    if (!selectedTool) return;
    
    const newTrackedTool = {
      id: selectedTool,
      status: selectedStatus,
      notes: notes.trim() || undefined,
      dateAdded: new Date().toISOString(),
      reminderDate: reminderDate || undefined
    };
    
    setTrackedTools([...trackedTools, newTrackedTool]);
    resetForm();
  };
  
  const handleUpdateStatus = (toolId: string, newStatus: 'tried' | 'using' | 'favorite' | 'want-to-try') => {
    setTrackedTools(prev => 
      prev.map(tool => 
        tool.id === toolId 
          ? { ...tool, status: newStatus } 
          : tool
      )
    );
  };
  
  const handleRemoveTool = (toolId: string) => {
    setTrackedTools(prev => prev.filter(tool => tool.id !== toolId));
  };
  
  const resetForm = () => {
    setSelectedTool(null);
    setSelectedStatus('want-to-try');
    setNotes('');
    setReminderDate('');
    setShowAddForm(false);
  };
  
  const getToolById = (id: string) => {
    return tools.find(tool => tool.id === id);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  const isReminderSoon = (dateString?: string) => {
    if (!dateString) return false;
    
    const reminderDate = new Date(dateString);
    const now = new Date();
    const diffDays = Math.ceil((reminderDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    return diffDays >= 0 && diffDays <= 3;
  };
  
  return (
    <div className="bg-primary-card p-6 rounded-card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">My AI Tools Tracker</h2>
        <button 
          className="btn-primary text-sm"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : '+ Add Tool'}
        </button>
      </div>
      
      {/* Add Tool Form */}
      {showAddForm && (
        <div className="bg-primary-secondary p-4 rounded-card mb-6">
          <h3 className="font-medium mb-3">Track a new tool</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Select Tool</label>
              <select 
                className="w-full bg-primary-background text-text-primary px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                value={selectedTool || ''}
                onChange={(e) => setSelectedTool(e.target.value)}
              >
                <option value="">Select a tool...</option>
                {tools
                  .filter(tool => !trackedTools.some(t => t.id === tool.id))
                  .map(tool => (
                    <option key={tool.id} value={tool.id}>{tool.name}</option>
                  ))
                }
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-1">Status</label>
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedStatus === 'want-to-try' 
                      ? 'bg-accent-primary text-white' 
                      : 'bg-primary-background text-text-secondary hover:text-text-primary'
                  }`}
                  onClick={() => setSelectedStatus('want-to-try')}
                >
                  Want to Try
                </button>
                <button 
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedStatus === 'tried' 
                      ? 'bg-accent-primary text-white' 
                      : 'bg-primary-background text-text-secondary hover:text-text-primary'
                  }`}
                  onClick={() => setSelectedStatus('tried')}
                >
                  Tried It
                </button>
                <button 
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedStatus === 'using' 
                      ? 'bg-accent-primary text-white' 
                      : 'bg-primary-background text-text-secondary hover:text-text-primary'
                  }`}
                  onClick={() => setSelectedStatus('using')}
                >
                  Currently Using
                </button>
                <button 
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedStatus === 'favorite' 
                      ? 'bg-accent-primary text-white' 
                      : 'bg-primary-background text-text-secondary hover:text-text-primary'
                  }`}
                  onClick={() => setSelectedStatus('favorite')}
                >
                  Favorite
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm mb-1">Notes (optional)</label>
              <textarea 
                className="w-full bg-primary-background text-text-primary px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add your thoughts or notes about this tool..."
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm mb-1">Set Reminder (optional)</label>
              <input 
                type="date" 
                className="w-full bg-primary-background text-text-primary px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                value={reminderDate}
                onChange={(e) => setReminderDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
              <p className="text-xs text-text-secondary mt-1">
                Set a date to remind yourself to revisit this tool
              </p>
            </div>
            
            <div className="flex justify-end">
              <button 
                className="btn-primary"
                onClick={handleAddTool}
                disabled={!selectedTool}
              >
                Add to Tracker
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Tracked Tools List */}
      {trackedTools.length > 0 ? (
        <div className="space-y-4">
          {trackedTools.map(trackedTool => {
            const tool = getToolById(trackedTool.id);
            if (!tool) return null;
            
            return (
              <div 
                key={trackedTool.id} 
                className={`bg-primary-secondary p-4 rounded-card border-l-4 ${
                  trackedTool.status === 'favorite' ? 'border-accent-primary' :
                  trackedTool.status === 'using' ? 'border-accent-secondary' :
                  trackedTool.status === 'tried' ? 'border-status-warning' :
                  'border-text-secondary'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-background rounded-md mr-3 flex items-center justify-center">
                      {tool.logoUrl ? (
                        <img src={tool.logoUrl} alt={tool.name} className="w-8 h-8" />
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold">{tool.name}</h3>
                      <div className="flex items-center text-xs text-text-secondary">
                        <span className="capitalize">
                          {trackedTool.status === 'want-to-try' ? 'Want to try' :
                           trackedTool.status === 'tried' ? 'Tried it' :
                           trackedTool.status === 'using' ? 'Currently using' :
                           'Favorite'}
                        </span>
                        <span className="mx-2">•</span>
                        <span>Added {formatDate(trackedTool.dateAdded)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    <button 
                      className="p-1 text-text-secondary hover:text-accent-primary"
                      onClick={() => handleRemoveTool(trackedTool.id)}
                      title="Remove from tracker"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {trackedTool.notes && (
                  <div className="mt-3 text-sm text-text-secondary">
                    <p>{trackedTool.notes}</p>
                  </div>
                )}
                
                {trackedTool.reminderDate && (
                  <div className={`mt-3 text-sm ${
                    isReminderSoon(trackedTool.reminderDate) ? 'text-status-warning' : 'text-text-secondary'
                  }`}>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>
                        Reminder: {formatDate(trackedTool.reminderDate)}
                        {isReminderSoon(trackedTool.reminderDate) && " (Coming up soon!)"}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="mt-3 flex flex-wrap gap-2">
                  <button 
                    className={`px-2 py-1 rounded-full text-xs ${
                      trackedTool.status === 'want-to-try' 
                        ? 'bg-accent-primary text-white' 
                        : 'bg-primary-background text-text-secondary hover:text-text-primary'
                    }`}
                    onClick={() => handleUpdateStatus(trackedTool.id, 'want-to-try')}
                  >
                    Want to Try
                  </button>
                  <button 
                    className={`px-2 py-1 rounded-full text-xs ${
                      trackedTool.status === 'tried' 
                        ? 'bg-accent-primary text-white' 
                        : 'bg-primary-background text-text-secondary hover:text-text-primary'
                    }`}
                    onClick={() => handleUpdateStatus(trackedTool.id, 'tried')}
                  >
                    Tried It
                  </button>
                  <button 
                    className={`px-2 py-1 rounded-full text-xs ${
                      trackedTool.status === 'using' 
                        ? 'bg-accent-primary text-white' 
                        : 'bg-primary-background text-text-secondary hover:text-text-primary'
                    }`}
                    onClick={() => handleUpdateStatus(trackedTool.id, 'using')}
                  >
                    Currently Using
                  </button>
                  <button 
                    className={`px-2 py-1 rounded-full text-xs ${
                      trackedTool.status === 'favorite' 
                        ? 'bg-accent-primary text-white' 
                        : 'bg-primary-background text-text-secondary hover:text-text-primary'
                    }`}
                    onClick={() => handleUpdateStatus(trackedTool.id, 'favorite')}
                  >
                    Favorite
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-8 bg-primary-secondary rounded-card">
          <p className="text-text-secondary mb-4">You haven't tracked any AI tools yet.</p>
          <button 
            className="btn-primary"
            onClick={() => setShowAddForm(true)}
          >
            Start Tracking Tools
          </button>
        </div>
      )}
    </div>
  );
}
