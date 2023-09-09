import { useNavigate, Link } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();

  const submitLoginForm = (e) => {
    e.preventDefault();
    navigate("/listing");
  };

  return (
    <div className="loginContainer">
      <form onSubmit={(e) => submitLoginForm(e)}>
        <div className="titleArea">
          <p className="title">WELCOME BACK</p>
          <p className="subTitle">Log into your account</p>
        </div>
        <div className="formFields">
          <label>Email or Username</label>
          <input type="text" placeholder="Enter your email or username" />
        </div>
        <div className="formFields">
          <div>
            <label>Password</label>
            <Link to="/signup">
              <a href="/">Forgot password?</a>
            </Link>
          </div>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="formFields">
          <button type="submit">Login now</button>
          <label>
            Not registered yet?
            <Link to="/signup">
              <a href="/">Register →</a>
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
};
export default LoginComponent;
