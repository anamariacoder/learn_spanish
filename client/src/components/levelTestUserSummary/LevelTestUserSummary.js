import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { 

  fetchLevelTestUserSummaries,
  handleResponses,
  reponseCorrect,
  reponseUtilisateur,
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
    // props.checkLevelTest();
  };

    return (
    <div>
      <h1>Récapitulatif de votre progression</h1>
      <div className="info-level-test-user-summary">
        {
          //   props.levelTestUserSummary.usersummaries &&
          //   props.levelTestUserSummary.usersummaries.length &&
          // props.levelTestUserSummary.usersummaries[0].note_user.levelTestUserSummaries.map((q,i)) => {
          // return (
          //   <div key={i}>
            // console.log(
            // "JE SUIS DANS COMPONENTS/levelTestUserSummary/ LevelTestUserSummary et JE VAIS VALIDER"
            // );
          //CONSTRUIR LA TABLE DE DONNES QUI VIENENT DE LA BD
          
        }
        </div>

        <button onClick={handleSubmit}>Valider</button>
        {console.log(
          "JE SUIS DANS COMPONENTS/levelTestUserSummary/LevelTestUserSummary et JE VAIS VALIDER"
        )}
      </div>
  
  );
};

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
 // checkLevelTest: (reponses, test) => dispatch(checkLevelTest(reponses, test)),
  fetchLevelTestUserSummaries: () => dispatch(fetchLevelTestUserSummaries()),
  handleResponses: (event) => dispatch(handleResponses(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LevelTestUserSummary);
