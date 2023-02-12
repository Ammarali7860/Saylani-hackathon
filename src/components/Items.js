import "./Items.css"
import Menu from "./Menu";
import { useState } from "react";
import MenuCard from "./MenuCard";
// import NavBar from "./NavBar";

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];
console.log(uniqueList); 


function Items() {

   
   const [menuData, setMenuData] = useState(Menu);
   const [menuList,setMenuList] = useState(uniqueList);

   const filterItem = (category) => {
    if (category === "All") {
        setMenuData(Menu)
        return;
    }
        const updateList = Menu.filter((curElem) => {
            return curElem.category === category;
        }
        );

        setMenuData(updateList);

    }
    return (
        <div>
          
            <MenuCard menuData={menuData} />
        </div>
    );

}

export default Items;