import React, { useState } from "react";
import Groupimg1 from "../images/group (1).png"
import Groupimg2 from "../images/group (2).jpg"
import Groupimg3 from "../images/group (3).jpg"
import Groupimg4 from "../images/group (4).jpg"
import Groupimg5 from "../images/group (5).jpg"
import Groupimg6 from "../images/group (6).jpg"


const Sidebar = () => {
  const [state, setState] = useState([{ 
    id: 1, 
    image: Groupimg1,
    name: "HTML CSS & JavaScript" 
},
{ 
    id: 2, 
    image: Groupimg2,
    name: "Backened Development" 
},
{ 
    id: 3, 
    image: Groupimg3,
    name: "Better Your Design" 
},
{ 
    id: 4, 
    image: Groupimg4,
    name: "Frontened Development" 
},
{ 
    id: 5, 
    image: Groupimg5,
    name: "freelancing in Pakistan " 
},
{ 
    id: 6, 
    image: Groupimg6,
    name: "Logo Design" 
}
]);
  return (
    <div className="siderbar">
        {
            state.map((info)=>(
                <div className="sidebar_list" key={info.id}>
                <div className="sidebar_list_img">
                  <img src={info.image} alt={info.name} />
                </div>
                <div className="sidebar_list_name">{info.name}</div>
              </div>
            ))
        }
     
    </div>
  );
};

export default Sidebar;
