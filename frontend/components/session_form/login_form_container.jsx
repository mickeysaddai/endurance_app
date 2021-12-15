import { connect } from "react-redux";
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'login',
      demoUser: {
        user: 'mickey',
        password: 'password123'
    },

})
const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);