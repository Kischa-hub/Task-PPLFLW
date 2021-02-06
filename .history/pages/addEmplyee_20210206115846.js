import React, { useState } from "react";
import Link from "next/link";
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
  return (
    <form
      className="bg-grey-bg p-6 w-96 rounded-md mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-8">
        <label className="block font-semibold mb-3">Name</label>
        <input
          type="text"
          className="w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
          placeholder="First Name"
          name="fName"
          ref={register({
            required: "First Name is Requierd",
            minLength: { value: 2, message: "Minimum firstname is 2 char" },
          })}
        />
        {errors.fName && (
          <p className="ml-10 text-xs text-error">{errors.fName.message}</p>
        )}
      </div>
      <div className="mb-8">
        <label className="block font-semibold mb-3">Family Name</label>
        <input
          type="text"
          className="w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
          placeholder="Secound Name"
          name="sName"
          ref={register({
            required: "Secound Name is Requierd",
            minLength: { value: 2, message: "Minimum firstname is 2 char" },
          })}
        />
        {errors.sName && (
          <p className="ml-10 text-xs text-error">{errors.sName.message}</p>
        )}
      </div>

      <div className="mb-8">
        <label className="block mb-3 font-bold">Favourites</label>
      </div>

      {fields.map((item, index) => {
        return (
          <div key={item.id} className="mb-5 flex items-center">
            {/* w-96 */}
            <input
              ref={register()}
              name={`controlItems[${index}].name`}
              defaultValue={item.langName}
              className="w-16 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:placeholder-dark focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
            />
            <select
              ref={register()}
              name={`controlItems[${index}].type`}
              defaultValue={item.grad}
              className="ml-2"
            >
              <option value="">Select ...</option>
              <option value="Good">Good</option>
              <option value="VGood">VGood</option>
              <option value="Excellent">Excellent</option>
            </select>
            <input
              ref={register()}
              name={`controlItems[${index}].amount`}
              type="number"
              defaultValue={item.amount}
              className="w-16 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:placeholder-dark focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
            />
            <button
              type="button"
              className="mr-2 focus:outline-none"
              onClick={() => remove(index)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 11H17V13H7V11Z" fill="#5B6366" />
                <path
                  d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                  fill="#5B6366"
                />
              </svg>
            </button>
          </div>
        );
      })}

      <div className="flex items-center">
        <svg
          onClick={() => append({})}
          className="mr-2 cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7Z" fill="#00A8E8" />
          <path
            d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
            fill="#00A8E8"
          />
        </svg>
        {/* <input
        onChange={handleInputChange}
        className="w-72 border border-accent  focus:outline-none rounded-md px-4 py-2.5 text-grey-sh01"
        type="text"
        name="favourite"
        value={content}
        placeholder="Enter your favourite"
      /> */}
      </div>
      {/* 
    <button
      className="font-bold text-sm rounded-full text-white bg-success w-4 h-4"
      type="button"
      onClick={() => append({})}
    >
      +
    </button>
    <br></br> */}

      <div className="flex justify-end">
        <button
          type="submit"
          className="mt-3 mr-5 focus:outline-none bg-primary px-8 py-2 text-white font-semibold rounded-full"
        >
          Submit
        </button>
      </div>

      {success && (
        <h1 className="ml-10 text-xs text-success">Form submit successfully</h1>
      )}
    </form>
  );
}

export default addEmplyee;
