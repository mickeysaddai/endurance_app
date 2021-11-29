import { connect } from "react-redux";
import ActivityIndex from './activity_index';
import { fetchActivities, createAComment } from "../../actions/activity_actions";


const mapStateToProps = state => {

    return {

        activities: Object.values(state.entities.activities).filter(activity => activity.user_id === state.session.id),
        // userPhoto: Object.values(state.entities.users)[0].photoUrl
        // userPhoto: "https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png",
        userPhoto: "https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/126910317_164782895294381_8016587112177111609_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vfjYD2elIpUAX8Ej4Wc&_nc_ht=scontent-iad3-2.xx&oh=f22782f3ab2aa86d9dba6a1ba73c3de2&oe=61B22A34",
        loggedIn: !!state.session.id,
        userId: state.session.id
    }
}

const mapDispatchToProps = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities()),
    createComment: (comment) => dispatch(createAComment(comment))
})
export default connect(mapStateToProps, mapDispatchToProps)(ActivityIndex)