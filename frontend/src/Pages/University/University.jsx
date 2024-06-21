import { useContext } from "react";

import university1 from "../../assets/universities/university1.svg";
import { useFrappeGetDocList } from "frappe-react-sdk";
import {
  courseContext,
  universityContext,
} from "../../Components/ContextShare";
import { useNavigate } from "react-router-dom";

function University({ show }) {
  show(true);

  const navigate = useNavigate();
  const { unviersityData } = useContext(universityContext);
  const { setCourseData } = useContext(courseContext);

  const { data, error } = useFrappeGetDocList("Courses", {
    fields: [
      "course",
      "university",
      "duration",
      "mode",
      "fee",
      "level",
      "exam_accepted",
    ],
    filters: [["university", "=", unviersityData.university]],
  });
  console.log(error);

  const gotoCourse = (course) => {
    setCourseData(course);
    navigate("/university/course");
  };

  return (
    <section id="universitySection" className="container">
      <div className="universityContainer my-5">
        <div className="d-lg-flex justify-content-between align-items-center rounded shadow p-5 my-5">
          <div className="universityContent">
            <h4 style={{ color: "#067BC2" }}>In {unviersityData.country}</h4>
            <h3>{unviersityData.university}</h3>
            <p style={{ color: "gray" }}>
              {unviersityData.location} | {unviersityData.type_of_university}
            </p>
          </div>
          <img src={university1} alt="university" height={100} />
        </div>
        <div className="courseTags d-flex flex-wrap gap-3">
          <div className="tags rounded-pill shadow-sm px-3 pt-3">
            <p>All Courses</p>
          </div>
          <div className="tags rounded-pill shadow-sm px-3 pt-3">
            <p>Masters Courses</p>
          </div>
          <div className="tags rounded-pill shadow-sm px-3 pt-3">
            <p>Bachelors Courses</p>
          </div>
          <div className="tags rounded-pill shadow-sm px-3 pt-3">
            <p>PhD Courses</p>
          </div>
          <div className="tags rounded-pill shadow-sm px-3 pt-3">
            <p>Engineering Courses</p>
          </div>
          <div className="tags rounded-pill shadow-sm px-3 pt-3">
            <p>Business Courses</p>
          </div>
          <div className="tags rounded-pill shadow-sm px-3 pt-3">
            <p>Science Courses</p>
          </div>
          <div className="tags rounded-pill shadow-sm px-3 pt-3">
            <p>Humanities Courses</p>
          </div>
          <div className="tags rounded-pill shadow-sm px-3 pt-3">
            <p>Btech</p>
          </div>
        </div>
        <div className="courseContainer d-flex justify-content-between gap-5 flex-wrap py-5 px-2">
          {data?.map((course, i) => (
            <div
              className="courseCard rounded shadow p-5 col-lg-5"
              key={i}
              onClick={()=>gotoCourse(course)}
            >
              <div className="courseTitle mb-4 fw-bold">
                <h5 className="fw-bold">{course.course}</h5>
              </div>
              <div className="courseContent row">
                <div className="col-3">
                  <span style={{ color: "#067BC2" }}>Duration</span>
                  <p style={{ color: "gray" }}>{course.duration}</p>
                </div>
                <div className="col-6">
                  <span style={{ color: "#067BC2" }}>
                    1st Year Tuition Fees
                  </span>
                  <p style={{ color: "gray" }}>{course.fee}</p>
                </div>
                <div className="col-3">
                  <span style={{ color: "#067BC2" }}>Level</span>
                  <p style={{ color: "gray" }}>{course.mode}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default University;
