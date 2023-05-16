import React from "react";
// import Phones from "./Phones";

const Users = ({ d }) => {
  const { fullname, age, address } = d;
  //   console.log(phones)
  //   const {office, home} = phones;
  //   console.log(office)

  return (
    <div >
      <h2>
        Name: {fullname}
      </h2>
      <h3>
        Address: {address}
      </h3>
      <h4>
        Age: {age}
      </h4>
    </div>
  );
};

export default Users;
