import React from "react";

import university1 from "../assets/universities/university1.svg";
import university2 from "../assets/universities/university2.svg";
import university3 from "../assets/universities/university3.svg";
import university4 from "../assets/universities/university4.svg";
import university5 from "../assets/universities/university5.svg";
import university6 from "../assets/universities/university6.svg";
import university7 from "../assets/universities/university7.svg";
import university8 from "../assets/universities/university8.svg";
import { Link } from "react-router-dom";
import { useFrappeGetDocList } from "frappe-react-sdk";

function Universities({show}) {
   show(true)
   
   const {data,error} = useFrappeGetDocList("University",{fields: ['country','university']})
   console.log(data,error);

   return (
      <section id="universitiesSection" className="container">
         <div className="universitiesContainer shapeParent my-5">
            <div className="my-5">
               <div className="shape"></div>
               <h3 className="ms-4">Universities</h3>
            </div>
            <div className="universityList d-flex justify-content-center align-items-center gap-5 flex-wrap">
               {data?.map((university)=>(
                  <div
                  to="/university"
                  style={{ textDecoration: "none", color: "black" }}
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
                     <p className="unviversitytitile">In {university.country}</p>
                     <p className="universityfname">
                        {university.university}
                     </p>
                  </div>
               </div>
               
               ))}
            </div>
         </div>
      </section>
   );
}

export default Universities;
