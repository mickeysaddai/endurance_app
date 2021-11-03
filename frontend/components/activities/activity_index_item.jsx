import React from "react";
import { Link } from "react-router-dom";

const ActivityIndexItem = (props) =>  {
  const { activity } = props;
 
// </strong> <small>@johnsmith</small> <small>31m</small>
    return (

        <div className="box"> 
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
                                <span className="icon is-small">
                                    <i className="far fa-heart" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a className="level-item" aria-label="reply">
                                <span className="icon is-small">
                                    <i class="fa-solid fa-comment" aria-hidden="true"></i>
                                </span>
                            </a>
                
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    )
}


export default ActivityIndexItem;