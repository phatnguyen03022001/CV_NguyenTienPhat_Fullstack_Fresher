import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
            <p className="mt-2 text-gray-600">
                Bạn có thể liên hệ với tôi qua email: 
                <a href="mailto:example@example.com" className="text-blue-500 hover:underline"> example@example.com</a>
            </p>
        </div>
    );
};

export default Contact;
