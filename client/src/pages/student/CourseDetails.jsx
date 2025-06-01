import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { assets, dummyEducatorData } from "../../assets/assets";
import Loading from "../../components/student/Loading";
import Footer from "../../components/student/Footer";
import Youtube from "react-youtube";
function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(0);
  const { allCourses, currency, calculateRating } = useContext(AppContext);
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const findCourse = allCourses.find((course) => course._id === id);
      setCourseData(findCourse);
    };

    if (allCourses.length > 0) {
      fetchCourseDetails();
    }
  }, [id, allCourses]);

  // Get educator name
  const getEducatorName = () => {
    if (typeof courseData?.educator === "string") {
      return dummyEducatorData.name;
    } else if (courseData?.educator && courseData.educator.name) {
      return courseData.educator.name;
    }
    return "Unknown Instructor";
  };

  // Calculate total duration
  const getTotalDuration = () => {
    if (!courseData?.courseContent) return 0;
    return courseData.courseContent.reduce((total, chapter) => {
      return (
        total +
        chapter.chapterContent.reduce((chapterTotal, lecture) => {
          return chapterTotal + (lecture.lectureDuration || 0);
        }, 0)
      );
    }, 0);
  };

  // Format duration in minutes to hours and minutes
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  if (!courseData) {
    return <Loading />;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-cyan-100/70 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Course Info */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  {" "}
                  <nav className="text-sm text-gray-500 mb-4">
                    <span
                      className="text-blue-600 cursor-pointer hover:underline"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </span>{" "}
                    /
                    <span
                      className="text-blue-600 cursor-pointer hover:underline ml-1"
                      onClick={() => navigate("/courses-list")}
                    >
                      Courses
                    </span>{" "}
                    /<span className="ml-1">{courseData.courseTitle}</span>
                  </nav>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {courseData.courseTitle}
                  </h1>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold">
                        {calculateRating(courseData).toFixed(1)}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            src={
                              i < Math.floor(calculateRating(courseData))
                                ? assets.star
                                : assets.star_blank
                            }
                            alt=""
                            className="w-4 h-4"
                          />
                        ))}
                      </div>
                      <span className="text-gray-500">
                        ({courseData.courseRatings.length} reviews)
                      </span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">
                      {courseData.enrolledStudents.length} students
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Created by{" "}
                    <span className="font-semibold text-blue-600">
                      {getEducatorName()}
                    </span>
                  </p>{" "}
                  <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
                    <div className="flex items-center space-x-2">
                      <img
                        src={assets.time_clock_icon}
                        alt=""
                        className="w-5 h-5"
                      />
                      <span>
                        {formatDuration(getTotalDuration())} total length
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src={assets.lesson_icon}
                        alt=""
                        className="w-5 h-5"
                      />
                      <span>{courseData.courseContent.length} chapters</span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* Right Column - Course Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                  {playerData ? (
                    <div className="mb-4">
                      <Youtube
                        videoId={playerData.videoId}
                        opts={{
                          width: "100%",
                          height: "200",
                          playerVars: {
                            autoplay: 1,
                          },
                        }}
                        iframeClassName="w-full rounded-lg"
                      />
                      <button
                        onClick={() => setPlayerData(null)}
                        className="mt-2 text-sm text-blue-600 hover:underline"
                      >
                        ← Back to course info
                      </button>
                    </div>
                  ) : (
                    <img
                      src={courseData.courseThumbnail}
                      alt={courseData.courseTitle}
                      className="w-full rounded-lg mb-4"
                    />
                  )}

                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">
                        {currency}
                        {(
                          courseData.coursePrice -
                          (courseData.discount * courseData.coursePrice) / 100
                        ).toFixed(2)}
                      </span>
                      {courseData.discount > 0 && (
                        <span className="text-lg text-gray-500 line-through">
                          {currency}
                          {courseData.coursePrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {courseData.discount > 0 && (
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                        {courseData.discount}% off
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                    Enroll Now
                  </button>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <img
                        src={assets.time_clock_icon}
                        alt=""
                        className="w-4 h-4"
                      />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src={assets.play_icon} alt="" className="w-4 h-4" />
                      <span>Access on mobile and TV</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src={assets.blue_tick_icon}
                        alt=""
                        className="w-4 h-4"
                      />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Course Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About this course
                </h2>
                <div
                  className="prose max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: courseData.courseDescription,
                  }}
                />
              </div>

              {/* Course Content */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Course Content
                </h2>
                <div className="space-y-4">
                  {courseData.courseContent.map((chapter, chapterIndex) => (
                    <div
                      key={chapterIndex}
                      className="border border-gray-200 rounded-lg"
                    >
                      <button
                        onClick={() =>
                          setSelectedChapter(
                            selectedChapter === chapterIndex ? -1 : chapterIndex
                          )
                        }
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                      >
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {chapter.chapterTitle}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {chapter.chapterContent.length} lectures •{" "}
                            {formatDuration(
                              chapter.chapterContent.reduce(
                                (total, lecture) =>
                                  total + lecture.lectureDuration,
                                0
                              )
                            )}
                          </p>
                        </div>
                        <img
                          src={assets.down_arrow_icon}
                          alt=""
                          className={`w-4 h-4 transition-transform ${
                            selectedChapter === chapterIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {selectedChapter === chapterIndex && (
                        <div className="border-t border-gray-200">
                          {chapter.chapterContent.map(
                            (lecture, lectureIndex) => (
                              <div
                                key={lectureIndex}
                                className="flex items-center justify-between p-4 hover:bg-gray-50"
                              >
                                <div className="flex items-center space-x-3">
                                  <img
                                    src={assets.play_icon}
                                    alt=""
                                    className="w-4 h-4"
                                  />
                                  <div>
                                    <p className="font-medium text-gray-900">
                                      {lecture.lectureTitle}
                                    </p>{" "}
                                    {lecture.isPreviewFree && (
                                      <span
                                        onClick={() =>
                                          setPlayerData({
                                            videoId: lecture.lectureUrl
                                              .split("/")
                                              .pop(),
                                          })
                                        }
                                        className="text-xs text-blue-600 font-medium cursor-pointer hover:underline"
                                      >
                                        Preview
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <span className="text-sm text-gray-500">
                                  {formatDuration(lecture.lectureDuration)}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Instructor Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Instructor
                </h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={dummyEducatorData.imageUrl}
                    alt={getEducatorName()}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getEducatorName()}
                    </h4>
                    <p className="text-sm text-gray-500">Course Instructor</p>
                  </div>
                </div>
              </div>

              {/* Course Stats */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Course Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students Enrolled</span>
                    <span className="font-semibold">
                      {courseData.enrolledStudents.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Lectures</span>
                    <span className="font-semibold">
                      {courseData.courseContent.reduce(
                        (total, chapter) =>
                          total + chapter.chapterContent.length,
                        0
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Duration</span>
                    <span className="font-semibold">
                      {formatDuration(getTotalDuration())}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Rating</span>
                    <span className="font-semibold">
                      {calculateRating(courseData).toFixed(1)}/5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      <Footer />
    </>
  );
}

export default CourseDetails;
