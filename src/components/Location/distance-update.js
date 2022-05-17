import { calculateDistance } from "./distance-calculation";
import { userData } from "../Data/distance-data";
import { useGeoLocation } from "./use-geolocation";
function Mapping(){
    const location = useGeoLocation();
    console.log(location)
    for(var i = 0 ; i < userData.length ; i++){
        console.log("########" ,userData[i].lat , location.coordinates.lat)
        userData[i].distance = calculateDistance(location.coordinates.lat, location.coordinates.lng, userData[i].lat,userData[i].lng);
    }
    return userData;
}

export default Mapping;