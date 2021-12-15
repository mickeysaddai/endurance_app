import React from "react";

class UserStats extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
           
                

            <div>
                <div id="bodyMeasurementsContainer">
   <ul className="clearfix navList">
       <span className="navListLabel Stats"><strong>Stats</strong></span>
      
         <li>
            <span className="navListLabel">Total Activities:</span>
            <span className="navListValue"> {this.props.allActivities}</span>
         </li>
      
      
         <li>
            <span className="navListLabel">Total Distance:</span>
            <span className="navListValue">{this.props.miles}</span>
         </li>
      
      
         <li>
            <span className="navListLabel">Total Calories:</span>
            <span className="navListValue"> {this.props.calories}</span>
         </li>
      
      
         
         
            <li>
                  <span className="navListLabel">Weight:</span>
                  <span className="navListValue"><a href="#bodyMeasurementsLightbox" className="bodyMeasurementsUpdate bodyMeasurementsLink" id="weightUpdateLink" title="Body Measurements">116.6 lbs</a></span>
            </li>
          <div className="divider"></div>       
          </ul>
                </div>
            </div>
                


            </div>
        )
    }
}


export default UserStats;