import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

function addEmplyee(props) {
  const { register, control, handleSubmit, errors } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "controlItems",
  });
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    //console.log("success", success);
    console.table(data);
    setSuccess(true);
    //data.preventDefault();
    //console.log("success", success);
  };
  return <div></div>;
}

export default addEmplyee;
