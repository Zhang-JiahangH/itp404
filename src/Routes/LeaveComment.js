import { useEffect, useState } from "react";
import Selector from "../Components/Selector";
import { Form } from "react-router-dom";
import Popupwindow from "../Components/Popupwindow";

export default function LeaveComment() {
  useEffect(() => {
    document.title = "Comment Create Page";
  }, []);
  const [curBeach, setCurBeach] = useState("Venice Beach");
  const [placeId, setPlaceId] = useState("ChIJ512buqS6woAReLLWQupEX2A");
  const [rating, setRating] = useState(4.5);
  const [viewNumbers, setViewNumbers] = useState(14094);
  const [beachName, setBeachName] = useState("Venice Beach");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div>
        <button onClick={handleShow}>Get Details</button>
        <Popupwindow
          show={show}
          handleClose={handleClose}
          placeId={placeId}
          name={beachName}
          rating={rating}
          viewNumbers={viewNumbers}
          address={curBeach}
          // writeReview={consoleWriteReviews}
        />
      </div>
      <Form method="post">
        <div>
          <Selector
            name="beach"
            label="target"
            value={curBeach}
            onChange={(curBeach) => {
              setCurBeach(curBeach);
              if (curBeach === "Venice Beach") {
                setBeachName("Venice Beach");
                setRating(4.5);
                setPlaceId("ChIJ512buqS6woAReLLWQupEX2A");
                setViewNumbers(14094);
              } else if (curBeach === "Santa Monica State Beach") {
                setBeachName("Santa Monica State Beach");
                setRating(4.7);
                setViewNumbers(35);
                setPlaceId("ChIJtUYGCtqkwoARtcm0y75Ac48");
              } else if (curBeach === "Mothers Beach") {
                setBeachName("Mothers Beach");
                setRating(4.4);
                setViewNumbers(89);
                setPlaceId("ChIJ10ina5m6woARbt2ZBGRgqck");
              }
            }}
            options={[
              {
                value: "Venice Beach",
                label: "Venice Beach",
              },
              {
                value: "Santa Monica State Beach",
                label: "Santa Monica State Beach",
              },
              {
                value: "Mothers Beach",
                label: "Mothers Beach",
              },
            ]}
          />
        </div>
        <div className="form-floating mb-3">
          <textarea className="form-control" id="content" name="content" />
          <label htmlFor="content">content</label>
        </div>

        <div>
          <label htmlFor="score">Quantity (between 0 and 5):</label>
          <input type="number" id="score" name="score" min="0" max="5" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
}
