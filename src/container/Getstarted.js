import { NavLink } from "react-router-dom";

function Getstarted(){
    return (
      <div>
        <h1 className="startHeading">
          Saylani Welfare
        </h1>
        <h3 className="startHeading2">
          Online Discount Store
        </h3>
        <div className="btn">
            <NavLink to="/login">
              <button>Get Started</button>
            </NavLink>
          </div>
          </div>
    );
  }
  export default Getstarted;
  