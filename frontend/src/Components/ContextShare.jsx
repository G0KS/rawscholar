import { createContext, useState } from "react";

export const universityContext = createContext();
export const countryContext = createContext();
export const courseContext = createContext();
export const userContext = createContext();

function ContextShare({ children }) {
   const [unviersityData, setUniversityData] = useState("");
   const [countryData, setCountryData] = useState("");
   const [courseData, setCourseData] = useState("");
   const [userData, setUserData] = useState("");
   return (
      <>
         <userContext.Provider value={{ userData, setUserData }}>
            <countryContext.Provider value={{ countryData, setCountryData }}>
               <universityContext.Provider
                  value={{ unviersityData, setUniversityData }}
               >
                  <courseContext.Provider value={{ courseData, setCourseData }}>
                     {children}
                  </courseContext.Provider>
               </universityContext.Provider>
            </countryContext.Provider>
         </userContext.Provider>
      </>
   );
}

export default ContextShare;
