import { useNavigate } from "react-router-dom";
import university1 from "../../assets/universities/university1.svg";

import { useFrappeGetDocList } from "frappe-react-sdk";
import { useContext, useEffect, useState } from "react";
import {
   countryContext,
   universityContext,
} from "../../Components/ContextShare";

function Universities({ setShow }) {
   useEffect(() => {
      setShow(true);
   });
   
   const navigate = useNavigate();
   const [pageIndex, setPageIndex] = useState(0);
   const { setUniversityData } = useContext(universityContext);
   const { countryData } = useContext(countryContext);

   const { data, error } = useFrappeGetDocList("University", {
      fields: ["country", "university", "type_of_university", "location"],
      filters: countryData ? [["country", "=", countryData.name]] : [],
      limit_start: pageIndex,
      limit: 12,
   });
   console.log(error);

   const gotoUniversity = (university) => {
      setUniversityData(university);
      navigate("/university");
   };

   return (
      <section id="universitiesSection" className="container">
         <div className="universitiesContainer shapeParent my-5">
            <div className="my-5">
               <div className="shape"></div>
               <h3 className="ms-4">Universities</h3>
            </div>
            <div className="universityList d-flex justify-content-center align-items-center gap-5 flex-wrap">
               {data?.map((university, i) => (
                  <div
                     to="/university"
                     style={{ textDecoration: "none", color: "black" }}
                     key={i}
                     onClick={() => gotoUniversity(university)}
                  >
                     <div
                        className=" universitycard shadow p-3 rounded"
                        style={{ width: "18rem" }}
                     >
                        <img
                           src={university1}
                           alt="university1"
                           style={{ width: "100%" }}
                           className="rounded mb-3"
                        />
                        <p className="unviversitytitile">
                           In {university.country}
                        </p>
                        <p className="universityfname">
                           {university.university}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
            <div className="mt-5 d-flex justify-content-end">
               {pageIndex > 0 ? (
                  <button
                     onClick={() => setPageIndex(pageIndex - 12)}
                     className="btn btn-primary rounded-pill me-2"
                     style={{ width: "100px" }}
                  >
                     Previous
                  </button>
               ) : (
                  ""
               )}
               <button
                  onClick={() => setPageIndex(pageIndex + 12)}
                  className="btn btn-success rounded-pill"
                  style={{ width: "100px" }}
               >
                  Next
               </button>
            </div>
         </div>
      </section>
   );
}

export default Universities;
