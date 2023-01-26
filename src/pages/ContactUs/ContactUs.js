import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/Header/NavBar";

import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <div class="container">
        <div class="row mt-5 mb-5">
          <div class="col-lg-7 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
              <div class="card-body bg-light">
                <div class="container">
                  <form id="contact-form" role="form">
                    <div class="controls">
                      <div class="row">
                        <div class="col-md-6 mb-4 ">
                          <div class="form-group">
                            <label for="form_name">Firstname *</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              class="form-control"
                              placeholder="Please enter your firstname *"
                              required="required"
                              data-error="Firstname is required."
                            />
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-group">
                            <label for="form_lastname">Lastname *</label>
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              class="form-control"
                              placeholder="Please enter your lastname *"
                              required="required"
                              data-error="Lastname is required."
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-group">
                            <label for="form_email">Email *</label>
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              class="form-control"
                              placeholder="Please enter your email *"
                              required="required"
                              data-error="Valid email is required."
                            />
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-group">
                            <label for="form_need">
                              Please specify your need *
                            </label>
                            <select
                              id="form_need"
                              name="need"
                              class="form-control"
                              required="required"
                              data-error="Please specify your need."
                            >
                              <option value="" selected disabled>
                                --Select Your Issue--
                              </option>
                              <option>Know about our registeration</option>
                              <option>Havent been enrolled</option>
                              <option>Do You want to reach out to Admin</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 mb-4">
                          <div class="form-group">
                            <label for="form_message">Message *</label>
                            <textarea
                              id="form_message"
                              name="message"
                              class="form-control"
                              placeholder="Write your message here."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                            ></textarea>
                          </div>
                        </div>

                        <div class="col-md-12 mt-4">
                          <input
                            type="submit"
                            class="btn btn btn-send  pt-2 btn-block bukes
                            "
                            value="Send Message"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
