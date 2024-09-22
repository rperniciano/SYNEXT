type Props = {
  paragraph: string;
  children: any;
  author: string;
};

const Card = ({ paragraph, children, author }: Props) => {
  return (
    <div className="testimonial-card u-margin-inline-small u-margin-top-big">
      {children}
      <p className="testimonial-text">{paragraph}</p>
      <div className="testimonial-author">
        <p className="btn-text">{author}, full story</p>
      </div>
    </div>
  );
};

export default Card;
