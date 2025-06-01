import { createContext, use, useEffect } from "react";

import { useState } from "react";
import App from "../App";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();
export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  //Fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };
  //function to calculate average rating of cource
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  }; //fatch user enrolled courses
  const fetchEnrolledCourses = async () => {
    // This function would typically make an API call to fetch the enrolled courses
    // For now, we will use dummy data
    setEnrolledCourses(dummyCourses);
  };

  // Calculate total course duration
  const courseDuration = (course) => {
    if (!course?.courseContent) return "0h 0m";

    const totalMinutes = course.courseContent.reduce((total, chapter) => {
      return (
        total +
        chapter.chapterContent.reduce((chapterTotal, lecture) => {
          return chapterTotal + (lecture.lectureDuration || 0);
        }, 0)
      );
    }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };
  useEffect(() => {
    fetchAllCourses();
    fetchEnrolledCourses();
  }, []);
  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    enrolledCourses,
    fetchEnrolledCourses,
    courseDuration,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
