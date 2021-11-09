import React from "react";
import { Link } from "react-router-dom";

const ActivityIndexItem = (props) =>  {
  const { activity } = props;
 
// </strong> <small>@johnsmith</small> <small>31m</small>
    return (
    <div>

        <div className="box margined"> 
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/126910317_164782895294381_8016587112177111609_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=orVrDyKzgYwAX9BR9L4&_nc_ht=scontent-iad3-2.xx&oh=8ec5feaf2258eb5423e17708693e992e&oe=61A64CB4" alt="Image"></img>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{activity.user}</strong> completed a {activity.distance} mi. {activity.activity_type} activity
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item" aria-label="like">
                                <button className="likeButton">Like</button>
                            </a>
                            <a className="level-item" aria-label="reply">
                                    <button className="commentButton">Comment</button>  
                            </a>
            
                        </div>
                    </nav>
                </div>
                            <a className="level-item rightAngle" aria-label="reply">
                                <i className="fas fa-angle-right"></i>
                            </a>
            </article>
        </div>

    </div>

    )
}


export default ActivityIndexItem;