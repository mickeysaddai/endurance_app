import { connect } from "react-redux";
import { deleteActivity } from "../../actions/activity_actions";
import { deleteActivity } from "../../util/activity_api_util";
import ActivityShowPage from "./activity_show_page";


const mapStateToProps = (state, ownProps) => {
    
    console.log(ownProps, ownProps.match.params.id)
    const activity_id = ownProps.match.params.id;
    console.log(activity_id, state.entities.activities ,state.entities.activities[activity_id])
   return {
    formType: 'Edit Activity',
    user_id: state.session.id,
    activity: state.entities.activities[activity_id]

}

}

const mapDispatchToProps = dispatch => {
    debugger
    return {
    

        action: (activity) => {
            debugger
            return (
                dispatch(deleteActivity(activity))
            )
        }
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(ActivityShowPage)