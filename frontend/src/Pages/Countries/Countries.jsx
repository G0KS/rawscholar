
import germany from "../assets/flags/germany.png";
import {  useNavigate } from "react-router-dom";
import {useFrappeGetDocList} from 'frappe-react-sdk'
import { useContext } from "react";
import { countryContext } from "../../Components/ContextShare";

function Countries({ show }) {
   show(true);

   const {data,error} = useFrappeGetDocList('Countries')
   console.log(error);
   const { setCountryData } = useContext(countryContext)
   const navigate = useNavigate()
   const goToCountry = (country) =>{
      setCountryData(country)
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
                  {data?.map((country,i)=>(
                     <div onClick={()=>goToCountry(country)} style={{ textDecoration: "none" }} key={i}>
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
