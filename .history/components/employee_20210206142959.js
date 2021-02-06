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
    <div className="flex-col">
      <div classname="flex-row">
        <p>{emp.id}</p>
        <p>{emp.Name}</p>
        <p>{emp.Status}</p>
      </div>
    </div>
  );
}

export default employee;
