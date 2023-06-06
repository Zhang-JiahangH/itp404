import "font-awesome/css/font-awesome.min.css";
import Modal from "react-bootstrap/Modal";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHeartCircleBolt,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Popupwindow(props) {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        data-testid="popupwindow"
      >
        <Modal.Header closeButton>Details</Modal.Header>
        <Modal.Body>
          {/* <img src={props.firstImage} alt="images" />
          <hr /> */}
          <h4 data-testid="name">{props.name}</h4>
          <h6 data-testid="reviews">{props.viewNumbers} reviews </h6>
          <h6 data-testid="rating">rating: {props.rating}</h6>
          <div data-testid="stars">
            <StarRatings
              rating={props.rating}
              starDimension="20px"
              starSpacing="15px"
            />
          </div>
          <hr />
          <div>
            <FontAwesomeIcon icon={faLocationDot} size="2x" />
            <p data-testid="address">{props.address}</p>
          </div>
          <hr />
        </Modal.Body>
      </Modal>
    </>
  );
}
