import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const SearchBar = ({ data, onSearchChange }) => {
  const navigate = useNavigate();
  const { allCourses } = useContext(AppContext);
  const [input, setInput] = useState(data ? data : "");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Generate suggestions based on input
  useEffect(() => {
    if (input.length > 0) {
      const filteredSuggestions = [];

      // Get course title suggestions
      allCourses.forEach((course) => {
        if (course.courseTitle.toLowerCase().includes(input.toLowerCase())) {
          filteredSuggestions.push({
            type: "course",
            title: course.courseTitle,
            subtitle: "Course",
            id: course._id,
          });
        }
      });

      // Get category suggestions
      const categories = [
        "JavaScript",
        "Python",
        "Web Development",
        "Data Science",
        "Cybersecurity",
        "Cloud Computing",
      ];
      categories.forEach((category) => {
        if (category.toLowerCase().includes(input.toLowerCase())) {
          filteredSuggestions.push({
            type: "category",
            title: category,
            subtitle: "Category",
            id: category,
          });
        }
      }); // Get instructor suggestions
      const instructors = ["Presync Academy"]; // Static instructor for now
      instructors.forEach((instructor) => {
        if (instructor.toLowerCase().includes(input.toLowerCase())) {
          filteredSuggestions.push({
            type: "instructor",
            title: instructor,
            subtitle: "Instructor",
            id: instructor,
          });
        }
      });

      setSuggestions(filteredSuggestions.slice(0, 8)); // Limit to 8 suggestions
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [input, allCourses]);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setActiveSuggestion(-1);

    // If onSearchChange prop is provided, call it for real-time search
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  // Handle form submission
  const onSearchHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate("/courses-list/" + encodeURIComponent(input.trim()));
      setShowSuggestions(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion.title);
    setShowSuggestions(false);

    if (suggestion.type === "course") {
      navigate("/course/" + suggestion.id);
    } else {
      navigate("/courses-list/" + encodeURIComponent(suggestion.title));
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveSuggestion((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (activeSuggestion >= 0) {
          handleSuggestionClick(suggestions[activeSuggestion]);
        } else {
          onSearchHandler(e);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setActiveSuggestion(-1);
        break;
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
        setActiveSuggestion(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative max-w-xl w-full">
      <form
        onSubmit={onSearchHandler}
        className="md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded-lg shadow-sm"
      >
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="md:w-auto w-10 px-3"
        />
        <input
          ref={inputRef}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => input.length > 0 && setShowSuggestions(true)}
          value={input}
          type="text"
          placeholder="Search for courses, categories, or instructors..."
          className="w-full h-full outline-none text-gray-700 px-2"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-white md:px-10 px-7 md:py-3 py-2 mx-1"
        >
          Search
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50 max-h-80 overflow-y-auto"
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={`${suggestion.type}-${suggestion.id}`}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`px-4 py-3 cursor-pointer flex items-center justify-between hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
                index === activeSuggestion ? "bg-blue-50" : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                    suggestion.type === "course"
                      ? "bg-blue-100 text-blue-600"
                      : suggestion.type === "category"
                      ? "bg-green-100 text-green-600"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  {suggestion.type === "course"
                    ? "📚"
                    : suggestion.type === "category"
                    ? "🏷️"
                    : "👨‍🏫"}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {suggestion.title}
                  </p>
                  <p className="text-xs text-gray-500">{suggestion.subtitle}</p>
                </div>
              </div>
              <img
                src={assets.arrow_icon}
                alt="go"
                className="w-4 h-4 opacity-50"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
