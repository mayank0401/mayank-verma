import { useState } from "react";
import { Layout } from "../components/Layout/layout";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import { MapButtons } from "../components/mapComponents/map-buttons";

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
    <Layout>
      <div>
        <MapButtons handleBtnClick={handleBtnClick} />
        <Map
          {...viewport}
          onMove={(e) => onMapMove(e)}
          style={{ width: "100vw", height: "95vh" }}
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
    </Layout>
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
