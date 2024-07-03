import PropTypes from 'prop-types';

const CourseCard = ({ title, description, instructor, category, duration, price, image }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-60 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-500 text-sm mt-2">Instructor: {instructor}</p>
        <p className="text-gray-500 text-sm">Category: {category}</p>
        <p className="text-gray-500 text-sm">Duration: {duration}</p>
        <p className="text-gray-500 text-sm">Price: {price}</p>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CourseCard;
