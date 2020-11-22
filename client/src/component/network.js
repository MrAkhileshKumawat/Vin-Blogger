// import { getResourceUrl } from "../network/url-path";

export const networkRequest = async (url, method) => {
  console.log(url, "create");
  const res = await fetch(url, {
    method: method,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    //   authorization:
        // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdTMTI0MTUxMjM0MTI0MzIiLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE1MTEyODcwNzd9.9e8yq-jtWp0F6Rynai3x--Cbm76Y_oYqGAS1uTglcMI",
    },
    // body: JSON.stringify(reqObj),
  });
//   console.log(res.json(),"res.json();")
  return res.json();
};