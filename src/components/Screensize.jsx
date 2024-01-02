import React, { useEffect, useState } from "react";

function Screensize() {
  const [screensize, setScreensize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const updateScreenSize = () => {
    setScreensize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);
  return (
    <div>
      <h2>Screensize Resolution</h2>
      <h3>Width : {screensize.width}</h3>
      <h3>Height : {screensize.height}</h3>
    </div>
  );
}

export default Screensize;
