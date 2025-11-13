"use client";

import { useState } from "react";
import { Search, Plus, Eye, MapPin, Users } from "lucide-react";
import Navbar from "../components/Navbar";

export default function JobPostingsPage() {
  const [search, setSearch] = useState("");

  const jobs = [
    {
      title: "Senior Software Engineer",
      status: "Open",
      location: "Remote",
      department: "Engineering",
      filled: 1,
      total: 3,
    },
    {
      title: "Product Manager",
      status: "Closed",
      location: "New York",
      department: "Product",
      filled: 2,
      total: 2,
    },
    {
      title: "UX Designer",
      status: "Open",
      location: "San Francisco",
      department: "Design",
      filled: 0,
      total: 2,
    },
    {
      title: "Marketing Specialist",
      status: "On Hold",
      location: "Remote",
      department: "Marketing",
      filled: 0,
      total: 1,
    },
    {
      title: "DevOps Engineer",
      status: "Open",
      location: "Austin",
      department: "Engineering",
      filled: 1,
      total: 2,
    },
    {
      title: "Data Analyst",
      status: "Open",
      location: "Remote",
      department: "Product",
      filled: 0,
      total: 1,
    },
  ];

  const filtered = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside >
        <Navbar>
      <h1></h1>
      
      {/* Job cards or dashboard content here */}
    </Navbar>
  
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-blue-600 text-white flex items-center justify-center rounded-md font-bold">
              A
            </div>
            <h1 className="text-2xl font-bold">ATS</h1>
          </div>
          <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
            ⚙️
          </div>
        </header>

        {/* Page Title */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Job Postings</h2>
            <p className="text-gray-500">
              Manage open positions and recruitment needs
            </p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
            <Plus size={18} /> Add Job
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="border rounded-md px-3 py-2 text-gray-600">
            <option>All Status</option>
            <option>Open</option>
            <option>Closed</option>
            <option>On Hold</option>
          </select>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((job, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div
                className={`inline-block px-3 py-1 text-sm rounded-full mb-3 font-medium ${
                  job.status === "Open"
                    ? "bg-green-100 text-green-700"
                    : job.status === "Closed"
                    ? "bg-gray-200 text-gray-600"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {job.status}
              </div>

              <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-4 gap-3">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={14} /> {job.department}
                </span>
              </div>

              {/* Progress Bar */}
              <p className="text-sm text-gray-500 mb-1">Recruitment Progress</p>
              <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                <div
                  className="h-2 bg-blue-600 rounded-full"
                  style={{
                    width: `${(job.filled / job.total) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                {job.filled} / {job.total} filled
              </p>

              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm hover:bg-gray-50">
                <Eye size={16} /> View Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
