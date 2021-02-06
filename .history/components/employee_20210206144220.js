import React from "react";

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
        <label for="country" className="font-semibold mb-3 ml-3">
          ID:
        </label>
        <input
          type="text"
          className="w-4 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
        />
        <p>{emp.id}</p>
        <p>{emp.Name}</p>
        <p>{emp.Status}</p>
      </div>
    </div>
  );
}

export default employee;
