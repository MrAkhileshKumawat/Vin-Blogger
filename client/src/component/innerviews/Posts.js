import React, { useState, useEffect } from "react";
import { networkRequest } from "../network";
import Typography from "@material-ui/core/Typography";
import "../css/main.css";
import Left_nav from "./Left_nav";
import Right_nav from "./Right_nav";

export default function About(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const fetchedData = await networkRequest(
        `http://localhost:3030/blog/${props.match.params.id}`,
        "get"
      ).then((response) => response);

      setData(fetchedData);
    };
    fetch();
  }, [props.match.params.id]);
  // console.log(
  //   props.match.params.id,
  //   data,
  //   "gnnvfn gfngfhgf hghf hghfh jh ggnnvfn gfngfhgf hghf hghfh jh g"
  // );
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">heomfdgjdzsfgk</div>
        <div className="col-md-6">
          <h1>Welcom to the about page</h1>
          <div>
            {data.length && (
              <div>
                <Typography gutterBottom variant="h5" component="h2">
                  {data[0].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ height: "40px", overflow: "hidden" }}
                >
                  {data[0].article}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ height: "40px", overflow: "hidden" }}
                >
                  {data[0]["users_id"]}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ height: "40px", overflow: "hidden" }}
                >
                  {data[0]["created_at"]}
                </Typography>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <Right_nav />
        </div>
      </div>
    </div>
  );
}
