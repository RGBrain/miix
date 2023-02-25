import React from "react";
import './styles/About.css';

function About() {
  return (
    <section className="container.fluid container-about">
        <h2 id="anchor-howItWorks">HOW IT WORKS</h2>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 d-none">
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12">
                <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How mixx works
                        </button>
                    </h5>
                    </div>
                
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        
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