import React from "react";
import { connect } from "react-redux";

import { deleteAccount } from "../../actions/userActions";

const Dashboard = (props) => {
  const { id } = props.userState.user;
  console.log(
    "props dashboardn  PROOOOOOPPPPSSS ",
    props,
    "dashboardn IDDDDDDDDDD",
    props.userState.user.id
  );
  return (
    <>
      <div>Espace client</div>
      <button type="submit" onClick={() => props.deleteAccount(id)}>
        Supprimer mon compte
      </button>
    </>
  );
};

const mapStateToProps = (state, props) => {
  /*status of the aplication*/
  return state;
};
const mapDispatchToProps = (dispatch) => ({
  deleteAccount: (id) => dispatch(deleteAccount(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
