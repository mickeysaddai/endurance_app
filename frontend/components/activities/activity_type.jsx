import React from "react";

class ActivityType extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activityType: 'Running',
            activityIconType: "fa-solid fa-person-running",
            className: "runner",
        }

    }

    componentDidMount(){
        const {activityType, activityIconType, className} = this.props;

        if (activityType && activityIconType){
            this.setState({activityType, activityIconType, className})
    
        }
   
    }

    onActivityTypeClick = () => {
        console.log(this.state.activityType)
        this.props.onActivityTypeChange(this.state.activityType)

    }
    render(){
        const { selected } = this.props;
        const highlightBox = selected ? "selectedBox" : ""
        return (
            <div className={`box ${this.state.className} ${highlightBox}`} onClick={this.onActivityTypeClick}>
            <i className={`${this.state.activityIconType} `}></i>
            <h2>{this.state.activityType}</h2>

            </div>
        )
    }
    
}

export default ActivityType;