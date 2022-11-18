import { LazyLoadImage } from "react-lazy-load-image-component";
import Error404 from "../styles/404.module.css";
function NotFound() {
  return (
    <div id={Error404.four_o_four}>
      <div id={Error404.icon}>
        <LazyLoadImage
          alt="server icon"
          height={400}
          src={"404.png"}
          width={400}
        ></LazyLoadImage>
      </div>
      <div id={Error404.text}>
        <h1>Are you lost?</h1>
        <p>The page you are looking for doesn't exist</p>
      </div>
    </div>
  );
}
export default NotFound;
