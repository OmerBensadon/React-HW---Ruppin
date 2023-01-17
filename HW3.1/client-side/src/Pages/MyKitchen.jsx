import React from 'react'
const apiUrl = "https://localhost:44321/"; // this is the server name and connection
export default function MyKitchen(props) {
  
  // fetch(this.apiUrl, {
  //   method: "GET",
  //   headers: new Headers({
  //     "Content-Type": "application/json; charset=UTF-8",
  //   }),
  // })
  //   .then((response) => {
  //     console.log("res=", response);
  //     console.log("res.status", response.status);
  //     console.log("res.ok", response.ok);
  //     return response.json();
  //   })
  //   .then(
  //     (result) => {
  //       console.log("fetch FetchGetRecipes= ", result);
  //       result.map((st) => console.log(st.FullName));
  //       console.log("result[0].Name=", result[0].Name);
  //     },
  //     (error) => {
  //       console.log("err post=", error);
  //     }
  //   );
  return <div>MyKitchen </div>;
}
