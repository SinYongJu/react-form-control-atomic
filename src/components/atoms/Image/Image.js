import React from "react";

function Image({ src, className, alt }) {
  return (
    <image
      src={src}
      className={`img_g${className ? " " + className : ""}`}
      alt={alt}
    />
  );
}

Image.defaultProps = {
  src: "",
  className: "",
  alt: ""
};
export default Image;
