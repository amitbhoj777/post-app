const PostListingCard = () => {
  return (
    <section className="cardArea">
      <div className="titleSection">
        <div className="imageSection">
          <img src="./icons/user.png" alt="Logo" />
        </div>
        <div className="titleArea">
          <label className="title">Theresa Webb</label>
          <label className="subTitle">5mins ago</label>
        </div>
        <div className="rightIcon">
          <img src="./icons/dots.png" alt="..." />
        </div>
      </div>
      <div className="description">
        <div className="imageSection">
          <img src="./icons/hand.png" alt="icon" />
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="footer">
        <div className="imageSection">
          <img src="./icons/chatBubble.png" alt="icon" />
        </div>
        <p>24 comments</p>
      </div>
    </section>
  );
};
export default PostListingCard;
