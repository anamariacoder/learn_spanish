import React, { useState, useEffect } from "react";

import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//29 avril
import LevelTestUserSummary from "../../components/levelTestUserSummary/LevelTestUserSummary";

const Progress1 = (props) => {
  function handleChangeProgress(evt) {
    const value = evt.target.value;
    props.handleResponses(evt.target);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  return (
    <body className="container-progress-global">
      <div className="info-progress-global">
        <h1>Progrès</h1>
        <p>
        Dans cette section, vous obtiendrez un rapport détaillé de vos progrès dans l'apprentissage de l'espagnol,<br /> en utilisant notre application. <br /><br />
        <a><Link to="/LevelTestUserSummary">Je veux regarder le récapitulatif de ma progression</Link></a>.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
      </div>
        
    </body>
  );
};

export default Progress1;


// antes de 29 avril funciona bien
// const Progress1 = () => {
//   useEffect(() => {}, []);
 
//   const handleSubmit = event => {
//     event.preventDefault();
//   };
  
  // // const UrlLevelTestUserSummaries = `${apiBaseUrl}/api/`; 
  // // const fetchAllLevelTestUserSummaries = () => 
  // // async => { const res = await axios.get(UrlLevelTestUserSummaries); 

  // //   console.log(res); 
  // // };

//   return (
//     <body className="container-progress-global">
//       <div className="info-progress-global">
//         {/* <script
//           src="https://kit.fontawesome.com/8340b5561f.js"
//           crossOrigin="anonymous"
//         ></script> */}

//         <h1>Progrès</h1>
//         <p>
//         Dans cette section, vous obtiendrez un rapport détaillé de vos progrès dans l'apprentissage de l'espagnol, en utilisant notre application. <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         </p>
//       </div>
//             {/* <div className="photo-progress"></div> */}
//     </body>
//   );
// };

// export default Progress1;
