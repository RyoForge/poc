import PropTypes from 'prop-types';

const ProgramCard = ({ title, price, description, image, students, lessons, rating }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-96 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{price}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{students}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{lessons}</span>
      </div>
      <div className="px-6 py-4 flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.078 3.316a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.078 3.316c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.078-3.316a1 1 0 00-.364-1.118L2.98 8.743c-.784-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.078-3.316z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

ProgramCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  students: PropTypes.string.isRequired,
  lessons: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ProgramCard;
