import { Link } from "react-router-dom";
import edit from "../../assets/Edit.svg";
import ellipse from "../../assets/profile image/Ellipse.svg";
import frame from "../../assets/profile image/Frame.svg";

function Profile() {
  return (
    <div className="container">
      <div className="p-2">
        <h2 style={{ color: "#067BC2" }}>Hello Suresh Raina 👋</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim
          voluptatum a quos fuga aperiam id reiciendis deserunt beatae, dolores,
          quis sint cum eum exercitationem harum laboriosam doloremque tempore
          hic.
        </p>
        <div className="titleBar d-flex shapeParent mt-5 ">
          <div className="shape"></div>
          <h2 className="fs-4 ms-4">Personal Details</h2>
          <Link
            className="ms-auto py-2  px-3 shadow  "
            style={{
              backgroundColor: "#067BC2",
              borderRadius: "20px",
              textDecoration: "none",
            }}
          >
            <span className="p-2" style={{ color: "white" }}>
              Edit
            </span>
            <img src={edit} alt="" />
          </Link>
        </div>
      </div>
      <form action="">
      <div className="row p-3 ">
        <div className="col-2">
          <div
            style={{
              position: "relative",
              width: "140px",
              height: "140px",
            }}
            className="rounded-circle"
          >
            <img
              src={ellipse}
              className="rounded-circle"
              alt="rounded image"
              style={{ width: "100%", height: "100%" }}
            />
            <div style={{ position: "absolute", bottom: "0", right: "0" }}>
              <img src={frame} className="" alt="rounded image" />
            </div>
          </div>
        </div>
        <div className="col-5">
          {/* input section */}
          
            <div className="row">
              <div className="col-2 d-flex justify-content-between flex-column  ">
                <label className=" d-flex align-items-center" style={{ color: "#067BC2",height:"43px"}}>Name</label>
                <label  className=" d-flex align-items-center" style={{ color: "#067BC2",height:"43px" }}>Mail ID</label>
                <label className=" d-flex align-items-center" style={{ color: "#067BC2",height:"43px" }}>PhoneNo</label>
                <label className=" d-flex align-items-center" style={{ color: "#067BC2",height:"43px" }}>gender</label>
              </div>
              <div className="col d-flex justify-content-between flex-column gap-3">
                <input
                  className="inputBox shadow "
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  style={{ fontSize: "15px",border:"none" }}
                />
                <input
                  className="inputBox shadow "
                  type="text"
                  name="mail"
                  placeholder="Enter Mail ID"
                  style={{ fontSize: "15px",border:"none" }}
                />
                <input
                  className="inputBox shadow "
                  type="number"
                  name="phonenumber"
                  placeholder="Enter Name"
                  style={{ fontSize: "15px",border:"none" }}
                />
                <select
                  className=" inputBox shadow "
                  aria-label="Default select example"
                  style={{ fontSize: "15px",border:"none",backgroundColor:"white",color:"gray" }}
                  
                >
                  <option selected>Select Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </select>
              </div>
            </div>
          
        </div>
        {/* next section  */}
        <div className="col-5">
        <div className="row">
              <div className="col-2 d-flex justify-content-between flex-column  ">
                <label className=" d-flex align-items-center" style={{ color: "#067BC2",height:"43px"}}>DOB</label>
                <label  className=" d-flex align-items-center" style={{ color: "#067BC2",height:"43px" }}>Passport  No</label>
                <label className=" d-flex align-items-center" style={{ color: "#067BC2",height:"43px" }}>Address</label>
              </div>
              <div className="col d-flex justify-content-between flex-column gap-3">
                <input
                  className="inputBox shadow "
                  type="date"
                  name="dob"
                  placeholder="Select DOB"
                  style={{ fontSize: "15px",border:"none" }}
                />
                <input
                  className="inputBox shadow "
                  type="text"
                  name="PassportNo"
                  placeholder="Enter Passport  No"
                  style={{ fontSize: "15px",border:"none" }}
                />
                <textarea
                 className="inputBox shadow "
                 type="textbox"
                 name="address"
                 placeholder="Enter Address"
                 style={{ fontSize: "15px",border:"none" }}
                > 
                </textarea>
              </div>
            </div>
        </div>
        
      </div>
      </form>
    </div>
  );
}

export default Profile;
