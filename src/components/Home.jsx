import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Footer from './Footer';
import Header from './Header';
import ProgramCard from './ProgramCard';
import TestimonialSection from './Testimonial';
import Heropng from '../assets/images/collegestudent.png';
import img1 from '../assets/images/img4.jpg';
import img2 from '../assets/images/img5.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/arts.jpg';
import img5 from '../assets/images/business.jpg';
import img6 from '../assets/images/engineering.jpg';
import img7 from '../assets/images/health.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] md:h-[70vh] bg-gradient-to-r from-purple-800 via-teal-500 to-green-500 text-white flex flex-col md:flex-row transform transition-transform duration-700 ease-in-out" data-aos="fade-up">
          <div className="flex flex-1 flex-col justify-center p-10 md:p-20 space-y-5">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              GreenField University
            </h1>
            <p className="text-lg md:text-xl font-light">&quot;Empowering Minds, Shaping Futures&quot;</p>
            <div className="flex space-x-4 mt-6">
              <a href="/apply" className="bg-orange-500 hover:bg-orange-600 text-black py-2 px-4 rounded transition duration-200">
                Apply Now
              </a>
              <a href="/visit" className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded border border-gray-300 transition duration-200">
                Visit Us
              </a>
              <a href="/programs" className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded border border-gray-300 transition duration-200">
                Explore Programs
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              src={Heropng}
              alt="Professional Education"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-16 bg-white text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold">About Our College</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Welcome to [Your College Name], where innovation meets tradition. Our commitment to excellence in education is unwavering, ensuring that every student is prepared for the future.
          </p>
          <a href="/about" className="mt-6 inline-block text-blue-500 hover:text-blue-700">
            Learn More About Us
          </a>
        </section>

        {/* Programs Section */}
        <section className="w-full py-16 bg-gray-100 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Explore Our Academic Offerings</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Explore a variety of programs designed to meet your educational needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <ProgramCard
              title="Engineering"
              price="Cutting-edge research and hands-on learning."
              image={img6}
            />
            <ProgramCard
              title="Business Administration"
              price="Preparing tomorrow's business leaders."
              image={img5}
            />
            <ProgramCard
              title="Arts & Humanities"
              price="Cultivating creativity and critical thinking."
              image={img4}
            />
            <ProgramCard
              title="Health Sciences"
              price="Leading in health education and research."
              image={img7}
            />
          </div>
          <a href="/programs" className="mt-6 inline-block text-blue-500 hover:text-blue-700">
            View All Programs
          </a>
        </section>

        {/* News & Events Section */}
        <section className="w-full py-16 bg-white text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Latest News</h3>
              <ul className="space-y-4 text-left">
                <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
                  <p className="text-lg font-semibold">&quot;Groundbreaking Ceremony for New Science Building&quot;</p>
                  <p className="text-sm text-gray-600">Date: March 10, 2024</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
                  <p className="text-lg font-semibold">&quot;Alumni Success Stories: From Campus to Career&quot;</p>
                  <p className="text-sm text-gray-600">Date: April 5, 2024</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
              <ul className="space-y-4 text-left">
                <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
                  <p className="text-lg font-semibold">&quot;Fall Semester Orientation&quot;</p>
                  <p className="text-sm text-gray-600">Date: August 15, 2024</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
                  <p className="text-lg font-semibold">&quot;Annual College Festival&quot;</p>
                  <p className="text-sm text-gray-600">Date: September 10, 2024</p>
                </li>
              </ul>
            </div>
          </div>
          <a href="/news" className="mt-6 inline-block text-blue-500 hover:text-blue-700">
            More News & Events
          </a>
        </section>

        {/* Testimonials Section */}
        <TestimonialSection>
          <section className="w-full py-16 bg-gray-100 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold">Hear From Our Students</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Student Testimonial Carousel Here
            </p>
          </section>
        </TestimonialSection>

        {/* Statistics Section */}
        <section className="w-full py-16 bg-gray-200 text-center" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">By the Numbers</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-2">Total Students</h3>
                <p className="text-3xl font-bold">10,000+</p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-2">Programs Offered</h3>
                <p className="text-3xl font-bold">50+</p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-2">Faculty Members</h3>
                <p className="text-3xl font-bold">300+</p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-2">Research Grants</h3>
                <p className="text-3xl font-bold">$5M annually</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-16 bg-gray-100 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8">Our Campus in Pictures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative group">
              <img src={img1} alt="Campus" className="w-full h-64 object-cover rounded-lg transition duration-300 transform group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={img1} target="_blank" rel="noopener noreferrer" className="text-white font-bold">View Larger</a>
              </div>
            </div>
            <div className="relative group">
              <img src={img2} alt="Campus" className="w-full h-64 object-cover rounded-lg transition duration-300 transform group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={img2} target="_blank" rel="noopener noreferrer" className="text-white font-bold">View Larger</a>
              </div>
            </div>
            <div className="relative group">
              <img src={img3} alt="Campus" className="w-full h-64 object-cover rounded-lg transition duration-300 transform group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={img3} target="_blank" rel="noopener noreferrer" className="text-white font-bold">View Larger</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-16 bg-white text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Address: 123 College Avenue, City, State, ZIP
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@yourcollege.edu
          </p>
          <a href="/contact" className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded shadow transition duration-200">
            Contact Us
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
