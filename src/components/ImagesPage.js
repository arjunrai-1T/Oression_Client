import React from "react";
import  "../assets/css/ImagesPage.css";

function ImagesPage() {
  console.log("sdad")
  return (
    <div className="image_div">

      <div className="image_clear">
        {/*<img className="imagesPage__logo" src={logo} alt="" />*/}
      </div>
      <a
        className="tile_img_sub"
        href="https://www.cleveroad.com/blog/flutter-ui-framework-progressive-tool-to-create-native-apps"
      >
        <span className="tile_img_title">
          Flutter UI Framework: Progressive Tool To Create Native Apps
        </span>
        <span
          className="tile_img_domain"
          title="https://www.cleveroad.com/blog/flutter-ui-framework-progressive-tool-to-create-native-apps"
        >
          cleveroad.com
        </span>
      </a>
      
    </div>
  );
}

export default ImagesPage;
