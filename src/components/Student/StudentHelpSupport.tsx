import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail,
  Search,
  ChevronDown,
  ChevronRight,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Book,
  Settings,
  Shield
} from 'lucide-react';

const StudentHelpSupport = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [supportForm, setSupportForm] = useState({
    category: '',
    subject: '',
    message: '',
    priority: 'medium'
  });

  const supportCategories = [
    {
      id: 'academic',
      title: 'Academic Support',
      description: 'Questions about grades, assignments, and coursework',
      icon: Book,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      description: 'Platform issues, login problems, and technical difficulties',
      icon: Settings,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'account',
      title: 'Account & Profile',
      description: 'Profile updates, password changes, and account settings',
      icon: User,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'transfer',
      title: 'Transfer & Records',
      description: 'School transfers, record requests, and documentation',
      icon: Shield,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const faqs = [
    {
      id: '1',
      category: 'academic',
      question: 'How do I view my grades and GPA?',
      answer: 'You can view your grades by navigating to the "Academic Records" section in your dashboard. Your current GPA is displayed prominently, and you can see individual subject grades, term-by-term breakdowns, and performance analytics.'
    },
    {
      id: '2',
      category: 'academic',
      question: 'When are grades typically updated?',
      answer: 'Grades are usually updated within 48-72 hours after an assessment. You will receive a notification when new grades are posted. For major exams, it may take up to a week for results to be processed and verified.'
    },
    {
      id: '3',
      category: 'technical',
      question: 'I forgot my password. How do I reset it?',
      answer: 'Click on the "Forgot Password" link on the login page. Enter your email address, and you\'ll receive a password reset link. Follow the instructions in the email to create a new password.'
    },
    {
      id: '4',
      category: 'technical',
      question: 'The platform is running slowly. What should I do?',
      answer: 'Try clearing your browser cache and cookies, ensure you have a stable internet connection, and close unnecessary browser tabs. If the problem persists, try using a different browser or contact technical support.'
    },
    {
      id: '5',
      category: 'account',
      question: 'How do I update my personal information?',
      answer: 'Go to your "Profile" section and click "Edit Profile". You can update your contact information, emergency contacts, and other personal details. Some changes may require verification from your school.'
    },
    {
      id: '6',
      category: 'transfer',
      question: 'How do I request a school transfer?',
      answer: 'Navigate to the "Transfer History" section and click "Request Transfer". Fill out the required information, upload necessary documents, and submit your request. You\'ll receive updates on the status of your transfer.'
    },
    {
      id: '7',
      category: 'transfer',
      question: 'How long does a transfer request take to process?',
      answer: 'Transfer requests typically take 5-10 business days to process. This includes verification from your current school and approval from the destination school. You\'ll receive notifications at each step of the process.'
    },
    {
      id: '8',
      category: 'academic',
      question: 'Can I download my academic transcripts?',
      answer: 'Yes, you can download official transcripts from the "Academic Records" section. Click on "Download Transcript" to get a PDF copy. For official transcripts needed for applications, contact your school directly.'
    }
  ];

  const recentTickets = [
    {
      id: 'T001',
      subject: 'Unable to access Physics grades',
      category: 'Academic Support',
      status: 'resolved',
      priority: 'medium',
      createdAt: '2024-01-18T10:00:00Z',
      updatedAt: '2024-01-19T14:30:00Z'
    },
    {
      id: 'T002',
      subject: 'Transfer document upload issue',
      category: 'Technical Support',
      status: 'in-progress',
      priority: 'high',
      createdAt: '2024-01-20T09:15:00Z',
      updatedAt: '2024-01-20T16:45:00Z'
    }
  ];

  const contactInfo = [
    {
      type: 'School Office',
      phone: '+234-801-234-5678',
      email: 'office@lincolnhigh.edu',
      hours: 'Monday - Friday: 8:00 AM - 5:00 PM'
    },
    {
      type: 'Technical Support',
      phone: '+234-800-HELP-EDU',
      email: 'support@educhain.com',
      hours: '24/7 Support Available'
    },
    {
      type: 'Emergency Contact',
      phone: '+234-911-EMERGENCY',
      email: 'emergency@lincolnhigh.edu',
      hours: 'Available 24/7'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the support ticket
    console.log('Submitting support ticket:', supportForm);
    alert('Support ticket submitted successfully! You will receive a confirmation email shortly.');
    setSupportForm({ category: '', subject: '', message: '', priority: 'medium' });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'open':
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      default:
        return <HelpCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'open':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Help & Support</h2>
          <p className="text-gray-600 mt-1">Get assistance with your academic journey and platform usage</p>
        </div>
      </div>

      {/* Support Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {supportCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
              className={`p-6 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                selectedCategory === category.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${category.color}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </button>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          {filteredFAQs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {expandedFAQ === faq.id ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedFAQ === faq.id && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {filteredFAQs.length === 0 && (
          <div className="text-center py-8">
            <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No FAQs found matching your search</p>
          </div>
        )}
      </div>

      {/* Contact Support Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Submit a Support Ticket</h3>
        
        <form onSubmit={handleSubmitTicket} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={supportForm.category}
                onChange={(e) => setSupportForm({...supportForm, category: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a category</option>
                {supportCategories.map((category) => (
                  <option key={category.id} value={category.id}>{category.title}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                value={supportForm.priority}
                onChange={(e) => setSupportForm({...supportForm, priority: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              value={supportForm.subject}
              onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Brief description of your issue"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              value={supportForm.message}
              onChange={(e) => setSupportForm({...supportForm, message: e.target.value})}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Please provide detailed information about your issue..."
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Ticket</span>
          </button>
        </form>
      </div>

      {/* Recent Support Tickets */}
      {recentTickets.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Recent Tickets</h3>
          <div className="space-y-3">
            {recentTickets.map((ticket) => (
              <div key={ticket.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(ticket.status)}
                  <div>
                    <h4 className="font-medium text-gray-900">#{ticket.id} - {ticket.subject}</h4>
                    <p className="text-sm text-gray-500">{ticket.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                    {ticket.status.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(ticket.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-3">{contact.type}</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">{contact.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">{contact.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span className="text-xs text-gray-500">{contact.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-blue-800">Before Contacting Support</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Check the FAQ section for common issues</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Try refreshing your browser or clearing cache</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Ensure you have a stable internet connection</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-orange-800">When Submitting a Ticket</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                <span>Provide detailed information about the issue</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                <span>Include screenshots if applicable</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                <span>Mention your browser and device type</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHelpSupport;