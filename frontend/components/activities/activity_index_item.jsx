import React from "react";
import Button from '@mui/material/Button';

class ActivityIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commenting: false,
            comment: ''
        }
    }

    changeToCommenting = (event) => {
        this.setState({commenting: true})

    }

    handleCommentChange = (e) => {
        const newComment = e.target.value
        this.setState({comment: newComment})    
    }

    submitComment = () => {
        const commentPayload = {
            body: this.state.comment,
            activityId: this.props.activity.id,
            userId: this.props.userId

        }
        console.log(
            commentPayload
        )
        this.props.createComment(commentPayload);
        this.setState({comment: ''})

           
    }



 render(){
 const { activity, userPhoto, createComment} = this.props;
 const { comments } = activity;
 const {commenting, comment} = this.state;
 console.log(comments)
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
                            {comments.length}
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
                                   {commenting &&  <div className="commentBoxDiv">
                                        <textarea className="commentBox"
                                        onChange={this.handleCommentChange}
                                        value={comment}
                                        >


                                        </textarea>
                                      
                                             <Button onClick={this.submitComment} className="postComment"variant="contained">Post Comment</Button>
                                           
                                  
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
            {
                 comments.map((commentObj, index) => {
                     return (
                     <div className='rendering' key={index}> 
                     <p> {commentObj.body}</p>
                    </div>
                     )
                    
                } )
            }                    
           
        </div>



    </div>
    )
 }

}


export default ActivityIndexItem;