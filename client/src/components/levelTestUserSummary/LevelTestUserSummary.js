import React, { useState, useEffect } from "react";
import { Component } from "react";
import { connect } from "react-redux";

import {
  checkLevelTestUserSummary,
  fetchLevelTestUserSummaries,
  handleResponses,
  levelTestUserSummary,
  reponseCorrect,
  reponseUtilisateur
} from "../../actions/level-test-user-summary";

const LevelTestUserSummary = (props) => {
  useEffect(() => {
    props.fetchLevelTestUserSummaries();
  }, []);

  function handleChange(evt) {
    const value = evt.target.value;
    props.handleResponses(evt.target);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.checkLevelTestUserSummary();
  };

  return ( 
    <div>
      <h1>Récapitulatif de votre progression</h1>
      
      <div>
        {/* <div className="info-level-test-user-summary"> */}
        <h2> Table récapitulatif de votre progression </h2>
        <div className="info-level-test-user_summary">
          {/* {props.levelTestUserSummary.testUserSummary &&
          props.levelTestUserSummary.testUserSummary.length &&
          props.levelTestUserSummary.testUserSummary[0].note_user.levelTestUserSummaryByUser.map( */}
          {props.levelTestUserSummary.testUserSummary ||
            props.levelTestUserSummary.map((valor, ind) => {
              return (
                <div> 
                  {console.log("valor es  : ", valor)};
                  <p>
                    {valor.idUser.map((c, ind) => {
                      console.log("je suis là");
                    })}
                  </p>
                  {/* return ({valor.idUser}); */}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  checkLevelTestUserSummary: (reponses, test) =>
    dispatch(checkLevelTestUserSummary(reponses, test)),
  fetchLevelTestUserSummaries: () => dispatch(fetchLevelTestUserSummaries()),
  handleResponses: (event) => dispatch(handleResponses(event)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelTestUserSummary);

// return (
//   <div>
//     <h1>Récapitulatif de votre progression</h1>
//     <div>
//       {/* <div className="info-level-test-user-summary"> */}
//       <h2> Table récapitulatif de votre progression </h2>
//       <div className="info-level-test-user_summary">
//         {/* {props.levelTestUserSummary.testUserSummary &&
//           props.levelTestUserSummary.testUserSummary.length &&
//           props.levelTestUserSummary.testUserSummary[0].note_user.levelTestUserSummaryByUser.map( */}
//         {props.levelTestUserSummary.testUserSummary &&
//           props.levelTestUserSummary.map((valor, ind) => {
//             return (
//               <div key={ind}>
//                 {console.log("valor es  : ", valor)};
//                 <p>
//                   {valor.idUser.map((c, ind) => {
//                     console.log("je suis là");
//                   })}{" "}
//                 </p>
//                 ; return ({valor.idUser});
//               </div>
//             );
//           })}
//         {/* .map((dataSummary, index) =>{" "} */}
//         {
//           // return (
//           //   <div>
//           //     <p>{dataSummary.noteUser} </p>
//           //   </div>
//           // );
//         }
//         {/* )} */}
//       </div>
//     </div>
//     {/* ) */}
//   </div>
// );
// };
