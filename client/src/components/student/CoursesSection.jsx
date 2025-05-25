import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

function CoursesSection() {
  const { allCourses } = useContext(AppContext);
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl fornt-medium text-gray-800 text-center">
        Learn from the Best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3 text-center">
        Ready to stop dreaming and start doing? Your digital destiny awaits.
        <br />
        Enroll in Presync Academy, and let's turn those wild ideas into
        jaw-dropping digital realities.{" "}
      </p>

      <div className="md:my-16 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 gap-4 mb-8">
          {allCourses.slice(0, 4).map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {" "}
          <Link
            to={"/courses-list"}
            onClick={() => scrollTo(0, 0)}
            className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded hover:bg-gray-50 transition-colors"
          >
            Show all courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;
