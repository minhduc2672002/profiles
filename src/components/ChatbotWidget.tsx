'use client';

import { useState } from 'react';
import { FaRobot, FaTimes, FaRegPaperPlane } from 'react-icons/fa';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{type: 'user' | 'bot', text: string}>>([
    { type: 'bot', text: 'Xin chào! Tôi là trợ lý ảo của Tran Minh Duc. Bạn cần giúp gì không?' }
  ]);
  const [input, setInput] = useState('');
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { type: 'user' as const, text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage = { 
        type: 'bot' as const, 
        text: 'Cảm ơn bạn đã liên hệ. Đây là chatbot mẫu, Tran Minh Duc sẽ tích hợp chatbot thật sau.' 
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };
  
  return (
    <div className="chatbot-container">
      {/* Chat toggle button */}
      <button 
        onClick={toggleChat}
        className="bg-primary rounded-full w-14 h-14 flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-colors"
      >
        {isOpen ? <FaTimes /> : <FaRobot className="text-xl" />}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Chat header */}
          <div className="bg-primary text-white p-4">
            <h3 className="text-lg font-bold">Chat với tôi</h3>
          </div>
          
          {/* Chat messages */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs rounded-lg px-4 py-2 ${
                      message.type === 'user' 
                        ? 'bg-primary text-white rounded-br-none' 
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSubmit} className="flex border-t border-gray-200">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Nhập tin nhắn..."
              className="flex-1 p-4 focus:outline-none"
            />
            <button 
              type="submit"
              className="bg-primary text-white p-4 hover:bg-blue-600 transition-colors"
            >
              <FaRegPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget; 