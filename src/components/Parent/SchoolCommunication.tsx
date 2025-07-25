import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Phone, 
  Video,
  Calendar,
  User,
  Clock,
  Paperclip,
  Search,
  Filter,
  Star,
  Archive,
  Plus
} from 'lucide-react';

const SchoolCommunication = () => {
  const [selectedConversation, setSelectedConversation] = useState('teacher1');
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: 'teacher1',
      name: 'Dr. Sarah Smith',
      role: 'Mathematics Teacher',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Emma is doing excellent work in mathematics. Keep it up!',
      lastMessageTime: '2024-01-15T14:30:00Z',
      unreadCount: 2,
      online: true,
      messages: [
        {
          id: '1',
          sender: 'teacher',
          content: 'Good afternoon! I wanted to discuss Emma\'s progress in mathematics.',
          timestamp: '2024-01-15T10:00:00Z',
          read: true
        },
        {
          id: '2',
          sender: 'parent',
          content: 'Hello Dr. Smith! Thank you for reaching out. How is she doing?',
          timestamp: '2024-01-15T10:15:00Z',
          read: true
        },
        {
          id: '3',
          sender: 'teacher',
          content: 'Emma is performing exceptionally well. She scored 85% on the recent test and shows great understanding of algebraic concepts.',
          timestamp: '2024-01-15T10:30:00Z',
          read: true
        },
        {
          id: '4',
          sender: 'parent',
          content: 'That\'s wonderful to hear! Are there any areas where she could improve?',
          timestamp: '2024-01-15T14:00:00Z',
          read: true
        },
        {
          id: '5',
          sender: 'teacher',
          content: 'Emma is doing excellent work in mathematics. Keep it up!',
          timestamp: '2024-01-15T14:30:00Z',
          read: false
        }
      ]
    },
    {
      id: 'principal',
      name: 'Dr. Michael Brown',
      role: 'Principal',
      avatar: 'https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Parent-teacher meeting scheduled for next week.',
      lastMessageTime: '2024-01-14T16:45:00Z',
      unreadCount: 0,
      online: false,
      messages: [
        {
          id: '1',
          sender: 'principal',
          content: 'Dear parents, we are scheduling parent-teacher meetings for next week. Please let us know your availability.',
          timestamp: '2024-01-14T16:45:00Z',
          read: true
        }
      ]
    },
    {
      id: 'counselor',
      name: 'Ms. Jennifer Wilson',
      role: 'School Counselor',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Emma has been selected for the debate team!',
      lastMessageTime: '2024-01-13T11:20:00Z',
      unreadCount: 1,
      online: true,
      messages: [
        {
          id: '1',
          sender: 'counselor',
          content: 'Great news! Emma has been selected for the school debate team. She showed excellent communication skills during the tryouts.',
          timestamp: '2024-01-13T11:20:00Z',
          read: false
        }
      ]
    }
  ];

  const announcements = [
    {
      id: '1',
      title: 'Mid-term Examination Schedule',
      content: 'Mid-term examinations will begin on February 5th, 2024. Please ensure your children are well prepared.',
      sender: 'Academic Office',
      timestamp: '2024-01-15T09:00:00Z',
      priority: 'high'
    },
    {
      id: '2',
      title: 'School Sports Day',
      content: 'Annual sports day will be held on February 15th. All parents are invited to attend.',
      sender: 'Sports Department',
      timestamp: '2024-01-14T15:30:00Z',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Library Book Return Reminder',
      content: 'Please remind your children to return any overdue library books by January 25th.',
      sender: 'Library',
      timestamp: '2024-01-12T12:00:00Z',
      priority: 'low'
    }
  ];

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the server
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-blue-500 bg-blue-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">School Communication</h2>
          <p className="text-gray-600 mt-1">Stay connected with teachers and school staff</p>
        </div>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Message</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedConversation === conversation.id ? 'bg-blue-50 border-r-2 border-blue-600' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <img
                      src={conversation.avatar}
                      alt={conversation.name}
                      className="w-10 h-10 rounded-full"
                    />
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900 truncate">{conversation.name}</h4>
                      {conversation.unreadCount > 0 && (
                        <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                          {conversation.unreadCount}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{conversation.role}</p>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(conversation.lastMessageTime).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-[600px]">
          {selectedConv && (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedConv.avatar}
                    alt={selectedConv.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{selectedConv.name}</h3>
                    <p className="text-sm text-gray-500">{selectedConv.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                    <Calendar className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedConv.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'parent' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'parent'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'parent' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* School Announcements */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">School Announcements</h3>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className={`border-l-4 p-4 rounded-lg ${getPriorityColor(announcement.priority)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{announcement.title}</h4>
                  <p className="text-sm text-gray-700 mb-2">{announcement.content}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{announcement.sender}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(announcement.timestamp).toLocaleDateString()}</span>
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Star className="w-4 h-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <Archive className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Calendar className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">Schedule Meeting</h4>
            <p className="text-sm text-gray-500">Book a parent-teacher conference</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <MessageSquare className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Contact Principal</h4>
            <p className="text-sm text-gray-500">Send a message to the principal</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Phone className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">Emergency Contact</h4>
            <p className="text-sm text-gray-500">Access emergency contact numbers</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchoolCommunication;