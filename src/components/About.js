import React from "react";
import './styles/About.css';

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
                        <button className="btn btn-link" id="aboutBtn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How it works
                        </button>
                    </h5>
                    </div>
                
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                    This is how I work.   
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default About;