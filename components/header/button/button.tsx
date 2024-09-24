'use-client'

import { useState } from "react";


const ChiSiamoButton=() => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };
  const scrollToBottom = () => {
    document.body.scrollTop = document.documentElement.scrollTop =
      document.documentElement.scrollHeight;
  };
  return (
    <div>
      <a
        href="#section-footer"
        className="btn btn--yellow btn--animated"
        onClick={handleClick}
      >
        prenota ora
      </a>
    </div>
  );
}

export default ChiSiamoButton;
