import React from "react";

class ActivityIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commenting: false
        }
    }

    changeToCommenting = (event) => {
        console.log(event.target.innerText)
        this.setState({commenting: true})

    }
 render(){
 const { activity, userPhoto } = this.props;
 const {commenting} = this.state;
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
                                    <button onClick={this.changeToCommenting} className="commentButton">Comment</button>  
                                   {commenting &&  <div>
                                        <textarea className="commentBox" 
                                        //    id="comment"
                                           cols="30" rows="20">
                                            
                                        </textarea>
                                    </div>
                                    }
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

}


export default ActivityIndexItem;