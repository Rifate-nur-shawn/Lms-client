import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function MyEnrollments() {
  const { enrolledCourses, courseDuration } = useContext(AppContext);
  const [progressArray, _setProgressArray] = React.useState([
    {
      lactureCompleted: 4,
      totalLectures: 4,
    },
    {
      lactureCompleted: 2,
      totalLectures: 10,
    },
    {
      lactureCompleted: 6,
      totalLectures: 10,
    },
    {
      lactureCompleted: 8,
      totalLectures: 10,
    },
  ]);

  // Debug logging
  console.log("MyEnrollments - enrolledCourses:", enrolledCourses);
  console.log(
    "MyEnrollments - enrolledCourses length:",
    enrolledCourses?.length
  );

  return (
    <>
      <div className="md:px-36 px-8 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 ">
            {enrolledCourses.map((course, index) => (
              <tr key={index} className="border-b border-gray-500/20 ">
                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                  <img
                    src={course.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24"
                  />
                  <div className="flex-1">
                    <p className="mb-1 max-sm:text-sm">{course.courseTitle}</p>
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {courseDuration(course)}
                </td>{" "}
                <td className="px-4 py-3 max-sm:hidden">
                  {progressArray[index]
                    ? `${progressArray[index].lactureCompleted}/${progressArray[index].totalLectures}`
                    : "0/0"}{" "}
                  <span>Lectures</span>
                </td>
                <td className="px-4 py-3 max-sm:text-right ">
                  <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white">
                    On Going
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyEnrollments;
