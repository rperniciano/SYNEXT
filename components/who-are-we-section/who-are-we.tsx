import Heading from "./private/heading";
import Description from "./private/left-description";
import Photos from "./private/photos";

const WhoAreWe = () => {
  return (
    <section className="section-about">
      <Heading></Heading>
      <div className="row">
        <Description></Description>
      </div>
    </section>
  );
};

export default WhoAreWe;
