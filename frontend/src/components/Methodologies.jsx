import React from 'react'
 import { motion } from "framer-motion";
 import Particles from "react-tsparticles";

const Methodologies = () => {
  const methodologies = [
    {
      title: "Building Competence for Emerging Technologies",
      desc: "Today’s businesses need to innovate with speed while reducing costs and managing the complexity of new and existing technologies. Virtusa combines engineering best practices and industry expertise to help clients drive digital transformation at scale, improve performance and stay ahead of the competition. \n \n Building for the future starts now.  We harness the power of digital technologies and our engineering expertise to help companies continually innovate and drive maximum efficiencies. Accelerate transformation and growth by optimizing the latest tools, technologies and processes across the enterprise.",
      img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    },
    {
      title: "Team Managed and Services",
      desc: ( <> {" "} <span className="text-yellow-400 font-semibold"> Application Support & Management </span> :  <br/> Innovate, evolve, and gain a competitive advantage by transforming your application performance. We help modernize your applications portfolio to reduce costs and improve business agility. <br/> <span className="text-yellow-400 font-semibold"  >Application Development: </span> <br/> Reduced cycle times, and project risks and costs while maintaining high-quality delivery. Application Modernization. <br/> <span className="text-yellow-400 font-semibold"> Application Modernization:</span> <br/> Enhance application flexibility, improve business alignment, and reduce TCO. Application Support & Maintenance.<br/> <span className="text-yellow-400 font-semibold">Application Support & Maintenance:</span> <br/>Improve productivity, reduce maintenance costs, and maximize service levels.</>),
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      title: "Build Operate and Transfer",
      desc: "In the case of Build-Operate-Transfer Model, Ign forms a dedicated facility (incubation center in other terms) for the customer which operates like an extension of the customer’s own facility during the initial stages. \n \n The dedicated facility leverages Ignite3i’s infrastructure and processes. Human resources for this dedicated facility can be the existing employees of Ignite3i or the customer or a mix of both or those hired freshly through joint recruitment effort. \n \n Ignite3i has a well defined mechanism for smooth transition of the facility to the customer after a mutually agreed period. \n \n This model has the following advantages to the customers: \n Lower Establishment Costs\n Faster Time to Market\n Flexibility \n Reduced Risk \n Leveraging of our proven process expertise \n Option of owning the facility",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920322.png",
    },
    {
      title: "Co Creations",
      desc: "We help start-ups to evaluate new ideas and tech, create prototypes and build awesome products that scale. We accelerate your product roadmaps with our specialized. \n \n We also help you to re-platform your existing products to latest architectures and frameworks. Our people co-create and co-develop your products to delight your customers. \n \n Talk to us today.",
      img: "https://cdn-icons-png.flaticon.com/512/4149/4149684.png",
    },
    {
      title: "Professional Services",
      desc: (<> {" "} An Overview of Our Key Solutions :<br/> <span className="text-yellow-400 font-semibold">Service Enterprise Operations & Back Office Management : </span> Transform operations, consolidate common services and improve back office efficiency, develop common service delivery tools and processes, and create shared capacities. <br/> <span className="text-yellow-400 font-semibold"> IT Service Consolidation post Mergers & Acquisition :</span> Ensure timely completion of IT integration. <br/> <span className="text-yellow-400 font-semibold" >Service Workforce Management : </span>  Attract, recruit, develop, and retain a diverse body of talent that brings innovative ideas, perspectives, and views to the workplace. <br/> <span className="text-yellow-400 font-semibold"> Service Project Delivery & Customer Management : </span> Deploy solutions and services to automate project based services workflows and customer reporting. <br/> <span className="text-yellow-400 font-semibold">Service Delivery Assurance, Risk Management & Compliance : </span>  Automate stringent compliance processes using a risk-based approach to protect information, address threats quickly, and reduce costs and risks </>),
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen py-16 px-6 overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: "#000" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          },
          particles: {
            color: { value: "#00bfff" },
            links: {
              color: "#00bfff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 2 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-16 relative z-10"
      >
        Our Methodologies
      </motion.h1>

      {/* Sections */}
      <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
        {methodologies.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line mb-6">{item.desc}</p>
            </div>

            {/* Image Section */}
            <motion.img
              src={item.img}
              alt={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-72 md:w-96 drop-shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}




export default Methodologies
