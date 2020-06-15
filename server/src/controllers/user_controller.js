const uuid = require("uuid"); /*old*/
const { User } = require("../models");   /*old*/
 
exports.loginForm = (req, res) => {   /*new*/
  res.render('logiiiiiiiiiiiiiiin', {title: 'Logiiiin' });   /*new*/
}                                         /*new*/

// const usersController = {    (2.1) 09 juin before new authentication */

//   register: async (data) => {
//     console.log(data);
//     if (data.password === data.password_confirm) {
//       const newUser = { id: uuid(), ...data };
//       const createdUser = await User.create(newUser);
//       return createdUser;
//     } else {
//       console.log("mauvais mdp");

//     }
//   }
// };

//module.exports = usersController;

/********************** (2) 09 juin before new authentication */

// const uuid = require("uuid");
// const { User } = require("../models");

// const usersController = {

//   register: async (data) => {
//     console.log(data);
//     if (data.password === data.password_confirm) {
//       const newUser = { id: uuid(), ...data };
//       const createdUser = await User.create(newUser);
//       return createdUser;
//     } else {
//       console.log("mauvais mdp");
//       // res.status(200).json({ error: "wrong password" });
//     }
//   }
// };

// module.exports = usersController;