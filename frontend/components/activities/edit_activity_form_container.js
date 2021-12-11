import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { updateActivity } from "../../actions/activity_actions";
import EditActivityForm from "./edit_activity_form";


const mapStateToProps = state => ({
   
    formType: 'Edit Activity',
    user_id: state.session.id,
    activity: Object.values(state.entities.activities)[0]

})

const mapDispatchToProps = dispatch => ({
    action: (activity) => {
        return dispatch(updateActivity(activity))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(EditActivityForm)