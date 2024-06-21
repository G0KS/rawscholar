import { createContext, useState } from "react";

export const universityContext = createContext();
export const countryContext = createContext();
<<<<<<< HEAD
export const courseContext = createContext();
=======
>>>>>>> master

function ContextShare({ children }) {
  const [unviersityData, setUniversityData] = useState("");
  const [countryData, setCountryData] = useState("");
<<<<<<< HEAD
  const [courseData, setCourseData] = useState("");
  return (
    <>
      <countryContext.Provider value={{ countryData, setCountryData }}>
        <courseContext.Provider value={{ courseData, setCourseData }}>
          <universityContext.Provider
            value={{ unviersityData, setUniversityData }}
          >
            {children}
          </universityContext.Provider>
        </courseContext.Provider>
=======
  return (
    <>
      <countryContext.Provider value={{ countryData, setCountryData }}>
        <universityContext.Provider
          value={{ unviersityData, setUniversityData }}
        >
          {children}
        </universityContext.Provider>
>>>>>>> master
      </countryContext.Provider>
    </>
  );
}

export default ContextShare;
