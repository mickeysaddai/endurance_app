import React from "react";
import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { createActivity } from "../../actions/activity_actions";


const mapStateToProps = state => ({
   
    formType: 'Log Activity',
    userId: state.session.id,

})

const mapDispatchToProps = dispatch => ({
    action: (activity) => {
        return dispatch(createActivity(activity))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm)