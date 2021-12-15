import { connect } from "react-redux";
import UserActivityIndex from "./user_activity_index";
import { fetchActivities, createAComment } from "../../actions/activity_actions";


const mapStateToProps = state => {

    return {

        activities: Object.values(state.entities.activities).filter(activity => activity.user_id === state.session.id),
        // userPhoto: Object.values(state.entities.users)[0].photoUrl
        userPhoto: "https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png",
        loggedIn: !!state.session.id,
        userId: state.session.id
    }
}

const mapDispatchToProps = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities()),
    createComment: (comment) => dispatch(createAComment(comment))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserActivityIndex)