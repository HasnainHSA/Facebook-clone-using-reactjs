import React from 'react'
import {FaVideo, FaRegFileImage, FaRegGrinAlt} from 'react-icons/fa'
import Profile3 from "../images/profile (6).png"
const Create = () => {
  return (
    <div className="create">
        <div className="create_first">
            <div className="create_first_img">
                <span>
                    <img src={Profile3} alt="" /></span>
            </div>
            <div className="create_first_input">
                <input type="text" className='create_first_inputs' placeholder="Hasnain what's your mind?" />
            </div>
        </div>

        <div className="create_second">
            <span className="create_second_icon">
            <FaVideo className="redcolor" /> <span className="text">Live Video</span>
            </span>

            <span className="create_second_icon">
            <FaRegFileImage className='greencolor' /> <span className="text">Live Video</span>
            </span>

            <span className="create_second_icon">
            <FaRegGrinAlt className='orangecolor' /> <span className="text">Live Video</span>
            </span>
        </div>
    </div>
  )
}

export default Create