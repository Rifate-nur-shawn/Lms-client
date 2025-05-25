import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";
import SearchBar from "../../components/student/SearchBar";
import Footer from "../../components/student/Footer";

function CoursesList() {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter courses based on search input and category
  useEffect(() => {
    let filtered = allCourses;

    // Filter by search input
    if (input) {
      filtered = filtered.filter(
        (course) =>
          course.courseTitle.toLowerCase().includes(input.toLowerCase()) ||
          course.courseDescription.toLowerCase().includes(input.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((course) =>
        course.courseTitle
          .toLowerCase()
          .includes(selectedCategory.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  }, [allCourses, input, selectedCategory]);

  const categories = [
    "All",
    "JavaScript",
    "Python",
    "Web Development",
    "Data Science",
    "Cybersecurity",
    "Cloud Computing",
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Our Courses
              </h1>
              <p className="text-gray-500 mb-4">
                <span
                  className="text-blue-600 cursor-pointer hover:underline"
                  onClick={() => navigate("/")}
                >
                  Home
                </span>{" "}
                / <span>Courses List</span>
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <SearchBar data={input} />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Results Info */}
          <div className="mb-8">
            <p className="text-gray-600">
              {input && (
                <span>
                  Showing results for "<strong>{input}</strong>" •
                </span>
              )}
              <span className="ml-1">
                {filteredCourses.length} course
                {filteredCourses.length !== 1 ? "s" : ""} found
              </span>
            </p>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => (
                <CourseCard key={course._id || index} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-500 mb-6">
                  {input
                    ? `We couldn't find any courses matching "${input}". Try adjusting your search terms.`
                    : "No courses match the selected filters. Try selecting a different category."}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    navigate("/course-list");
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View All Courses
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CoursesList;
