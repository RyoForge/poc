import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBook, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgramCard from '../components/ProgramCard';
import TestimonialSection from './Testimonial';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img4.jpg';
import img4 from '../assets/images/arts.jpg';
import img5 from '../assets/images/business.jpg';
import img6 from '../assets/images/engineering.jpg';
import img7 from '../assets/images/health.jpg';
import collegeBackground from '../assets/images/college-background.png';

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
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${collegeBackground})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full space-y-6 px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold animate-fade-in">
              Empowering Minds, Shaping Futures
            </h1>
            <p className="text-xl md:text-2xl font-light animate-slide-in-left">
              Welcome to S V M Arts Science and Commerce College - Your Journey Starts Here
            </p>
            <a href="/apply" className="bg-orange-500 hover:bg-orange-600 text-black py-3 px-6 rounded-full font-bold animate-bounce">
              Apply Now
            </a>
          </div>
          <div className="absolute bottom-10 w-full flex justify-center space-x-8 text-white">
            <div className="flex flex-col items-center animate-fade-in-icon">
              <FaBook className="text-4xl" />
              <span>Academics</span>
            </div>
            <div className="flex flex-col items-center animate-fade-in-icon">
              <FaChalkboardTeacher className="text-4xl" />
              <span>Faculty</span>
            </div>
            <div className="flex flex-col items-center animate-fade-in-icon">
              <FaUsers className="text-4xl" />
              <span>Community</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 bg-white text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold">About Our College</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Welcome to S V M Arts Science and Commerce College, where excellence meets tradition. Our commitment to excellence in education is unwavering, ensuring that every student is prepared for the future.
          </p>
          <a href="/about" className="mt-6 inline-block text-blue-500 hover:text-blue-700">
            Learn More About Us
          </a>
        </section>

        {/* Programs Section */}
        <section id="programs" className="w-full py-16 bg-gray-100 text-center" data-aos="fade-up">
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
                <h3 className="text-xl font-bold mb-2">Alumni Network</h3>
                <p className="text-3xl font-bold">20,000+</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-16 bg-white text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8">Campus Gallery</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src={img1} alt="Gallery Image 1" className="rounded-lg shadow-lg" />
            <img src={img2} alt="Gallery Image 2" className="rounded-lg shadow-lg" />
            <img src={img3} alt="Gallery Image 3" className="rounded-lg shadow-lg" />
          </div>
          <a href="/gallery" className="mt-6 inline-block text-blue-500 hover:text-blue-700">
            View More Photos
          </a>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 bg-gray-100 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Have questions or need more information? Contact our admissions team today!
          </p>
          <a href="/contact" className="mt-6 inline-block text-blue-500 hover:text-blue-700">
            Contact Form
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
