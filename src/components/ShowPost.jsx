import React, {useState} from 'react'

import Post1 from "../images/post (1).jpg"
import Post2 from "../images/post (2).jpg"
import Post3 from "../images/post (3).jpg"
import Post4 from "../images/post (4).jpg"
import Post5 from "../images/post (5).jpg"
import Groupimg4 from "../images/group (4).jpg"


import {FaRegThumbsUp, FaRegCommentAlt, FaShareAlt} from 'react-icons/fa'

const ShowPost = () => {
  const [state, setState] = useState([{ 
    id: 1, 
    userImg: "../images/group (1).png",
    name : "Hasnain",
    time : "2h",
    text: "HTML CSS & JavaScript",
    postImg : Post1
},
{ 
    id: 2, 
    userImg: "../images/group (1).png",
    name : "Ibrahim",
    time : "5d",
    text: "Backened Development",
    postImg : Post2
},
{ 
    id: 3, 
    userImg: "../images/group (1).png",
    name : "Hasnain",
    time : "3mins",
    text: "Better Your Design",
    postImg : Post3
},
{ 
    id: 4, 
    userImg: "../images/group (1).png",
    name : "Hasnain",
    time : "2h",
    text: "Frontened Development",
    postImg : Post4
},

{ 
  id: 5, 
  userImg: "../images/group (1).png",
  name : "Hasnain",
  time : "2h",
  text: "Frontened Development",
  postImg : Post5
},
{ 
  id: 6, 
  userImg: "../images/group (1).png",
  name : "Hasnain",
  time : "2h",
  text: "Frontened Development",
  postImg : Groupimg4
},
]);
  return (
    <div className="show">
      {state.map(post =>(
        <div key={post.id} className='empty'>
          <div className="show_header">
          <div className="show_header_img">
              <img src={post.userImg} alt="" />
          </div>
          <div className="show_header_name">
              {post.name} <div className="date">{post.time}</div>
          </div>
      </div>
      <div className="show_body">
        <div className="show_body_text">
          {post.text}
        </div>
        <div className="show_body_img">
          <img src={post.postImg} alt="post" />
        </div>
      </div>
      <div className="show_reactions">
        <span className="reactions">
          <FaRegThumbsUp/> <span className="reaction_text">
            Like
          </span>
        </span>

        <span className="reactions">
          <FaRegCommentAlt/> <span className="reaction_text">
            Comment
          </span>
        </span>

        <span className="reactions">
          <FaShareAlt/> <span className="reaction_text">
            Comment
          </span>
        </span>
      </div>
      </div>
      ))}
    </div>
  )
}

export default ShowPost