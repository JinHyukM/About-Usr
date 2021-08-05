import React from "react";
import Asset88 from "./images/Asset88.jpg";
import Asset56 from "./images/Asset56.jpg";

function Image() {
  return (
    <div className="images">
      <img className="asset88" src={Asset88} alt="Asset88" />
      <img className="asset56" src={Asset56} alt="Asset56" />
    </div>
  );
}

export default Image;
