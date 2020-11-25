import React from "react";
import {  TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import { networkRequest } from "../network";
import Navbar2 from "../views/Navbar2";

const useStyles = () => ({
  container: {
    justifyContent: "center",
    // height:130
    marginBottom: "80px",
    //   background:"black"
  },
  // text_width:{
  //   width:"700px"
  // }
});

export default function NewPost() {
  // const classes = useStyles();
  const history = useHistory()
  const [title, settitle] = React.useState("");
  const [description, setdescription] = React.useState("");

  const sumbitPost = () => {
    const fetch = async () => {
      const fetchedData = await networkRequest(
        "http://localhost:3030/post/blog",
        "post",
        {
          title: title,
          article: description,
        }
      ).then((response) => response);
      console.log(fetchedData, "pppppppppppppppppppppppppppppppp");
      alert(fetchedData.message)
      if(fetchedData.message==="Blog is created successfully"){
        history.push('/')
      }
    };
    fetch();
  };
  // const inputRef = React.useRef();

  // React.useEffect(() => {
  //   inputRef.current.focus();
  // })
  return (
    <div>
      <Navbar2 />
      <div className="container">
        {/* <center> */}
        <div className="col-md-5">
          <div className="form-area ">
            <form className="container justify-content-center " role="form">
              <br styles="clear:both" />
              <div className="form-group">
                <TextField
                  id="outlined-textarea"
                  label="TITLE"
                  placeholder="Placeholder"
                  multiline
                  fullWidth
                  variant="outlined"
                  onChange={(e) => settitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <TextField
                  id="standard-textarea"
                  label="Article"
                  placeholder="Article"
                  multiline
                  fullWidth
                  onChange={(e) => setdescription(e.target.value)}
                />
              </div>
              <button
                type="button"
                id="submit"
                name="submit"
                className="btn btn-primary pull-right"
                onClick={sumbitPost}
              >
                Add Post
              </button>
            </form>
          </div>
        </div>
        {/* </center> */}
      </div>
    </div>
  );
}
