import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Testimonials.css";
export default function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <Carousel>
          <Carousel.Item>
            <div className="testi">
              <img
                src="https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg"
                alt="First slide"
              />
              <div className="testi-text">
                <h5>Joanna K</h5>
                <p> --Consultant & advisor</p>
                <h2>
                  Highly poweful and yet ease to use tool to create in- app
                  tutorial
                </h2>
                <h4>What do you like best?</h4>
                <p>
                  I liked how it takes almost zero technical expertise to
                  understand and manage this. Using the dashboard, you can
                  easily build an in-app guide tool from the bottom up,
                  including design, content, look and feel, and much more.
                </p>
                <h4>What do you dislike?</h4>
                <p>
                  There is nothing that I dislike about the tool as of right
                  now! It's very easy to use and haven't had any issues with the
                  usability of the tool.
                </p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="testi">
              <img
                src="https://cdn2.hubspot.net/hubfs/53/Testimonial-lead-gen-1.jpg"
                alt="Second slide"
              />

              <div className="testi-text">
                <h5>Arunabh A </h5>
                <p> --product specialist</p>
                <h2>Smart and Straight Forward</h2>
                <h4>What do you like best?</h4>
                <p>
                  The app has a really easy and straightforward UI. There is not
                  a lot of clutter and easy to navigate.
                  <h4>What do you dislike?</h4>
                  <p>
                    There is not a lot to dislike as such. The product has most
                    of the features one might need. The only thing that can be
                    improved is the Popup cards UI.
                  </p>
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testi">
              <img
                src="https://blog.hubspot.com/hubfs/testimonial-request-template-1.jpg"
                alt="Third slide"
              />

              <div className="testi-text">
                <h5> Aman Sharma </h5>
                <p>--Executive Sponsor in Marketing and Advertising</p>
                <h2>Great Ux-improvement</h2>
                <h4>What do you like best?</h4>
                <p>
                  Ziplyne is designed intuitively and with customer support
                  workflows in mind. It is simple to use, incorporates ability
                  to bring in data from existing data storage methods like
                  excel. Provides integrations with zendesk/jira and AI
                  capabilities to reduce repetitive support tasks as well as
                  automation
                </p>

                <h4>What do you dislike?</h4>
                <p>
                  There isn't much to dislike. It is a product manager/UI
                  designer's dream solution
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
