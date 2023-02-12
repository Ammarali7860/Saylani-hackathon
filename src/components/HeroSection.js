import "./HeroSection.css"
import {ShoppingCartOutlined} from "@ant-design/icons"
import { NavLink } from "react-router-dom";

function HeroSection(){
    return(
     <div>
        <div className="header grid two-column">
        <div className="main-heading">
        <h1>
            Saylani Welfare
        </h1>
        <p className="para">Discount Store</p>
        </div>
          <NavLink exact activeClassName="active" to="/Card">
          <ShoppingCartOutlined />
          </NavLink>
</div>
     </div>
    );
}
export default HeroSection;