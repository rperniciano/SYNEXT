import Foto1 from "./image/1.jpg";
import Foto2 from "./image/2.jpg";
import Foto3 from "./image/3.jpg";
import Image from "next/image";

const Photos = () => {
  return (
    <div className="col-1-of-2">
      <div className="composition">
        <Image
          src={Foto1}
          alt="Photo 1"
          className="composition__photo composition__photo--p1"
        />
        <Image
          src={Foto2}
          alt="Photo 2"
          className="composition__photo composition__photo--p2"
        />
        <Image
          src={Foto3}
          alt="Photo 3"
          className="composition__photo composition__photo--p3"
        />
      </div>
    </div>
  );
};

export default Photos;
