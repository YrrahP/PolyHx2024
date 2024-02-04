import clothesIcon from "../../assets/clothes.png";
import trashIcon from "../../assets/trash.png";
import foodIcon from "../../assets/foods.png";
import markerIcon from "../../assets/marker.png";
import positionIcon from "../../assets/current.png"

const getMarkerIcon = (type) => {
  switch (type) {
    case "trashCan":
      return trashIcon;
    case "clothesCan":
      return clothesIcon;
    case "foodCan":
      return foodIcon;
    case "positionIcon":
      return positionIcon;
    default:
      return markerIcon;
  }
};

export default getMarkerIcon;
