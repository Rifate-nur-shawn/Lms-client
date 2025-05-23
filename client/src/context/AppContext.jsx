import { createContext, use, useEffect } from "react";

import { useState } from "react";
import App from "../App";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();
export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate=useNavigate();
  const [allCourses, setAllCourses] = useState([]);
  //Fetch all courses
  const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }
useEffect(() => {
    fetchAllCourses();
  },[]);
  const value = {
    currency,allCourses,navigate
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
