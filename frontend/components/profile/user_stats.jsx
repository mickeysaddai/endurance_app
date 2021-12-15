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
   <ul class="clearfix navList">
       <span class="navListLabel"><strong>Stats</strong></span>
      
         <li>
            <span class="navListLabel">Total Activities:</span>
            <span class="navListValue"> {this.props.allActivities}</span>
         </li>
      
      
         <li>
            <span class="navListLabel">Total Distance:</span>
            <span class="navListValue">{this.props.miles}</span>
         </li>
      
      
         <li>
            <span class="navListLabel">Total Calories:</span>
            <span class="navListValue"> {this.props.calories}</span>
         </li>
      
      
         
         
            <li>
                  <span class="navListLabel">Weight:</span>
                  <span class="navListValue"><a href="#bodyMeasurementsLightbox" class="bodyMeasurementsUpdate bodyMeasurementsLink" id="weightUpdateLink" title="Body Measurements">116.6 lbs</a></span>
            </li>
          <div class="divider"></div>       
          </ul>
</div>
            </div>
                


            </div>
        )
    }
}


export default UserStats;