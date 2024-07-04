import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import backgroundImg from '../assets/images/college-background.png';
import image1 from '../assets/images/engineering.jpg';
import business from '../assets/images/business.jpg';
import arts from '../assets/images/arts.jpg';
import health from '../assets/images/health.jpg';

// Sample courses data with added fields for better demonstration
const coursesData = [
  { 
    title: 'Computer Science', 
    description: 'Introduction to Computer Science', 
    instructor: 'Dr. Smith', 
    category: 'Science',
    duration: '3 months',
    price: '₹29900',
    image: image1
  },
  { 
    title: 'Business Management', 
    description: 'Fundamentals of Business Management', 
    instructor: 'Prof. Johnson', 
    category: 'Business',
    duration: '6 months',
    price: '₹39900',
    image: business
  },
  { 
    title: 'Art History', 
    description: 'Exploring Art through the Ages', 
    instructor: 'Dr. Lee', 
    category: 'Arts',
    duration: '4 months',
    price: '₹24900',
    image: arts
  },
  { 
    title: 'Biology', 
    description: 'Basics of Biology and Health Science', 
    instructor: 'Dr. Brown', 
    category: 'Science',
    duration: '3 months',
    price: '₹27900',
    image: health
  },
];

const Courses = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter courses based on the search query
  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full space-y-6 px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold animate-fade-in">
              Discover Our Courses
            </h1>
            <p className="text-xl md:text-2xl font-light animate-slide-in-left">
              Excellence in Education, Diversity in Learning
            </p>
            <a href="#courses" className="bg-orange-500 hover:bg-orange-600 text-black py-3 px-6 rounded-full font-bold animate-bounce">
              Explore Courses
            </a>
          </div>
        </section>

        {/* Search Bar */}
        <section id="search" className="w-full py-8 bg-white flex justify-center items-center" data-aos="fade-up">
          <input
            type="text"
            placeholder="Search for courses..."
            className="p-3 pr-6 pl-6 border rounded-xl shadow-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </section>

        {/* Course Categories */}
        <section id="courses" className="w-full py-16 bg-gray-100 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Our Course Offerings</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Explore a variety of programs designed to meet your educational needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-5">
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                instructor={course.instructor}
                category={course.category}
                duration={course.duration}
                price={course.price}
                image={course.image}
              />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-16 bg-gray-100 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold">What Our Students Say</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Hear from those who have experienced our courses and benefited from our education.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="max-w-md bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
              <p className="text-lg italic">
              &quot;The courses provided were extremely comprehensive and well-structured. I learned so much!&quot;
              </p>
              <p className="mt-4 font-bold">Jane Doe</p>
              <p className="text-gray-600">Computer Science Major</p>
            </div>
            <div className="max-w-md bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
              <p className="text-lg italic">
              &quot;The instructors were knowledgeable and engaging. The course content was practical and useful.&quot;
              </p>
              <p className="mt-4 font-bold">John Smith</p>
              <p className="text-gray-600">Business Management Student</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 text-center text-white bg-orange-600" data-aos="fade-up">
          <h2s className="text-3xl font-bold">Ready to Start Learning?</h2s>
          <p className="mt-4 text-lg max-w-2xl mx-auto p-2 pb-8">
            Join us today and take the first step towards achieving your educational goals.
          </p>
          <a href="#courses" className="bg-cta-bg hover:bg-orange-600 text-cta-text py-3 px-6 rounded-full font-bold mt-6">
            Explore More Courses
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Courses;
