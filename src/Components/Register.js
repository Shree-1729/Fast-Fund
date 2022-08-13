import React from "react";
import "./Login.css";
function Register() {
  const style={
    marginBottom:"30rem"
  }
  return (
    <div style={style}>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5 boyd">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 headed">
                    Registration Form for Funding 
                  </h3>
                  <form>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline blocking  datepicker w-100">
                        <label for="birthdayDate" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="birthdayDate"
                        />
                      </div>
                      <div className="form-outline blocking ">
                        <label className="form-label" for="firstName">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline blocking ">
                        <label className="form-label" for="lastName">
                          Brief Description
                        </label>
                        <textarea
                          name="text"
                          id="idi"
                          cols="76"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center"></div>
                      <div className="form-outline blocking ">
                        <label className="form-label" for="phoneNumber">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          placeholder="+91"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline blocking ">
                        <label className="form-label" for="emailAddress">
                          Email
                        </label>
                        <input
                          type="email"
                          id="emailAddress"
                          placeholder=" abcd@gmail.com "
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline blocking  mb-4">
                        <label className="form-label" for="form2Example22">
                          Password
                        </label>

                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
                          />
                          <label className="form-check-label" for="maleGender">
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="option3"
                          />
                          <label className="form-check-label" for="otherGender">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2"></div>
                      <div className="col-md-6 mb-4 pb-2"></div>
                    </div>

                    <div className="row"></div>

                    <div class="d-grid gap-2 d-md-block">
                      <button class="btn btn-danger makethat" type="button">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
