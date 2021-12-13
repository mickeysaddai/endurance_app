import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activity_actions";
import UserForm from "./user_form";
import { logout } from "../../actions/session_actions";


const mapStateToProps = (state) => {
    const allActivities = Object.values(state.entities.activities);
    let totalMiles = 0;
    let totalCalories = 0;


    for (let i = 0; i < allActivities.length; i++){
        let distance = allActivities[i].distance
        totalMiles += distance
        totalCalories += allActivities[i].calories


    }

    return {
    activities: Object.values(state.entities.activities),
    username: state.session.username,
    totalMiles: totalMiles,
    totalCalories: totalCalories,
    allActivities: allActivities.length,
    // userPhoto: "https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png" 
    userPhoto: "https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/126910317_164782895294381_8016587112177111609_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vfjYD2elIpUAX8Ej4Wc&_nc_ht=scontent-iad3-2.xx&oh=f22782f3ab2aa86d9dba6a1ba73c3de2&oe=61B22A34" 


    }
}
const mapDispatchToProps = (dispatch) => ({
     fetchActivities: () => dispatch(fetchActivities()),
})


export default connect(mapStateToProps, mapDispatchToProps)(UserForm);