import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activity_actions";
import UserForm from "./user_form";


const mapStateToProps = (state) => ({
    activities: Object.values(state.entities.activities)

})
const mapDispatchToProps = (dispatch) => ({
     fetchActivities: () => dispatch(fetchActivities())
})


export default connect(mapStateToProps, mapDispatchToProps)(UserForm);