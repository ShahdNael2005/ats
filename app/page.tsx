"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Navbar */}
      <aside>
      <Navbar><h1></h1></Navbar>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
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

        <section>
          <h2 className="text-2xl font-bold mb-1">Dashboard</h2>
          <p className="text-gray-500 mb-8">Overview of recruitment activities and metrics</p>

          {/* Top Stats */}
          <div className="grid grid-cols-4 gap-6 mb-10">
            {[
              { title: "OPEN POSITIONS", value: 24, change: "+12% from last month" },
              { title: "ACTIVE CANDIDATES", value: 156, change: "+8% from last week" },
              { title: "INTERVIEWS THIS WEEK", value: 18, change: "-5% from last week" },
              { title: "RECENT HIRES", value: 12, change: "+20% from last month" },
            ].map((card, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm mb-2">{card.title}</p>
                <h3 className="text-3xl font-bold">{card.value}</h3>
                <p className="text-sm text-gray-500">{card.change}</p>
              </div>
            ))}
          </div>

          {/* Charts section */}
          <div className="grid grid-cols-2 gap-6">
            {/* Recruitment Funnel */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">Recruitment Funnel</h3>
              <Image
                src="/recruitment-funnel.png"
                alt="Recruitment Funnel Chart"
                width={500}
                height={300}
                className="rounded-md"
              />
            </div>

            {/* Hiring by Department */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">Hiring by Department</h3>
              <Image
                src="/hiring-department.png"
                alt="Hiring by Department Chart"
                width={500}
                height={300}
                className="rounded-md"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
