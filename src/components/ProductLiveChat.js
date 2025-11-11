import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  ChatBubbleLeftRightIcon,
  PaperClipIcon,
  PhotoIcon,
  PaperAirplaneIcon,
  XMarkIcon,
  PhoneIcon,
  VideoCameraIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const ProductLiveChat = ({ product, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const agentStatus = 'online'; // can be 'busy', 'offline', etc.
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [agentInfo] = useState({
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    role: 'Jewelry Specialist',
    rating: 4.8,
    responseTime: '2-3 min'
  });

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const initialMessages = useMemo(() => [
    {
      id: 1,
      type: 'agent',
      content: `Hello! I'm ${agentInfo.name}, your personal jewelry specialist. I'm here to help you with the ${product?.name || 'product'}. How can I assist you today?`,
      timestamp: new Date(Date.now() - 60000),
      agent: agentInfo
    },
    {
      id: 2,
      type: 'system',
      content: 'You can ask me about product details, sizing, materials, or request a virtual consultation.',
      timestamp: new Date(Date.now() - 30000)
    }
  ], [agentInfo, product]);

  useEffect(() => {
    setMessages(initialMessages);
  }, [product, initialMessages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = () => {
    if (!inputMessage.trim() && !selectedFile) return;

    const newMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
      file: selectedFile
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setSelectedFile(null);
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "I'd be happy to help you with that!",
        "That's a great question. Let me check.",
        "Let me get those details for you.",
        "Sure! Give me a moment.",
        "You're in great hands!"
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const agentMessage = {
        id: Date.now() + 1,
        type: 'agent',
        content: randomResponse,
        timestamp: new Date(),
        agent: agentInfo
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 2000 + Math.random() * 2000);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile({
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file)
      });
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const startVoiceCall = () => {
    alert('Voice call feature coming soon!');
  };

  const startVideoCall = () => {
    alert('Video call feature coming soon!');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-[#FADADD] text-white p-4 rounded-full shadow-lg hover:bg-[#F6D1C1] transition-all duration-300 z-50"
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 right-6 bg-[#FADADD] text-white p-2 px-4 rounded-full shadow-md hover:bg-[#F6D1C1] z-50"
      >
        Open Chat
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-[#FADADD] text-white p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={agentInfo.avatar}
                alt={agentInfo.name}
                className="w-10 h-10 rounded-full"
              />
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                agentStatus === 'online' ? 'bg-green-500' :
                agentStatus === 'busy' ? 'bg-yellow-500' : 'bg-gray-500'
              }`} />
            </div>
            <div>
              <h3 className="font-semibold">{agentInfo.name}</h3>
              <p className="text-sm opacity-90">{agentInfo.role}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={startVoiceCall}><PhoneIcon className="w-4 h-4" /></button>
            <button onClick={startVideoCall}><VideoCameraIcon className="w-4 h-4" /></button>
            <button onClick={minimizeChat}><XMarkIcon className="w-4 h-4" /></button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 text-sm">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="w-4 h-4" />
            <span>Online</span>
          </div>
          <div className="flex items-center space-x-1">
            <ClockIcon className="w-4 h-4" />
            <span>Response: {agentInfo.responseTime}</span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 h-80 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md ${
              msg.type === 'user' ? 'bg-[#FADADD] text-white' :
              msg.type === 'system' ? 'bg-gray-100 text-gray-700' : 'bg-gray-200 text-gray-900'
            } rounded-lg p-3`}>
              {msg.type === 'agent' && (
                <div className="flex items-center space-x-2 mb-2">
                  <img src={msg.agent.avatar} alt={msg.agent.name} className="w-6 h-6 rounded-full" />
                  <span className="text-sm font-medium">{msg.agent.name}</span>
                </div>
              )}
              <p className="text-sm">{msg.content}</p>
              {msg.file && (
                <div className="mt-2 p-2 bg-white bg-opacity-20 rounded">
                  <div className="flex items-center space-x-2">
                    <PhotoIcon className="w-4 h-4" />
                    <span className="text-xs">{msg.file.name}</span>
                    <span className="text-xs opacity-75">({formatFileSize(msg.file.size)})</span>
                  </div>
                </div>
              )}
              <p className="text-xs opacity-75 mt-1">{formatTime(msg.timestamp)}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-900 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <img src={agentInfo.avatar} alt={agentInfo.name} className="w-6 h-6 rounded-full" />
                <span className="text-sm font-medium">{agentInfo.name}</span>
                <span className="text-sm opacity-75">is typing...</span>
              </div>
              <div className="flex space-x-1 mt-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* File Preview */}
      {selectedFile && (
        <div className="px-4 py-2 bg-gray-50 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <PhotoIcon className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">{selectedFile.name}</span>
              <span className="text-xs text-gray-500">({formatFileSize(selectedFile.size)})</span>
            </div>
            <button onClick={removeFile} className="text-red-500 hover:text-red-700">
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex items-end space-x-2">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[#FADADD]"
            rows="2"
          />
          <div className="flex flex-col space-y-2">
            <button onClick={() => fileInputRef.current?.click()}>
              <PaperClipIcon className="w-5 h-5 text-gray-500" />
            </button>
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim() && !selectedFile}
              className="bg-[#FADADD] text-white p-2 rounded-lg hover:bg-[#F6D1C1] disabled:opacity-50"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileSelect}
          accept="image/*,.pdf,.doc,.docx"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ProductLiveChat;
