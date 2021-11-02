import { connect } from "react-redux";
import ActivityIndex from './activity_index';
import { fetchActivities } from "../../util/activity_util";

const mapStateToProps = state => ({
    activities: Object.values(state.activities)

})

const mapDispatchToProps = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities())
})
export default connect(mapStateToProps, mapDispatchToProps)(ActivityIndex)