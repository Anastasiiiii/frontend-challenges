import React from "react";
import milkImg from "../images/desktop/image-gallery-milkbottles.jpg";
import orangeImg from "../images/desktop/image-gallery-orange.jpg";
import coneImg from "../images/desktop/image-gallery-cone.jpg";
import sugarImg from "../images/desktop/image-gallery-sugarcubes.jpg";

import milkImgSmall from "../images/mobile/image-gallery-milkbottles.jpg";
import orangeImgSmall from "../images/mobile/image-gallery-orange.jpg";
import coneImgSmall from "../images/mobile/image-gallery-cone.jpg";
import sugarImgSmall from "../images/mobile/image-gallery-sugar-cubes.jpg";

const ImgLine = ({ isMobile }) => {
    const imagesData = [milkImg, orangeImg, coneImg, sugarImg];
    const imagesDataMobile = [milkImgSmall, orangeImgSmall, coneImgSmall, sugarImgSmall];

    return (
        <span className="images-in-line">
            {isMobile 
                ? imagesDataMobile.map((data, index) => (
                    <img key={index} src={data} className="line-img" alt="gallery item" style={{ width: "50%", marginBottom: "-4px" }} />
                ))
                : imagesData.map((data, index) => (
                    <img key={index} src={data} className="line-img" alt="gallery item" style={{ width: "25%" }} />
                ))
            }
        </span>
    );
}

export default ImgLine;
