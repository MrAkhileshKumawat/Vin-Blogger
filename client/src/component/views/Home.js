import React, { useEffect, useState } from "react";
import Coursel from "../innerviews/Coursel";
import { networkRequest } from "../network";
import Button from "@material-ui/core/Button";
import cardimage from "../../images/3.jpg";
import { Nav } from "react-bootstrap";
import Navbar2 from "./Navbar2";
import { useParams } from "react-router-dom";

export default function Home(props) {
  const [data, setData] = useState([]);
  const [afterSearch, setafterSearch] = useState([]);

  // const {searchTitle} = useParams();
  let { searchword } = useParams();

  const GotoPosts = (id) => {
    // console.log(id, "iddddd");
    props.history.push(`posts/${id}`);
  };
  useEffect(() => {
    const fetch = async () => {
      const fetchedData = await networkRequest(
        "http://localhost:3030/blogs",
        "get"
      ).then((response) => response);

      setData(fetchedData);
    };
    fetch();
    // console.log("property_id",props);
  }, []);
  // console.log(props,"hommmmmmmmmmmmmmmmm");

  console.log(data, "naykkk");
  // if(searchword){
  React.useEffect(() => {
    const fetch = async () => {
      const fetchedData = await networkRequest(
        `http://localhost:3030/search/${searchword}`,
        "get"
      ).then((response) => response);

      if (fetchedData) {
        setafterSearch(fetchedData);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <Navbar2 />
      <Coursel />
      {localStorage.getItem("token") ? (
        <Nav.Link href="/newpost" className="btn btn-float-center btn-danger">
          Create post
        </Nav.Link>
      ) : null}
      <div className="container-fluid">
        <div className="row">
          {afterSearch.length >= 1
            ? afterSearch.slice(0, 4).map((post) => (
                <div class="col-md-6 ">
                  <div class="card flex-md-row mb-4 box-shadow h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                      <strong class="d-inline-block mb-2 text-primary">
                        World
                      </strong>
                      <h3 class="mb-0">
                        <p
                          class="text-dark"
                          style={{ height: "70px", overflow: "hidden" }}
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
                      alt="article-image"
                      style={{ width: "200px", height: "250px" }}
                    />
                  </div>
                </div>
              ))
            : data.slice(0, 4).map((post) => (
                <div class="col-md-6 ">
                  <div class="card flex-md-row mb-4 box-shadow h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                      <strong class="d-inline-block mb-2 text-primary">
                        World
                      </strong>
                      <h3 class="mb-0">
                        <p
                          class="text-dark"
                          style={{ height: "70px", overflow: "hidden" }}
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
                      alt="article-image"
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
