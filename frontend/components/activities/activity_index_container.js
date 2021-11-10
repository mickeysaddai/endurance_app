import { connect } from "react-redux";
import ActivityIndex from './activity_index';
import { fetchActivities } from "../../actions/activity_actions";

const mapStateToProps = state => {

    return {

        activities: Object.values(state.entities.activities).filter(activity => activity.user_id === state.session.id)
    }
    // TODO: create selector for this

}

const mapDispatchToProps = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities())
})
export default connect(mapStateToProps, mapDispatchToProps)(ActivityIndex)