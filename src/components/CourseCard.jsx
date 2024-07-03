import PropTypes from 'prop-types';

const CourseCard = ({ title, description, instructor, category }) => {
  return (
    <div className="course-card bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <p className="mb-2"><strong>Instructor:</strong> {instructor}</p>
      {category && <p><strong>Category:</strong> {category}</p>}
    </div>
  );
};

// Define prop types
CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  category: PropTypes.string, // Optional prop
};

export default CourseCard;
