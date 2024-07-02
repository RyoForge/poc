import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Natasha Khan",
    role: "Software Engineer",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  // Add more testimonials here
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <img src={testimonials[current].image} alt={testimonials[current].name} className="w-24 h-24 rounded-full object-cover border-4 border-white" />
        </div>
        <h3 className="text-2xl font-bold">{testimonials[current].name}</h3>
        <p className="text-sm text-gray-300">{testimonials[current].role}</p>
        <p className="mt-4">{testimonials[current].text}</p>
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 focus:outline-none"
        onClick={prevTestimonial}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 focus:outline-none"
        onClick={nextTestimonial}
      >
        <FaChevronRight />
      </button>
      <div className="mt-6 flex justify-center">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${index === current ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
