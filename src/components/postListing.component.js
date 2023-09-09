import { Fragment, lazy, Suspense, useState } from "react";
import "../postListing.css";

const PostListingCard = lazy(() => import("./postListing.card.component"));
const SignupComponent = lazy(() => import("./signup.component"));

const CloseStrip = ({ handleCloseForm }) => {
  return (
    <div className="closeIcon" onClick={() => handleCloseForm()}>
      <img src="./icons/close.png" alt="Logo" />
    </div>
  );
};

const PostListing = () => {
  const [showHideSignUpForm, setShowHideSignUpForm] = useState(false);

  const showSignupform = () => {
    setShowHideSignUpForm(true);
  };
  const handleCloseForm = () => {
    setShowHideSignUpForm(false);
  };

  return (
    <Fragment>
      <div className={`listingContainer ${showHideSignUpForm ? "bgBlur" : ""}`}>
        <header>
          <h1>Hello Jane</h1>
          <h2>
            How are you doing today? Would you like to share something with the
            community 🤗
          </h2>
        </header>
        <section className="cardArea">
          <div className="titleSection">
            <div>
              <label>Create Post</label>
            </div>
          </div>
          <div className="description">
            <div className="imageSection">
              <img src="./icons/messageIcon.png" alt="Logo" />
            </div>
            <p>How are you feeling today?</p>
          </div>
          <div className="footer">
            <button type="button" onClick={() => showSignupform()}>
              Post
            </button>
          </div>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <PostListingCard />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <PostListingCard />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div
          className={`modalComponent ${showHideSignUpForm ? "visible" : ""}`}
        >
          <SignupComponent
            closeStrip={<CloseStrip handleCloseForm={handleCloseForm} />}
          />
        </div>
      </Suspense>
    </Fragment>
  );
};
export default PostListing;
