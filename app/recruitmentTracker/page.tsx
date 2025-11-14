import Navbar from "../components/Navbar";


export default function RecruitmentTrackerPage() {
  const candidates = [
    {
      name: "Sarah Johnson",
      position: "Senior Software Engineer",
      department: "Engineering",
      appliedDate: "2024-01-15",
      status: "Interview Scheduled",
      statusColor: "bg-yellow-400",
      interviewer: "John Doe",
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      department: "Product",
      appliedDate: "2024-01-10",
      status: "Selected",
      statusColor: "bg-green-500",
      interviewer: "Jane Smith",
    },
    {
      name: "Emily Rodriguez",
      position: "UX Designer",
      department: "Design",
      appliedDate: "2024-01-20",
      status: "Applied",
      statusColor: "bg-blue-500",
      interviewer: "-",
    },
    {
      name: "James Wilson",
      position: "Marketing Specialist",
      department: "Marketing",
      appliedDate: "2024-01-05",
      status: "Hired",
      statusColor: "bg-green-600",
      interviewer: "Bob Johnson",
    },
    {
      name: "Olivia Brown",
      position: "DevOps Engineer",
      department: "Engineering",
      appliedDate: "2024-01-18",
      status: "Interview Scheduled",
      statusColor: "bg-yellow-400",
      interviewer: "Alice Brown",
    },
  ];

  return (
    <Navbar>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Recruitment Tracker</h1>
          <p className="text-gray-600">
            Track all applicants and their current stage
          </p>
        </div>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 border rounded-md px-4 py-2 flex items-center gap-2">
          <span>⬇</span> Export Report
        </button>
      </div>

      {/* Search and filter row */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center w-1/2 border border-gray-300 rounded-md px-3 py-2">
          <span className="mr-2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search tracker..."
            className="w-full focus:outline-none text-sm"
          />
        </div>
        <select className="border border-gray-300 rounded-md px-4 py-2 text-sm">
          <option>All Status</option>
          <option>Applied</option>
          <option>Interview Scheduled</option>
          <option>Selected</option>
          <option>Hired</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Candidate
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Position
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Department
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Applied Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Interviewer
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {candidates.map((c, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {c.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {c.position}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {c.department}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {c.appliedDate}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-white text-xs font-medium px-3 py-1 rounded-full ${c.statusColor}`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {c.interviewer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Navbar>
  );
}
