import React from 'react';

const Portfolio = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800">My Portfolio</h2>
            <p className="mt-2 text-gray-600">Dưới đây là một số dự án của tôi...</p>
            {/* Thêm danh sách dự án ở đây */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Ví dụ dự án */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="font-semibold">Dự Án 1</h3>
                    <p className="text-gray-600">Mô tả dự án 1...</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="font-semibold">Dự Án 2</h3>
                    <p className="text-gray-600">Mô tả dự án 2...</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="font-semibold">Dự Án 3</h3>
                    <p className="text-gray-600">Mô tả dự án 3...</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
