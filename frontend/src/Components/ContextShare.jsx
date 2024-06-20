import { createContext, useState } from "react";

export const universityContext = createContext();
export const countryContext = createContext();

function ContextShare({ children }) {
  const [unviersityData, setUniversityData] = useState("");
  const [countryData, setCountryData] = useState("");
  return (
    <>
      <countryContext.Provider value={{ countryData, setCountryData }}>
        <universityContext.Provider
          value={{ unviersityData, setUniversityData }}
        >
          {children}
        </universityContext.Provider>
      </countryContext.Provider>
    </>
  );
}

export default ContextShare;
