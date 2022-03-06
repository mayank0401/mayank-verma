import { useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import { MapButtons } from "../components/mapComponents/map-buttons";
import { Navigation } from "../components/navigation/nav-menu";
import styles from "../styles/Map.module.css";

const MapGL = ({ mapGlToken }) => {
  const [viewport, setViewport] = useState({
    longitude: 77.3965,
    latitude: 23.2543,
    zoom: 13,
  });
  const [style, setStyle] = useState("mapbox://styles/mapbox/outdoors-v11");

  const onMapMove = (e) => setViewport(e.viewState);
  const handleBtnClick = (e) => {
    setStyle(e.target.dataset.style);
  };

  return (
    <Navigation>
      <div className={styles.container}>
        <MapButtons handleBtnClick={handleBtnClick} />
        <Map
          {...viewport}
          onMove={(e) => onMapMove(e)}
          style={{ width: "100%", height: "88.5vh" }}
          mapStyle={style}
          mapboxAccessToken={mapGlToken}
        >
          <FullscreenControl />
          <GeolocateControl position="top-left" />
          <NavigationControl visualizePitch={false} />
          <ScaleControl />
          <Marker
            longitude={viewport.longitude}
            latitude={viewport.latitude}
            anchor="bottom"
            draggable
          >
            <img src="./map-marker.svg" />
          </Marker>
        </Map>
      </div>
    </Navigation>
  );
};

export async function getStaticProps(context) {
  const token = process.env.MAP_GL_TOKEN;

  // will be passed to the page component as props
  return {
    props: {
      mapGlToken: token,
    },
  };
}

export default MapGL;
