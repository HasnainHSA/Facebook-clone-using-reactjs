import React,{useState} from 'react'

import Profile1 from "../images/profile (1).jpg"
import Profile2 from "../images/profile (2).jpg"
import Profile3 from "../images/profile (3).jpg"
import Profile4 from "../images/profile (4).jpg"
import Profile5 from "../images/profile (6).png"
import Groupimg1 from "../images/group (1).png"
import Groupimg2 from "../images/group (2).jpg"


const Chatbar = () => {
    const [state, setState] = useState([{ 
        id: 1, 
        image: Profile5,
        name: "HTML CSS & JavaScript" 
    },
    { 
        id: 2, 
        image: Profile1,
        name: "Backened Development" 
    },
    { 
        id: 3, 
        image: Profile2,
        name: "Better Your Design" 
    },
    { 
        id: 4, 
        image: Profile4,
        name: "Frontened Development" 
    },
    { 
        id: 5, 
        image: Profile2,
        name: "Frontened Development" 
    },
    { 
        id: 6, 
        image: Profile5,
        name: "Frontened Development" 
    },
    { 
        id: 7, 
        image: Profile2,
        name: "Frontened Development" 
    },
    { 
        id: 8, 
        image: Profile3,
        name: "Frontened Development" 
    },
    { 
        id: 9, 
        image: Profile4,
        name: "Frontened Development" 
    },
    { 
        id: 10, 
        image: Profile1,
        name: "Frontened Development" 
    },

    { 
        id: 11, 
        image: Profile2,
        name: "Frontened Development" 
    },
    { 
        id: 12, 
        image: Profile3,
        name: "Frontened Development" 
    },
    { 
        id: 13, 
        image: Profile5,
        name: "Frontened Development" 
    },
    { 
        id: 14, 
        image: Profile4,
        name: "Frontened Development" 
    },
    ]);
  return (
    <div className='chatBar'>
        {state.map(user=>(
            <div className='chatbar_list' key={user.id}>
            <div className="chatbar_list_img">
                <img src={user.image} alt="" />
                <span className='status'></span>
            </div>
            <div className="chatbar_list_name">
                {user.name}
            </div>
        </div>
        ))}
    </div>
  )
}

export default Chatbar