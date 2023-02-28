import React from "react";
import "./styles/About.css";

function About() {
  return (
    <section className="container.fluid container-about">
      <h2 id="anchor-howItWorks">Create a playlist for everyone using miix</h2>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    id="aboutBtn"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How it works
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Log in to Spotify to give us permission to access your data
                  and log out. <br></br>
                  <br></br>Get friends and family to log in and log out so we
                  can combine their data with yours. Click on the 'get tracks'
                  button. This will retrieve the top tracks that each person has
                  listened to and mix them up! <br></br>
                  <br></br>You will be provided with a playlist of music
                  recommendations tailored to your tastes. Hit the 'save
                  playlist' button to save a playlist to your Spotify account as
                  a public playlist which friends and family can access.{" "}
                  <br></br>
                  <br></br>If you'd like a different playlist hit 'get tracks'
                  again and a new list will appear. You can also play the
                  playlist directly from the app if you prefer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
