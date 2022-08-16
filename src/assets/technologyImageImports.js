// background Images
import desktopBkg from "./technology/background-technology-desktop.jpg";
import tabletBkg from "./technology/background-technology-tablet.jpg";
import mobileBkg from "./technology/background-technology-mobile.jpg";
// tech images (landscape)
import launchVehicleLandscape from "./technology/image-launch-vehicle-landscape.jpg";
import spaceCapsuleLandscape from "./technology/image-space-capsule-landscape.jpg";
import spaceportLandscape from "./technology/image-spaceport-landscape.jpg";
// tech images (Portrait)
import launchVehiclePortrait from "./technology/image-launch-vehicle-portrait.jpg";
import spaceCapsulePortrait from "./technology/image-space-capsule-portrait.jpg";
import spaceportPortrait from "./technology/image-spaceport-portrait.jpg";

const techImages = {
  desktopBkg: desktopBkg,
  tabletBkg: tabletBkg,
  mobileBkg: mobileBkg,
  launchVehicle: {
    landscape: launchVehicleLandscape,
    portrait: launchVehiclePortrait,
  },
  spaceCapsule: {
    landscape: spaceCapsuleLandscape,
    portrait: spaceCapsulePortrait,
  },
  spaceport: {
    landscape: spaceportLandscape,
    portrait: spaceportPortrait,
  },
};

export default techImages;
