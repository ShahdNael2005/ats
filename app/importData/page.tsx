"use client";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function ImportDataPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Navbar>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Import Data</h1>
          <p className="text-gray-600">
            Upload Excel or CSV files to import recruitment data
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Upload Recruitment Tracker</h2>
          <p className="text-gray-600 mb-4">
            Upload an Excel (.xlsx) or CSV file containing job postings, candidate details, and application statuses.
          </p>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center text-center hover:border-blue-400 transition">
            <div className="text-4xl text-gray-400 mb-3">⬆️</div>
            <p className="text-gray-700 font-medium">
              Drop your Excel/CSV file here
            </p>
            <label className="text-blue-600 cursor-pointer hover:underline mt-1">
              <input type="file" accept=".csv,.xlsx" onChange={handleFileChange} className="hidden" />
              or click to browse
            </label>
            {file && (
              <p className="mt-3 text-sm text-gray-600">
                Selected file: <span className="font-medium">{file.name}</span>
              </p>
            )}
          </div>
        </div>

        {/* Expected File Format */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Expected File Format</h2>
          <p className="text-gray-600 mb-4">
            Your Excel/CSV file should contain the following columns:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Job Title</li>
            <li>Department</li>
            <li>Location</li>
            <li>Vacancies</li>
            <li>Candidate Name</li>
            <li>Email</li>
            <li>Phone</li>
            <li>Status (Applied, Interview Scheduled, Selected, Hired, Rejected)</li>
            <li>Applied Date</li>
            <li>Interview Date (optional)</li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
}
