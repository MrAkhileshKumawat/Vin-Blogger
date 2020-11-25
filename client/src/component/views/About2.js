import React from "react";
import Navbar2 from "./Navbar2";
export default function About2() {
  return (
    <>
      <Navbar2 />
      <header className=" text-center py-2 mb-4">
        <div className="container">
          <h1 className="font-weight-light text-black team">Meet the Team</h1>
        </div>
      </header>

      {/* <!-- Page Content --> */}
      <div className="container">
        <div className="row">
          {/* <!-- Team Member 1 --> */}
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://source.unsplash.com/TMgQMXoglsM/500x350"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 2 --> */}
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 3 --> */}
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://source.unsplash.com/sNut2MqSmds/500x350"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 4 --> */}
          <p className="h4 text-center about-us">
            We started our journey with the ambition to spread the knowledge.
            Well our Social Blogging Platform created by a group of 3 students
            (Ansul Patel, Akhlak Patel, Faruk Patel) who wanted to learn from
            other industry leaders
          </p>
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --></div> */}
    </>
  );
}
