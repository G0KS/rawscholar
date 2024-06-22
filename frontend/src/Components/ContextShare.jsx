import { createContext, useState } from "react";

export const universityContext = createContext();
export const countryContext = createContext();
export const courseContext = createContext();

function ContextShare({ children }) {
  const [unviersityData, setUniversityData] = useState("");
  const [countryData, setCountryData] = useState("");
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
      </countryContext.Provider>
    </>
  );
}

export default ContextShare;
