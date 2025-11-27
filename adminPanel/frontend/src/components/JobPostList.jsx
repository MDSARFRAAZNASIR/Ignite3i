// src/pages/JobsListPage.jsx
import  {React, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function JobsListPage() {
  const [jobs, setJobs] = useState([]);

  
 useEffect(() => {
    fetch("https://ignite3i-backend.vercel.app/joblist")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Job data:", data);
        setJobs(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);


  return (
    <div className="bg-black min-h-screen text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
        Open Positions
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <motion.div
            key={job._id}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-400 transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">
              {job.job_title}
            </h2>
            <p className="text-gray-300 mb-1">{job.company_name}</p>
            <p className="text-sm text-gray-400 mb-3">
              {job.location?.city}, {job.location?.country} ({job.location?.remote_status})
            </p>
            <p className="text-gray-400 text-sm line-clamp-3">{job.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.required_skills?.slice(0, 3).map((skill, i) => (
                <span
                  key={i}
                  className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
