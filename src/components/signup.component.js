import { useNavigate, Link } from "react-router-dom";

const SignupComponent = (props) => {
  const { closeStrip } = props;
  const navigate = useNavigate();

  const submitSignupForm = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="loginContainer">
      <form onSubmit={(e) => submitSignupForm(e)}>
        {closeStrip}
        <div className="titleArea">
          <p className="title">SIGN UP</p>
          <p className="subTitle">Create an account to continue</p>
        </div>
        <div className="formFields">
          <label>Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="formFields">
          <label>Username</label>
          <input type="text" placeholder="Choose a preferred username" />
        </div>
        <div className="formFields">
          <div>
            <label>Password</label>
          </div>
          <input type="password" placeholder="Choose a strong password" />
        </div>
        <div className="formFields">
          <button type="submit">Continue</button>
          <label>
            Already have an account?
            <Link to="/login">
              <a href="/">Login → </a>
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
};
export default SignupComponent;
