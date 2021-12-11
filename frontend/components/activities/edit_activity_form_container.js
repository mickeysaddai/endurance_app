import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { updateActivity } from "../../actions/activity_actions";


const mapStateToProps = state => ({
   
    formType: 'Edit Activity',
    userId: state.session.id,

})

const mapDispatchToProps = dispatch => ({
    action: (activity) => {
        return dispatch(updateActivity(activity))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm)