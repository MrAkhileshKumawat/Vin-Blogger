import React from "react";

import Button from "@material-ui/core/Button";
import { networkRequest } from "../network";

import cardimage from "../../images/3.jpg";
import Navbar2 from "./Navbar2";

import { useParams } from "react-router-dom";

export default function Explore(props) {
  const [data, setData] = React.useState([]);
  const [afterSearch, setafterSearch] = React.useState([]);

  let { searchword } = useParams();

  const GotoPosts = (id) => {
    console.log(id, "iddddd");
    props.history.push(`posts/${id}`);
  };
  React.useEffect(() => {
    const fetch = async () => {
      const fetchedData = await networkRequest(
        "http://localhost:3030/blogs",
        "get"
      ).then((response) => response);

      setData(fetchedData);
    };
    fetch();
  }, []);

  React.useEffect(() => {
    console.log("rrrrrrrrrrrr", searchword);
    const fetch = async () => {
      const fetchedData = await networkRequest(
        `http://localhost:3030/search/${searchword}`,
        "get"
      ).then((response) => response);

      // setfetch(fetchedData);
      // props.history.push('/',fetch)
      console.log(fetchedData, "ssssssssssssssssssssss");
      if (fetchedData) {
        setafterSearch(fetchedData);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <Navbar2 />
      <div className="container-fluid">
        <div className="row">
          {afterSearch.length >= 1
            ? afterSearch.map((post) => (
                <div class="col-sm-6">
                  <div class="card flex-md-row mb-4 box-shadow h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                      <strong class="d-inline-block mb-2 text-primary">
                        World
                      </strong>
                      <h3 class="mb-0">
                        <p
                          class="text-dark"
                          style={{ height: "65px", overflow: "hidden" }}
                        >
                          {post.title}
                        </p>
                      </h3>
                      <div class="mb-1 text-muted">Nov 12</div>
                      <p
                        class="card-text mb-auto"
                        style={{ height: "75px", overflow: "hidden" }}
                      >
                        {post.article}
                      </p>
                        <Button
                          onClick={() => GotoPosts(post.id)}
                          style={{ color: "blue" }}
                        >
                          Read more..
                        </Button>
                    </div>
                    <img
                      src={cardimage}
                      className="card-img-right flex-auto d-none d-md-block"
                      style={{ width: "200px", height: "250px" }}
                    />
                  </div>
                </div>
              ))
            : data.map((post) => (
                <div class="col-sm-6">
                  <div class="card flex-md-row mb-4 box-shadow h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                      <strong class="d-inline-block mb-2 text-primary">
                        World
                      </strong>
                      <h3 class="mb-0">
                        <p
                          class="text-dark"
                          style={{ height: "65px", overflow: "hidden" }}
                        >
                          {post.title}
                        </p>
                      </h3>
                      <div class="mb-1 text-muted">Nov 12</div>
                      <p
                        class="card-text mb-auto"
                        style={{ height: "75px", overflow: "hidden" }}
                      >
                        {post.article}
                      </p>
                        <Button
                          onClick={() => GotoPosts(post.id)}
                          style={{ color: "blue" }}
                        >
                          Read more..
                        </Button>
                    </div>
                    <img
                      src={cardimage}
                      className="card-img-right flex-auto d-none d-md-block"
                      style={{ width: "200px", height: "250px" }}
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
