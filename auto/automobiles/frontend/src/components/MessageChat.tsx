import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MessageChat = ({ productId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`/api/messages?product=${productId}`);
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, [productId]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        try {
            const response = await axios.post('/api/messages', {
                productId,
                content: newMessage,
            });
            setMessages((prevMessages) => [...prevMessages, response.data]);
            setNewMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="message-chat">
            <div className="messages">
                {messages.map((msg) => (
                    <div key={msg._id} className={`message ${msg.isAdmin ? 'admin' : 'client'}`}>
                        <p>{msg.content}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className="message-form">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="message-input"
                />
                <button type="submit" className="send-button">Send</button>
            </form>
        </div>
    );
};

export default MessageChat;