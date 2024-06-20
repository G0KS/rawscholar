import { useNavigate } from "react-router-dom";
import university1 from "../assets/universities/university1.svg";

import { useFrappeGetDocList } from "frappe-react-sdk";
import { useContext, useState } from "react";
import { countryContext, universityContext } from "../Components/ContextShare";

function Universities({ show }) {
  show(true);
  const [filters, setFilters] = useState([]);
  const navigate = useNavigate();
  const { unviersityData, setUniversityData } = useContext(universityContext);
  const { countryData, setCountryData } = useContext(countryContext);
 
  // countryData?setFilters(['country','=',countryData.name]):setFilters([])

  const { data, error } = useFrappeGetDocList("University", {
    fields: ["country", "university", "type_of_university", "location"],
    filters: countryData?[['country','=',countryData.name]]:[],
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
                <p className="unviversitytitile">In {university.country}</p>
                <p className="universityfname">{university.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Universities;
