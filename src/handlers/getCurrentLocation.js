const getCurrentLocation = function (setState) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setState(`${lat}, ${lng}`);
    },
    (reject) => {
      console.error(reject);
    }
  );
};

export default getCurrentLocation;
