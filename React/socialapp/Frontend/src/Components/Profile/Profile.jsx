import React from 'react';

function Profile() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="px-3 py-2">
                <div className="flex flex-col gap-1 text-center">
                    <div className="block mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 rounded-full border border-gray-400 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                    <p className="font-serif font-semibold">Ankit Dwivedi</p>
                    <span className="text-sm text-gray-400">UP India</span>
                    <span className="text-sm text-gray-400">https://www.youtube.com/watch?v=dQw4w9WgXcQ</span>
                </div>
                <div className="flex justify-center items-center gap-2 my-3">
                    <div className="font-semibold text-center mx-4">
                        <p className="text-black">102</p>
                        <span className="text-gray-400">Posts</span>
                    </div>
                    <div className="font-semibold text-center mx-4">
                        <p className="text-black">102</p>
                        <span className="text-gray-400">Followers</span>
                    </div>
                    <div className="font-semibold text-center mx-4">
                        <p className="text-black">102</p>
                        <span className="text-gray-400">Following</span>
                    </div>
                </div>
                <div className="flex justify-center gap-2 my-5">
                    <button className="bg-pink-500 px-10 py-2 rounded-full text-white shadow-lg">Follow</button>
                    <button className="bg-white border border-gray-500 px-10 py-2 rounded-full shadow-lg">Message</button>
                </div>
                <div className="flex justify-between items-center">
                    <button className="w-full py-2 border-b-2 border-yellow-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </button>
                    <button className="w-full py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-2 my-3">
                    <div className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                    <div className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                    <div className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                    <div className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                    <div className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                    <div className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                    <div className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                    <div className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                    <div className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;
