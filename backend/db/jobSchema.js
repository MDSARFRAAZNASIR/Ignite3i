// const mongoose = require("mongoose");
// const JobSchema = new mongoose.Schema({
//     jobtitale: { type: String, require: true },
//     joblocation: { type: String, require: true },
//     jobtype: { type: String, require: true },
//     jobdec: { type: String, require: true },
//     jobtype: { type: String, require: true },
//     jobresponsibilities: [String],
//     jobskill: [String]
// });
// const JobData=mongoose.model("job", JobSchema)
// module.exports=JobData;
// models/Job.js
const mongoose=require("mongoose")

const jobSchema = new mongoose.Schema({
  job_title: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
  job_type: {
    type: String,
    required: true,
    enum: ["Full-time", "Part-time", "Contract", "Internship"],
  },
  description: {
    type: String,
    required: true,
  },

  // Location
  location: {
    city: { type: String },
    state_province: { type: String },
    country: { type: String },
    remote_status: {
      type: String,
      enum: ["Remote", "Hybrid", "On-site"],
    },
  },

  // Salary & Benefits
  salary_range: {
    min: { type: Number },
    max: { type: Number },
    currency: { type: String, default: "USD" },
  },
  benefits: [{ type: String }],

  // Requirements
  experience_level: {
    type: String,
    enum: ["Entry-level", "Mid-level", "Senior-level", "Lead", "Executive"],
  },
  required_skills: [{ type: String }],
  preferred_skills: [{ type: String }],
  education_requirement: { type: String },

  // Metadata
  posted_date: { type: Date, default: Date.now },
  expiry_date: { type: Date },
  status: {
    type: String,
    enum: ["Active", "Closed", "On Hold", "Draft"],
    default: "Active",
  },
  hiring_manager_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  applicants_count: {
    type: Number,
    default: 0,
  },
  application_link: { type: String },
});
const Job=mongoose.model("Job", jobSchema);
module.exports=Job
