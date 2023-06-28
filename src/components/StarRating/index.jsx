import {IoIosStar} from "react-icons/io";

const StarRating = ({ rating }) => {
  const getStarColor = (index) => {
    if (rating >= index + 1) {
      return 'text-[#f9a825]'; // Color for filled star
    } else if (rating > index && rating < index + 1) {
      const percentage = (rating - index) * 100;
      return `bg-gradient-to-r from-[#f9a825] to-transparent bg-clip-text text-transparent bg-gradient-to-r via-[#f9a825] w-${percentage}`; // Color for partially filled star
    } else {
      return 'text-gray-300'; // Color for empty star
    }
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <IoIosStar key={index} className={`h-5 w-5 ${getStarColor(index)}`} />
      ))}
    </div>
  );
};

export default StarRating;