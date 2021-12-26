import { connect } from "react-redux";
import { updateActivity } from "../../actions/activity_actions";
import { deleteActivity, fetchActivities } from "../../actions/activity_actions";
import EditActivityForm from "./edit_activity_form";


const mapStateToProps = (state, ownProps) => {
    const activity_id = ownProps.activity_id
   return {
    formType: 'Edit Activity',
    user_id: state.session && state.session.id,
    activity: state.entities.activities && state.entities.activities[activity_id]

}

}

const mapDispatchToProps = dispatch => {
  
    return {
    
        fetchAllActivities: () => dispatch(fetchActivities()),
        action: (activity) => {
         
            return (
                dispatch(updateActivity(activity))
            )
        },

        delete: (activity) => dispatch(deleteActivity(activity))
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(EditActivityForm)