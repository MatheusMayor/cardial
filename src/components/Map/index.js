import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA4dINbf6fUivm5qyTzANn6azGMnTbZNKc",
  });

  return (
    <div className={{ height: "350px" }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "300px", height: "300px" }}
          center={{ lat: -29.786220054239926, lng: -55.786490031607634 }}
          zoom={15}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Map;