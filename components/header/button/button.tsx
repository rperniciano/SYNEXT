'use client'

const scrollToBottom = () => {
  document.body.scrollTop = document.documentElement.scrollTop =
    document.documentElement.scrollHeight;
};

const ChiSiamoButton=() => {
  return (
    <div>
      <a
        className="btn btn--yellow btn--animated"
        onClick={scrollToBottom}
      >
        prenota ora
      </a>
    </div>
  );
}

export default ChiSiamoButton;
