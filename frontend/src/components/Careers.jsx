
   import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Careers = () => {


  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs") // change if backend hosted
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        <h2 className="text-xl animate-pulse">Loading jobs...</h2>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white px-6 py-16">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Careers at <span className="text-yellow-400">Ignite3i</span>
      </motion.h1>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-400">🚫 No job openings currently.</p>
      ) : (
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {jobs.map((job, index) => (
            <motion.div
              key={job._id}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-800 hover:border-yellow-400 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-400 text-sm mb-2">
                {job.location} • {job.type}
              </p>
              <p className="text-gray-300 mb-4">{job.desc}</p>

              <Link
                to={`/careers/${job._id}`}
                className="mt-4 inline-block px-5 py-2 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-300 transition"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}


export default Careers
