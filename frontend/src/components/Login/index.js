import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./index.css";
const Login = () => {
  return (
    <>
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Log In</h1>
          <div className="login-container">
            <h3 className="main-heading">Login to your account</h3>
            <form className="form-container gap-2">
              <input type="tel" maxlength="10" placeholder="Phone Number" />
              <input type="Password" placeholder="Password" />
              <button className="login-button btn btn-primary">Log In</button>
            </form>
            <div className="bottom-container">
              <div className="checkbox-text">
                <input type="checkbox" />
                <p className="para-1 mt-3">Remember Me</p>
              </div>
              <button className="forgot-button">Forgot Password?</button>
            </div>
          </div>
          <div className="container-1">
            <p className="create-new">
              Don't have an account ?{" "}
              <Link to="/register">
                <span>Create New</span>
              </Link>
            </p>
          </div>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hr8iI576BY8?si=YbUZgntTNmSWYoXK&autoplay=1"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default Login;
