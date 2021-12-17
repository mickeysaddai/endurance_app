import { connect } from "react-redux";
import SplashPage from "./splash_page";



const mapStateToProps = (state) => ({
    splashPhoto: "https://images.unsplash.com/photo-1504025468847-0e438279542c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2538&q=80",
    
})


export default connect(mapStateToProps, null)(SplashPage);