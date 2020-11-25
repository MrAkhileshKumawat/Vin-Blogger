import React from "react";
import Right_nav from "./Right_nav";
import Center_nav from "./Center_nav";
import "../css/main.css";
import { networkRequest } from "../network";
import { Typography } from "@material-ui/core";
import Navbar2 from "../views/Navbar2";

export default function Left_nav(props) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
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
  //   data.id,
  //   data.profile_name,
  //   "gnnvfn gfngfhgf hghf hghfh jh ggnnvfn gfngfhgf hghf hghfh jh g"
  // );
  return (
    <div>
      <Navbar2 />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              {data ? (
                <div>
                  <center>
                    <img
                      className="rounded-circle"
                      src={data.profile_picture}
                      alt="img"
                    />
                    <h4 className="card-title">{data.profile_name}</h4>
                  </center>
                  <div className="card-body">
                    <p class="card-text">Followers:23 Likes:3454</p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          &nbsp;
          <div className="col-md-6">
            <div className="card">
              <div className="pad">
                {data ? (
                  <div>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.title}
                    </Typography>
                    <p>{data.date}</p>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      // style={{ height: "40px", overflow: "hidden" }}
                    >
                      {data.article}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ height: "40px", overflow: "hidden" }}
                    >
                      {data.id}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ height: "40px", overflow: "hidden" }}
                    ></Typography>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          &nbsp;
          <Right_nav />
        </div>
      </div>
    </div>
  );
}
