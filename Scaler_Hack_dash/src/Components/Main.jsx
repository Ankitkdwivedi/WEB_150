import React from 'react';

const Main = () => {
  return (
    <div className="container flex justify-between flex-wrap m-auto">
      <div className="container m-5 p-5 h-32 min-w-64 max-w-sm border border-b-4 border-purple-500 rounded-lg shadow-lg bg-gradient-to-br from-purple-300 to-purple-100">
        <div className="flex justify-between">
          <div className="text-xl font-semibold text-gray-800">Total Revenue</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-indigo-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>
        </div>
        <div className="flex justify-center mt-3 text-3xl text-green-600 font-bold">
          <div>$3,249</div>
        </div>
      </div>

      <div className="container m-5 p-5 h-32 min-w-64 max-w-sm border border-b-4 border-blue-500 rounded-lg shadow-lg bg-gradient-to-br from-blue-300 to-blue-100">
        <div className="flex justify-between">
          <div className="text-xl font-semibold text-gray-800">Total User</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-indigo-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>
        </div>
        <div className="flex justify-center mt-3 text-3xl text-green-600 font-bold">
          <div>249</div>
        </div>
      </div>

      <div className="container m-5 p-5 h-32 min-w-64 max-w-sm border border-b-4 border-green-500 rounded-lg shadow-lg bg-gradient-to-br from-green-300 to-green-100">
        <div className="flex justify-between">
          <div className="text-xl font-semibold text-gray-800">New Users</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-indigo-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
        </div>
        <div className="flex justify-center mt-3 text-3xl text-green-600 font-bold">
          <div>9</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
