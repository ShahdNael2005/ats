import Navbar from "../components/Navbar";


export default function CandidatesPage() {
  const candidates = [
    {
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      email: "sarah.j@email.com",
      phone: "+1 234-567-8900",
      status: "Interview Scheduled",
      statusColor: "bg-yellow-400",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      email: "m.chen@email.com",
      phone: "+1 234-567-8901",
      status: "Selected",
      statusColor: "bg-green-500",
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      email: "emily.r@email.com",
      phone: "+1 234-567-8902",
      status: "Applied",
      statusColor: "bg-blue-500",
      initials: "ER",
    },
    {
      name: "James Wilson",
      role: "Marketing Specialist",
      email: "j.wilson@email.com",
      phone: "+1 234-567-8903",
      status: "Hired",
      statusColor: "bg-green-600",
      initials: "JW",
    },
    {
      name: "Olivia Brown",
      role: "DevOps Engineer",
      email: "o.brown@email.com",
      phone: "+1 234-567-8904",
      status: "Interview Scheduled",
      statusColor: "bg-yellow-400",
      initials: "OB",
    },
    {
      name: "David Lee",
      role: "Data Analyst",
      email: "d.lee@email.com",
      phone: "+1 234-567-8905",
      status: "Rejected",
      statusColor: "bg-red-500",
      initials: "DL",
    },
  ];

  return (
    <Navbar>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Candidates</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          + Add Candidate
        </button>
      </div>

      <p className="text-gray-600 mb-6">
        Manage candidate profiles and applications
      </p>

      {/* Search and filter */}
      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search candidates..."
          className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="border border-gray-300 rounded-md px-4 py-2">
          <option>All Status</option>
          <option>Applied</option>
          <option>Interview Scheduled</option>
          <option>Selected</option>
          <option>Hired</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Candidate cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {candidates.map((c, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                  {c.initials}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {c.name}
                  </h2>
                  <p className="text-gray-600 text-sm">{c.role}</p>
                </div>
              </div>
              <span
                className={`text-white text-xs font-medium px-3 py-1 rounded-full ${c.statusColor}`}
              >
                {c.status}
              </span>
            </div>

            <div className="text-gray-600 text-sm space-y-1">
              <p>📧 {c.email}</p>
              <p>📞 {c.phone}</p>
            </div>

            <button className="mt-4 w-full border border-gray-300 rounded-md py-2 text-sm font-medium hover:bg-gray-50">
              👁️ View Profile
            </button>
          </div>
        ))}
      </div>
    </Navbar>
  );
}
