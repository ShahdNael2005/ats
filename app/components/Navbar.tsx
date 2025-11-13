// components/Navbar.tsx
"use client";

import React from "react";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col p-6">
        <h2 className="text-xl font-semibold mb-8">ATS NAVIGATION</h2>
        <nav className="flex flex-col gap-4 text-gray-600 font-medium">
          <a href="/" className="hover:text-blue-600">Dashboard</a>
          <a href="/jobPositions" className="text-blue-600 font-semibold">Job Postings</a>
          <a href="#" className="hover:text-blue-600">Candidates</a>
          <a href="#" className="hover:text-blue-600">Recruitment Tracker</a>
          <a href="#" className="hover:text-blue-600">Import Data</a>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default Navbar;
