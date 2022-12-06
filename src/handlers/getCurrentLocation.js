const getCurrentLocation = function (setState) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setState(`${lat}, ${lng}`);
      console.log(position);
    },
    (reject) => {
      console.error(reject);
    }
  );
};

export default getCurrentLocation;
