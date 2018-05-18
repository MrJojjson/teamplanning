import Geocoder from 'react-native-geocoding';

export const GetGeoLocationFromAddress = (address) => {
    return Geocoder.from(address)
    .then(json => {
        var location = json.results[0].geometry.location;
        return location;
    })
    .catch(error => console.warn(error));
}


