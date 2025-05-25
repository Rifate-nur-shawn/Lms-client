import React from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  const { currency, calculateRating } = useContext(AppContext);

  // Get educator name - handle both string ID and object
  const getEducatorName = () => {
    if (typeof course.educator === "string") {
      // If educator is just an ID, use dummy educator data
      return dummyEducatorData.name;
    } else if (course.educator && course.educator.name) {
      // If educator is an object with name
      return course.educator.name;
    }
    return "Unknown Instructor";
  };

  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg hover:shadow-lg transition-shadow bg-white"
    >
      <img
        className="w-full h-48 object-cover"
        src={course.courseThumbnail}
        alt={course.courseTitle}
      />
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold mb-2 line-clamp-2">
          {course.courseTitle}
        </h3>
        <p className="text-gray-500 text-sm mb-3">{getEducatorName()}</p>
        <div className="flex items-center space-x-2 mb-3">
          <p className="text-sm font-medium">
            {calculateRating(course).toFixed(1)}
          </p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(calculateRating(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt=""
                className="w-3.5 h-3.5"
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            ({course.courseRatings.length})
          </p>
        </div>
        <p className="text-gray-800 text-lg font-semibold">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
          {course.discount > 0 && (
            <span className="text-sm text-gray-500 line-through ml-2">
              {currency}
              {course.coursePrice.toFixed(2)}
            </span>
          )}
        </p>
        {course.discount > 0 && (
          <p className="text-green-600 text-sm font-medium">
            {course.discount}% off
          </p>
        )}
      </div>
    </Link>
  );
}

export default CourseCard;
