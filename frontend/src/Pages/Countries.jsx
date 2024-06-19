import React from "react";

import germany from "../assets/flags/germany.png";
import hungary from "../assets/flags/hungary.png";
import france from "../assets/flags/france.png";
import latvia from "../assets/flags/latvia.png";
import malta from "../assets/flags/malta.png";
import uk from "../assets/flags/uk.png";
import ireland from "../assets/flags/ireland.png";
import lithuania from "../assets/flags/lithuania.png";
import { Link, useNavigate } from "react-router-dom";
import {useFrappeGetDocList} from 'frappe-react-sdk'

function Countries({ show }) {
   show(true);

   const {data,error} = useFrappeGetDocList('Countries')
   console.log(error);

   const navigate = useNavigate()
   const goToCountry = () =>{
      navigate("/universities")
   }

   return (
      <section id="countriesSection" className="container">
         <div className="countriesContainer shapeParent">
            <div className="my-5">
               <div className="shape"></div>
               <h3 className="ms-4">Countries</h3>
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center column-gap-3 my-5">
                  {data?.map((country)=>(
                     <div onClick={goToCountry} style={{ textDecoration: "none" }}>
                           <div>
                           <img
                              src={germany}
                              height={180}
                              alt="Country pic"
                              className="rounded border"
                           />
                           <div className="title text-center">
                              <p>{country.name}</p>
                           </div>
                        </div>
                     </div>
                  ))}
            </div>
         </div>
      </section>
   );
}

export default Countries;
