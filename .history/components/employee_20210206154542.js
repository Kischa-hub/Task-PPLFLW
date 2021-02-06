import React from "react";
import Nav from "../components/nav";

// function employee({ idd, Name, Status }) {
//   return (
//     <div>
//       <p>{idd}</p>
//       <p>{Name}</p>
//       <p>{Status}</p>
//     </div>
//   );
// }

function employee({ emp }) {
  return (
    <div className="flex-col bg-grey-bg p-6 w-96 rounded-md mx-auto">
      <div classname="flex-row">
        <label className="font-semibold mb-2 ml-2">ID:</label>

        <label className="w-4 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01">
          {emp.id}
        </label>

        <label for="Name" className="font-semibold mb-2 ml-2">
          Name:
        </label>
        <label className="w-4 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01">
          {emp.Name}
        </label>

        {/* <p>{emp.Name}</p>
        <p>{emp.Status}</p> */}
      </div>
      <Nav />
    </div>
  );
}

export default employee;
