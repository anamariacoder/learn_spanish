

import { connect } from "react-redux";
import SignFirebase from "../components/user/SignFirebase";
import { checkToken } from "../actions/userActions"; // Review the name of this

const mapStateToProps = (state, props) => ({
  userProps: state.userState
});

const mapDispatchToProps = dispatch => ({   //Modified 15 juin
  checkToken: () => dispatch(checkToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignFirebase);