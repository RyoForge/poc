import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import backgroundImg from '../assets/images/college-background.png';

const coursesData = [
  { title: 'Computer Science 101', description: 'Introduction to Computer Science', instructor: 'Dr. Smith', category: 'Science' },
  { title: 'Business Management', description: 'Fundamentals of Business Management', instructor: 'Prof. Johnson', category: 'Business' },
  { title: 'Art History', description: 'Exploring Art through the Ages', instructor: 'Dr. Lee', category: 'Arts' },
  { title: 'Biology 101', description: 'Basics of Biology', instructor: 'Dr. Brown', category: 'Science' },
];

const Courses = () => {
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

        {/* Course Categories */}
        <section id="courses" className="w-full py-16 bg-gray-100 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Our Course Offerings</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Explore a variety of programs designed to meet your educational needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {coursesData.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                instructor={course.instructor}
                category={course.category}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Courses;
