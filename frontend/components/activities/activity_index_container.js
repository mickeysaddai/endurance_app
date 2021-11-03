import { connect } from "react-redux";
import ActivityIndex from './activity_index';
import { fetchActivities } from "../../actions/activity_actions";

const mapStateToProps = state => ({
    // TODO: create selector for this
    activities: Object.values(state.entities.activities)

})

const mapDispatchToProps = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities())
})
export default connect(mapStateToProps, mapDispatchToProps)(ActivityIndex)