export const MapButtons = ({ handleBtnClick }) => {
  return (
    <>
      <button
        data-style="mapbox://styles/mapbox/streets-v11"
        onClick={handleBtnClick}
      >
        Streets
      </button>
      <button
        data-style="mapbox://styles/mapbox/outdoors-v11"
        onClick={handleBtnClick}
      >
        Outdoors
      </button>
      <button
        data-style="mapbox://styles/mapbox/light-v10"
        onClick={handleBtnClick}
      >
        Light
      </button>
      <button
        data-style="mapbox://styles/mapbox/dark-v10"
        onClick={handleBtnClick}
      >
        Dark
      </button>
      <button
        data-style="mapbox://styles/mapbox/satellite-v9"
        onClick={handleBtnClick}
      >
        Satellite
      </button>
      <button
        data-style="mapbox://styles/mapbox/satellite-streets-v11"
        onClick={handleBtnClick}
      >
        Satellite Streets
      </button>
      <button
        data-style="mapbox://styles/mapbox/navigation-day-v1"
        onClick={handleBtnClick}
      >
        Navigation Day
      </button>
      <button
        data-style="mapbox://styles/mapbox/navigation-night-v1"
        onClick={handleBtnClick}
      >
        Navigation Night
      </button>
    </>
  );
};
