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
    userPhoto: "https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png" 


    }
}
const mapDispatchToProps = (dispatch) => ({
     fetchActivities: () => dispatch(fetchActivities()),
})


export default connect(mapStateToProps, mapDispatchToProps)(UserForm);