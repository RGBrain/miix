import React from "react";
import "./styles/About.css";

function About() {
  return (
    <section className="container.fluid container-about">
      <h2 id="anchor-howItWorks">Create a playlist for everyone using miix</h2>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div id="accordion">
            <div className="card" id="dropdown">
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
                <div className="card-body how-it-works-text">
                  Log in to Spotify via our app to allow us to access your data,
                  then log out. <br></br>
                  <br></br>Get friends or family members in your group to do the
                  same. We can then combine their data with yours. Click on the
                  'get tracks' button. This will retrieve each person's most
                  listened to tracks and mix them up! <br></br>
                  <br></br>The app uses this combined list to recommend a
                  playlist of songs you might enjoy based on your group's
                  previous listening history. Hit the 'save playlist' button to
                  save a playlist to your Spotify account which friends and
                  family can access publicly. The playlist will be called "miix
                  recommendations" and include the time and date that it was
                  generated in the title. <br></br>
                  <br></br>If you'd like a different playlist hit 'get tracks'
                  again and a new list will appear. You can also play the
                  playlist directly from the app if you prefer on the spotify
                  player.
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
