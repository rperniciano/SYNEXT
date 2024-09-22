type Props = {
  paragraph: string;
  children: any;
  author: string;
};

const Card = ({ paragraph, children, author }: Props) => {
  return (
    <div className="testimonial-card u-margin-inline-big u-margin-top-big">
      {children}
      <p className="testimonial-text">{paragraph}</p>
      <p className="testimonial-author">{author}</p>
    </div>
  );
};

export default Card;
