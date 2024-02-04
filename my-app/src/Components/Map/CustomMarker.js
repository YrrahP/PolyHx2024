import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

const getMarkerIcon = (type) => {
  switch (type) {
    case "trashCan":
      return <FontAwesomeIcon icon="fa-light fa-trash-can" />
    case "clothesCan":
      return "http://maps.google.com/mapfiles/ms/icons/clothingstore.png";
    case "foodCan":
      return "http://maps.google.com/mapfiles/ms/icons/restaurant.png";
    default:
      return null;
  }
};

export default getMarkerIcon;
