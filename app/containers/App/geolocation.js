import axios from 'axios';

export const language = new Promise((resolve) => {
  (function getLanguage() {
    function getCountryCode(country) {
      const countryToLowerCase = country.toLowerCase();
      switch (country) {
        case countryToLowerCase === 'india':
          return 'in';
        case countryToLowerCase === 'nepal':
          return 'ne';
        default:
          return 'en';
      }
    }

    navigator.geolocation.getCurrentPosition((location) => {
      const { longitude: lon, latitude: lat } = location.coords;
      const url = encodeURI(
        `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lon}&username=gregjarvez1_`
      );
      axios.get(url).then((loc) => {
        const countryName = loc.data.geonames[0].countryName;
        const countryCode = getCountryCode(countryName);
        resolve(countryCode);
      });
    });
  }());
});
