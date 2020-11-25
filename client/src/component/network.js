// import { getResourceUrl } from "../network/url-path";

export const networkRequest = async (url, method,body) => {
  console.log(url, "create");
  const res = await fetch(url, {
    method: method,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization:localStorage.getItem('token'),
    },
    body: JSON.stringify(body),
  });
//   console.log(res.json(),"res.json();")
  return res.json();
};