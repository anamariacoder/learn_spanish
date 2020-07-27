//MODIFY 23 juillet

// import axios from "axios";
// import { firebase, fireAuth } from "../../firebase/Firebase";
// import React, { useEffect } from "react";
// import withFirebaseAuth from "react-with-firebase-auth";

// //**3 * 17 juin
// // import { connect } from "react-redux";
// // import { checkToken } from "../../actions/userActions";

// const firebaseAppAuth = fireAuth;

// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider()
// };

// const SignFirebase = props => {
//   console.log("props", props);
//   const { user, signInWithGoogle, signOut } = props;

//   async function callApi() {
//     await axios.get("http://localhost:8000/api/auth");
//   }

//   useEffect(() => {
//     if (user) {
//       user
//         .getIdToken()
//         .then(idToken => {
//           console.log("idToken", idToken);
//           axios.defaults.headers.common["Authorization"] = idToken;
//         })
//         .catch(err => console.log(err));
//     }
//     console.log("fire checktoken signin");
//     props.checkToken();
//   }, [user]);

//   return (
//     <div>
//       {user ? <p>Salut, {user.displayName}</p> : <p>Login </p>}

//       {user ? (
//         <>
//           <button onClick={signOut}>Déconnexion</button>
//           <button onClick={() => callApi(user)}>ping Serveur</button>
//         </>
//       ) : (
//         <button onClick={signInWithGoogle}>Se login avec Google</button>
//       )}
//     </div>
//   );
// };

// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth
// })(SignFirebase);
