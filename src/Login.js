import React from "react";
import "./Login.css";
function Login() {
  return (
    <div>
      <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center float h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-7 mx-md-4">
                      <form>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example11">
                            E-mail
                          </label>

                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="mailaddress@gmail.com"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example22">
                            Password
                          </label>

                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                          />
                        </div>
                        <div className="text-center pt-1 mb-2 pb-1">
                          <a className="text-muted" href="/">
                            Forgot password?
                          </a>
                        </div>

                        <div className="text-center pt-1 mb-2 pb-1">
                          <button
                            className="btn btn-success"
                            type="button"
                          >
                            <a href="#">Log in</a>
                          </button>
                        </div>
                        <div className="centered">
                          <p>or</p>
                        </div>
                        <div className="text-center mb-3">
                          <p>Sign in with:</p>
                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <i className="fab fa-google"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <i className="fab fa-twitter"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <i className="fab fa-github"></i>
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            <a href="/">Create new</a>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
