import { connect } from "react-redux";
import ActivityIndex from './activity_index';
import { fetchActivities } from "../../actions/activity_actions";

const mapStateToProps = state => {

    return {

        activities: Object.values(state.entities.activities).filter(activity => activity.user_id === state.session.id),
        // userPhoto: Object.values(state.entities.users)[0].photoUrl
        userPhoto: "https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png"
    }
    // TODO: create selector for this

}

const mapDispatchToProps = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities())
})
export default connect(mapStateToProps, mapDispatchToProps)(ActivityIndex)