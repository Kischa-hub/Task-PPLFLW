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
    <div>
      <p>{emp.ID}</p>
      <p>{emp.Name}</p>
      <p>{emp.Status}</p>
    </div>
  );
}

export default employee;
