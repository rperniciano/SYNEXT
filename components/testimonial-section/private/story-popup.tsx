import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Immagine from "../image/michipopup.jpg";
import Image from "next/image";

const Popup = () => {
  //0 non visibile, 1 visibile
  const modalState = useSelector(
    (state: any) => state.rootReducer.modal,
    shallowEqual
  );
  const { visible, title, description } = modalState;
  const dispatch = useDispatch();

  return (
    <div
      className={(visible && "popup u-visible") || "popup u-hidden"}
      id="popup"
      onClick={() => {
        dispatch({
          type: "SET_VISIBLE",
          payload: false,
        });
        window.document.body.style.overflowY = "auto";
      }}
    >
      <div className="popup__content">
        <div className="popup__left">
          <Image
            src={Immagine}
            alt="michi deiana"
            className="popup__img"
          ></Image>
        </div>
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
              window.document.body.style.overflowY = "auto";
            }}
          >
            x
          </a>
          <h2 className="heading-secondary heading-secondary__popup u-margin-bottom-small">
            {title}
          </h2>
          <h3 className="heading-tertiary heading-tertiary__popup u-margin-bottom-small">
            Important – Please read before booking
          </h3>
          <p className="popup__text u-margin-bottom-medium">{description}</p>
          <a
            href="#section-testimonials"
            className="popup__text-close popup__text"
            onClick={() => {
              dispatch({
                type: "SET_VISIBLE",
                payload: false,
              });
              window.document.body.style.overflowY = "auto";
            }}
          >
            chiudi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
