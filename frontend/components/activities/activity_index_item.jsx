import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "../navbar";

const ActivityIndexItem = (props) =>  {
  const { activity, userPhoto } = props;
 
// </strong> <small>@johnsmith</small> <small>31m</small>
    return (
    <div className="activityList">

        <div className="box margined"> 
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={userPhoto }alt="Image"></img>
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