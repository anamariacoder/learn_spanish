import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  nom: yup
    .string()
    .max(30, "le nom doit comporter 30 caracteres max")
    .required("ce champs est requis")
});

const Compte = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

 // const onSubmit = data => {
 //   console.log(data);
 //   fetch("http://localhost:8080/api/produits", {
 //     method: "post",

 //   })
 // };

  const onSubmit = data => {
    console.log(data);
    fetch("http://localhost:8080/api/leveltest", {
      method: "post",

    })
  };

  return (
    <div>
      <h1>Test de Niveau</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nom : </label> <input ref={register} name="nom" type="text" />
          {errors.nom && errors.nom.message}
          <label>Prix : </label>{" "}
          <input ref={register} name="prix" type="number" />
          <label>Quantité : </label>{" "}
          <input ref={register} name="quantite" type="number" />
          <label>Photo : </label>{" "}
          {/* <input ref={register} name="" type="file"  /> */}
          <label>Description : </label>{" "}
          <textarea ref={register} name="description" />
          <input type="submit" value="ajouter a la liste" />
        </form>
      </div>
    </div>
  );
};

export default LevelTestForm;
