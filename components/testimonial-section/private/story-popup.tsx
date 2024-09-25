import { shallowEqual, useDispatch, useSelector } from "react-redux";

const Popup = () => {
  //0 non visibile, 1 visibile
  const modalState = useSelector((state: any) => state.rootReducer.modal, shallowEqual);
  const { visible, title, description } = modalState;
  const dispatch = useDispatch();

  console.log("calling", modalState,visible && "popup u-visible");

  return (
    <div className={(visible && "popup u-visible") || "popup"} id="popup">
      <div className="popup__content">
        <div className="popup__left">{/* <Image src={}></Image> */}</div>
        <div className="popup__right">
          <a
            href="#section-testimonials"
            className="popup__close"
            onClick={() => {
              console.log("cliccato");
              dispatch({
                type: "SET_VISIBLE",
                payload: false,
              });
            }}
          >
            x
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">{title}</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important – Please read before booking
          </h3>
          <p className="popup__text u-margin-bottom-medium">{description}</p>
          {/* <button className="btn btn-green">Book Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
