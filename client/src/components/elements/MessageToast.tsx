'use client';

import { useMessage } from '@/lib/ToastProvider';
import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

function MessageToast() {
    const { message, setMessage } = useMessage();

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(null), 5000); // Auto-hide after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [message, setMessage]);

    if (!message) return null; // Hide if no message

    const isError = message.error;
    const bgColor = isError ? 'bg-danger' : 'bg-success';
    const headerColor = isError ? 'bg-dark' : 'bg-success';
    const title = isError ? 'Error' : 'Success';

    return (
        <div className="position-absolute top-0 end-0 mt-3 me-3" style={{ zIndex: 1050 }}>
            <div className={`toast show text-white shadow-lg rounded-3 overflow-hidden ${bgColor}`}>
                <div className={`toast-header ${headerColor} text-white d-flex justify-content-between align-items-center`}>
                    <strong className="me-auto">{title}</strong>
                    <button 
                        className="btn text-white border-0"
                        onClick={() => setMessage(null)}
                        aria-label="Close"
                    >
                        <IoClose size={20} />
                    </button>
                </div>
                <div className="toast-body fw-bold">
                    {message.text}
                </div>
            </div>
        </div>
    );
}

export default MessageToast;
