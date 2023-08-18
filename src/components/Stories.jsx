import React, { useState } from 'react'

import Profile1 from "../images/profile (1).jpg"
import Profile2 from "../images/profile (2).jpg"
import Profile3 from "../images/profile (3).jpg"
import Profile4 from "../images/profile (4).jpg"
import Groupimg4 from "../images/group (4).jpg"
import Groupimg5 from "../images/group (5).jpg"
import Groupimg6 from "../images/group (6).jpg"


const Stories = () => {
    const [state, setState] = useState([{ 
        id: 1, 
        image: Profile1,
        name: "HTML CSS & JavaScript",
        userImag: Profile1
    },
    { 
        id: 2, 
        image: Profile2,
        name: "Backened Development" ,
        userImag: Profile2
    },
    { 
        id: 3, 
        image: Profile3,
        name: "Better Your Design" ,
        userImag: Profile3
    },
    { 
        id: 4, 
        image: Profile4,
        name: "Frontened Development" ,
        userImag: Profile4
    },
    ]);
  return (
    <div className='stories'>
        {state.map(story => (
            <div className="stories_col" key={story.id}>
            <div className="stories_body">
                <img src={story.image} alt="" />
                <div className="stories_body_overlay">
                    <div className="stories_body_overlay_img">
                        <img src={story.userImag} alt="" />
                    </div>
                    <div className="stories_body_name">
                    {story.name}
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Stories