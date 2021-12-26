import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchActivities } from "../../actions/activity_actions";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import EditActivityFormContainer from './edit_activity_form_container';

 class LoadActivityContainer extends Component {

componentDidMount() {
    const { areActivitiesLoaded, fetchAllActivities, isFetchingActivities } = this.props;
    if (!areActivitiesLoaded) {
        fetchAllActivities()
    }
}
renderLoadingProgress() {
    return (
        <div>
              <Box sx={{ display: 'flex' }} style={{marginLeft: '50%', marginTop: '40%', marginBottom: '40%'}}>
                 <CircularProgress color="success" />
             </Box>
        </div>
    )
}

    render() {
        const { isFetchingActivities,activity_id, areActivitiesLoaded } = this.props
        console.log("activity_id", activity_id)
        return (
            <div>
                {
                    !areActivitiesLoaded ? (
                        this.renderLoadingProgress()
                    ): (
                        <EditActivityFormContainer activity_id={activity_id}/>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const activity_id = ownProps.match.params.id;
    return {
        activity_id: activity_id,
        isFetchingActivities: state.app.isFetchingActivities,
        areActivitiesLoaded: state.app.areActivitiesLoaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllActivities: () => dispatch(fetchActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadActivityContainer)