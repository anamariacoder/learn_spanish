import React, { useState, useEffect } from "react";

const Home = () => {
  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <body className="container-home">
      <div className="info-home">
        <h> J'apprends l'espagnol</h>{" "}
      </div>
      <div className="info-home-paragraph">
        <p>
          &nbsp;Apprenez&nbsp; l'espagnol&nbsp;facilement &nbsp;et&nbsp;validez
          &nbsp;votre&nbsp;progression !!
        </p>
        {/* <p>
          &nbsp;Apprenez&nbsp;&nbsp;&nbsp;
          l'espagnol&nbsp;&nbsp;&nbsp;&nbsp;facilement <br />
          &nbsp;&nbsp;et&nbsp;&nbsp;&nbsp;&nbsp;validez
          &nbsp;&nbsp;&nbsp;votre&nbsp;&nbsp;&nbsp; progression !!
        </p> */}
      </div>
    </body>
  );
};

export default Home;

// import React, { useState, useEffect } from "react";

// const Home = () => {
//   useEffect(() => {}, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <body className="container-home">
//       <div className="info-home">
//         <h> J'apprends l'espagnol</h>
//          <p>

{
  /* <p>
          &nbsp;Apprenez&nbsp;&nbsp;&nbsp;
          l'espagnol&nbsp;&nbsp;&nbsp;&nbsp;facilement <br />
          &nbsp;&nbsp;et&nbsp;&nbsp;&nbsp;&nbsp;validez
          &nbsp;&nbsp;&nbsp;votre&nbsp;&nbsp;&nbsp; progression !!
        </p> */
}
{
  /* </div>
    </body>
  );
};

export default Home; */
}
