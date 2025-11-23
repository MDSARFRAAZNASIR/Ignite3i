// src/pages/PostJobPage.jsx
import React, { useState } from "react";

const PostJobPage = () => {
  const [formData, setFormData] = useState({
    job_title: "",
    company_name: "Ignite3i", // default
    department: "",
    job_type: "",
    description: "",
    location: {
      city: "",
      state_province: "",
      country: "",
      remote_status: "",
    },
    salary_range: { min: "", max: "", currency: "INR" },
    benefits: "",
    experience_level: "",
    required_skills: "",
    preferred_skills: "",
    education_requirement: "",
    application_link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // handle nested objects
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert comma separated inputs to arrays
    const jobData = {
      ...formData,
      benefits: formData.benefits.split(",").map((b) => b.trim()),
      required_skills: formData.required_skills.split(",").map((s) => s.trim()),
      preferred_skills: formData.preferred_skills
        .split(",")
        .map((s) => s.trim()),
    };
    
    try {ignite3i-backend.vercel.app
      const res = await fetch("ignite3i-backend.vercel.app/jobcreate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });
      if (res.ok) {
        alert("✅ Job posted successfully!");
        setFormData({ ...formData, job_title: "", description: "" });
      } else {
        alert("❌ Failed to post job.");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="bg-black min-h-screen text-white flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-3xl space-y-4"
      >
        <h1 className="text-3xl font-bold text-yellow-400">Post a Job</h1>
        <input
          type="text"
          name="job_title"
          placeholder="Job Title"
          value={formData.job_title}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />

        <select
          name="job_type"
          value={formData.job_type}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        >
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>

        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />

        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            name="location.city"
            placeholder="City"
            value={formData.location.city}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="text"
            name="location.state_province"
            placeholder="State/Province"
            value={formData.location.state_province}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="text"
            name="location.country"
            placeholder="Country"
            value={formData.location.country}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <select
            name="location.remote_status"
            value={formData.location.remote_status}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
          >
            <option>On-site</option>
            <option>Hybrid</option>
            <option>Remote</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <input
            type="number"
            name="salary_range.min"
            placeholder="Min Salary"
            value={formData.salary_range.min}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="number"
            name="salary_range.max"
            placeholder="Max Salary"
            value={formData.salary_range.max}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="text"
            name="salary_range.currency"
            placeholder="Currency"
            value={formData.salary_range.currency}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
          />
        </div>

        <input
          type="text"
          name="benefits"
          placeholder="Benefits (comma separated)"
          value={formData.benefits}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <select
          name="experience_level"
          value={formData.experience_level}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        >
          <option>Entry-level</option>
          <option>Mid-level</option>
          <option>Senior-level</option>
          <option>Lead</option>

          <option>Executive</option>
        </select>

        <input
          type="text"
          name="required_skills"
          placeholder="Required Skills (comma separated)"
          value={formData.required_skills}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />

        <input
          type="text"
          name="preferred_skills"
          placeholder="Preferred Skills (comma separated)"
          value={formData.preferred_skills}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />

        <input
          type="text"
          name="education_requirement"
          placeholder="Education Requirement"
          value={formData.education_requirement}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />

        <input
          type="text"
          name="application_link"
          placeholder="Application Link"
          value={formData.application_link}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black p-3 rounded font-bold hover:bg-yellow-300"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJobPage;
