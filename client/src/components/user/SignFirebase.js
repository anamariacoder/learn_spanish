import axios from "axios";
import { firebase, fireAuth } from "../../firebase/Firebase";
import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import { connect } from "react-redux";
import { checkToken } from "../../actions/userActions";

const firebaseAppAuth = fireAuth;

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const SignFirebase = ({ user, signOut, signInWithGoogle }) => {
  console.log("user", user && user.photoURL);

  async function callApi() {
    await axios.get("http://localhost:8000/api/auth");
  }

  React.useEffect(() => {
    checkToken();
  }, []);

  //    if (user) {
  //     user
  //       .getIdToken()
  //       .then(idToken => {
  //         console.log("idToken", idToken);
  //         axios.defaults.headers.common["Authorization"] = idToken;
  //       })
  //       .catch(err => console.log(err));
  //   }
  //}, [user]);

  return (
    <div>
      {user ? <p>Salut, {user.displayName}</p> : <p>Login </p>}

      {user ? (
        <>
          <button onClick={signOut}>Déconnexion</button>
          <button onClick={() => callApi(user)}>ping Serveur</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Se login avec Google</button>
      )}
    </div>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(SignFirebase);
