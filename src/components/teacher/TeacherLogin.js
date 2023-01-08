import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TeacherLogin = () => {
  const [database, setDatabase] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/teacherAccount");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((info) => {
        localStorage.setItem("user", JSON.stringify(user));
        handleClick();
      });
  };

  useEffect(() => {
    let localData = localStorage.getItem("name");
    console.log("Data :: ", localData);
  }, []);

  const user = {
    email: email,
    password: password,
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand me-2" href="#">
            <img
              src="https://images.unsplash.com/photo-1670602328279-82c100b3dfa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              height="16"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>

            <div class="d-flex align-items-center">
              <button
                type="button"
                class="btn btn-success me-3"
                onClick={() => {
                  navigate("/teachersignup");
                }}
              >
                Don't has any Account ? Click for Create Account
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="teacher-login-body">
        <section class="vh-100 ">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col col-xl-10">
                <div class="card" style={{ borderRadius: "1rem" }}>
                  <div class="row g-0">
                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://images.unsplash.com/photo-1519818187420-8e49de7adeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                        alt="login form"
                        class="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                      <div class="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={handleSubmit}>
                          <div class="dfw-normal mb-3 pb-3">
                            <i
                              class="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            ></i>
                            <span class="h1 fw-bold mb-0">Teacher-Login</span>
                          </div>

                          <h5
                            class="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Sign into your account
                          </h5>

                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              id="email"
                              class="form-control form-control-lg"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label class="form-label" for="email">
                              Email address
                            </label>
                          </div>

                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              id="password"
                              class="form-control form-control-lg"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label class="form-label" for="form2Example27">
                              Password
                            </label>
                          </div>

                          <div class="pt-1 mb-4">
                            <button
                              class="btn btn-success btn-lg btn-block"
                              type="submit"
                            >
                              Log in
                            </button>
                          </div>

                          <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                            Don't have an account?{" "}
                            <a
                              href="/teachersignup"
                              style={{ color: "#393f81" }}
                            >
                              Register here
                            </a>
                          </p>
                          <a href="#!" class="small text-muted">
                            Terms of use.
                          </a>
                          <a href="#!" class="small text-muted">
                            Privacy policy
                          </a>
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
    </div>
  );
};
export default TeacherLogin;
