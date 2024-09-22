import Image from "next/image";

const Card = ({ paragraph, children }) => {
  return (
    <div className="card u-margin-inline-small u-margin-top-big u-padding-inline-big">
      <p className="card__heading">{paragraph}</p>
      {children}
    </div>
  );
};

export default Card;
