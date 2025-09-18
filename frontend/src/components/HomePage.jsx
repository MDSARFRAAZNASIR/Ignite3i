import React from 'react'

    import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button"; // if you're using shadcn, else replace with <button>

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 homepage">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-blue-600">Ignite3i</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Ignite3i is a cutting-edge software company delivering scalable,
            secure, and innovative digital solutions. From web applications to
            AI-driven platforms, we help businesses transform ideas into
            powerful products.
          </p>
          {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md">
            Get Started
          </Button> */}
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-0"
        >
          <img
            src="https://www.google.com/search?sca_esv=6534821db4ca833b&rlz=1C1UEAD_enIN1020IN1020&sxsrf=AE3TifNAMx5zVNK7eRO2n7wgQkE5SGw2dQ:1758095238960&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeioyp3OhN11EY0n5qfq-zENwnGygERInUV_0g0XKeHGJRAdFPaX_SSIJt7xYUfpm-75lA8Uar42yNWdqGuJlUAl_z5rxbQwJfseCgtKlK9ei0AWyXvoW1GpZmQ7JgAbwM0z2tYG_4RSbRyzyHcYz2pj6AZ4Q_AMYEQh-kh4YAtXa7uNJbA&q=laptop+with+coding+image&sa=X&ved=2ahUKEwixhcyRp9-PAxWET2wGHeSbDzwQtKgLegQIExAB&biw=1280&bih=551&dpr=1.5#vhid=JeCSJg31nvglyM&vssid=mosaic"
            alt="Computer Illustration"
            className="w-80 md:w-[420px] drop-shadow-lg"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            About Ignite3i
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            At Ignite3i, we specialize in software development, AI
            integration, and digital transformation. Our team of experts works
            with startups, enterprises, and global organizations to craft
            next-generation software solutions that drive innovation and
            efficiency. <br />
            <br />
            From cloud-based platforms to mobile apps, Ignite3i is committed to
            delivering excellence through technology and creativity.
          </motion.p>
        </div>
      </section>
    </div>
  );
}


export default HomePage
