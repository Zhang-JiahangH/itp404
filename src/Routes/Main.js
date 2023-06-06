/* eslint-disable */
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";
import Selector from "../Components/Selector";
import Popupwindow from "../Components/Popupwindow";

function App() {
  useEffect(() => {
    document.title = "Main Page";
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [center, setCenter] = useState({
    lat: 48.8584,
    lng: 2.2945,
  });
  const [originLat, setOriginLat] = useState(48.8584);
  const [originLng, setOriginLng] = useState(2.2945);
  const [curBeach, setCurBeach] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [placeId, setPlaceId] = useState("");
  const [rating, setRating] = useState(0.0);
  const [viewNumbers, setViewNumbers] = useState(0);
  const [beachName, setBeachName] = useState("");

  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
    if (
      center.lat != position.coords.latitude ||
      center.lng != position.coords.longitude
    ) {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setOriginLat(position.coords.latitude);
      setOriginLng(position.coords.longitude);
    }
  });

  if (!isLoaded) {
    return <></>;
  }

  async function calculateRoute() {
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: new google.maps.LatLng(originLat, originLng),
      destination: curBeach,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "95%" }}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="1"
      >
        <HStack spacing={2} justifyContent="space-between">
          <Box flexGrow={1}>
            <Selector
              label="target"
              value={curBeach}
              onChange={(curBeach) => {
                setCurBeach(curBeach);
                setEnabled(true);
                if (
                  curBeach === "Venice Beach, Los Angeles, CA, United States"
                ) {
                  setBeachName("Venice Beach");
                  setRating(4.5);
                  setPlaceId("ChIJ512buqS6woAReLLWQupEX2A");
                  setViewNumbers(14094);
                } else if (
                  curBeach ===
                  "Santa Monica State Beach, Santa Monica, CA 90401, United States"
                ) {
                  setBeachName("Santa Monica State Beach");
                  setRating(4.7);
                  setViewNumbers(35);
                  setPlaceId("ChIJtUYGCtqkwoARtcm0y75Ac48");
                } else if (
                  curBeach ===
                  "Mothers Beach, Marina Del Rey, CA 90292, United States"
                ) {
                  setBeachName("Mothers Beach");
                  setRating(4.4);
                  setViewNumbers(89);
                  setPlaceId("ChIJ10ina5m6woARbt2ZBGRgqck");
                } else {
                  setEnabled(false);
                }
              }}
              options={[
                { value: "", label: "--Select Beach--" },
                {
                  value: "Venice Beach, Los Angeles, CA, United States",
                  label: "Venice Beach",
                },
                {
                  value:
                    "Santa Monica State Beach, Santa Monica, CA 90401, United States",
                  label: "Santa Monica State Beach",
                },
                {
                  value:
                    "Mothers Beach, Marina Del Rey, CA 90292, United States",
                  label: "Mothers Beach",
                },
              ]}
            />
          </Box>

          <ButtonGroup>
            <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label="center back"
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent="space-between">
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label="center back"
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
          />
        </HStack>
        <HStack>
          <Box>
            <ButtonGroup>
              <Button
                colorScheme="pink"
                type="submit"
                onClick={handleShow}
                disabled={!enabled}
              >
                Get Details
              </Button>
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
            </ButtonGroup>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
}

export default App;
