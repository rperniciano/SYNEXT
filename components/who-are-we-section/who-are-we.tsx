import Heading from "./heading";
import Description from "./left-description";
import Photos from "./photos";

const WhoAreWe = () => {
  return (
    <section className="section-about">
      <Heading></Heading>
      <div className="row">
        <Description></Description>
        <Photos></Photos>
      </div>
    </section>
  );
};

export default WhoAreWe;
