import Image from "next/image";

type Props={
    paragraph:string,
    children:any
}

const Card = ({ paragraph, children} : Props) => {
  return (
    <div className="card u-margin-inline-small u-margin-top-big u-padding-inline-big">
      <p className="card__heading">{paragraph}</p>
      {children}
    </div>
  );
};

export default Card;
