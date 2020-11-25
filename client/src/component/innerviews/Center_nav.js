// import React from "react";
// import "../css/main.css";
// import { networkRequest } from "../network";
// import { Typography } from "@material-ui/core";

// export default function Center_nav(props) {
//   const [data, setData] = React.useState([]);
//   React.useEffect(() => {
//     const fetch = async () => {
//       const fetchedData = await networkRequest(
//         `http://localhost:3030/blog/${props.match.params.id}`,
//         "get"
//       ).then((response) => response);

//       setData(fetchedData);
//     };
//     fetch();
//   }, [props.match.params.id]);
//   // console.log(
//   //   props.match.params.id,
//   //   data,
//   //   "gnnvfn gfngfhgf hghf hghfh jh ggnnvfn gfngfhgf hghf hghfh jh g"
//   // );
//   return (
//     <React.Fragment>
//       <div className="col-sm-6">
//         <div className="card">
//           <h1>Heading of the blog</h1>
//           <p>by Mr.Akilesh Kumavat</p>
//           <br></br>
//           <div className="pad">
//             <p>
//               Paragraphs are the building blocks of papers. Many students define
//               paragraphs in terms of length: a paragraph is a group of at least
//               five sentences, a paragraph is half a page long, etc. In reality,
//               though, the unity and coherence of ideas among sentences is what
//               constitutes a paragraph. A paragraph is defined as “a group of
//               sentences or a single sentence that forms a unit” (Lunsford and
//               Connors 116). Length and appearance do not determine whether a
//               section in a paper is a paragraph. For instance, in some styles of
//               writing, particularly journalistic styles, a paragraph can be just
//               one sentence long. Ultimately, a paragraph is a sentence or group
//               of sentences that support one main idea. In this handout, we will
//               refer to this as the “controlling idea,” because it controls what
//               happens in the rest of the paragraph.
//             </p>
//             <p>
//               Let’s walk through a 5-step process for building a paragraph. For
//               each step there is an explanation and example. Our example
//               paragraph will be about slave spirituals, the original songs that
//               African Americans created during slavery. The model paragraph uses
//               illustration (giving examples) to prove its point.
//             </p>
//             <div>
//               {data.length && (
//                 <div>
//                   <Typography gutterBottom variant="h5" component="h2">
//                     {data[0].title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                     style={{ height: "40px", overflow: "hidden" }}
//                   >
//                     {data[0].article}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                     style={{ height: "40px", overflow: "hidden" }}
//                   >
//                     {data[0]["users_id"]}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                     style={{ height: "40px", overflow: "hidden" }}
//                   >
//                     {data[0]["created_at"]}
//                   </Typography>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }
