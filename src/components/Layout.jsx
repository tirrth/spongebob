import React, { useEffect, useState } from "react";

import anim_1 from "../assets/animations/anim-1.gif";
import anim_2 from "../assets/animations/anim-2.gif";
import anim_3 from "../assets/animations/anim-3.gif";
import anim_4 from "../assets/animations/anim-4.gif";
import anim_5 from "../assets/animations/anim-5.gif";
import anim_6 from "../assets/animations/anim-6.gif";
import anim_7 from "../assets/animations/anim-7.gif";
import anim_8 from "../assets/animations/anim-8.gif";
import anim_9 from "../assets/animations/anim-9.gif";
const randomAnimNo = Math.floor(Math.random() * (9 + 1 - 0)) + 0;
switch (randomAnimNo) {
  case 1:
    var anim = anim_1;
    var timeout = 3000;
    break;
  case 2:
    anim = anim_2;
    timeout = 3000;
    break;
  case 3:
    anim = anim_3;
    timeout = 3000;
    break;
  case 4:
    anim = anim_4;
    timeout = 3000;
    break;
  case 5:
    anim = anim_5;
    timeout = 3000;
    break;
  case 6:
    anim = anim_6;
    timeout = 3000;
    break;
  case 7:
    anim = anim_7;
    timeout = 3000;
    break;
  case 8:
    anim = anim_8;
    timeout = 3000;
    break;
  case 9:
    anim = anim_9;
    timeout = 3000;
    break;
  default:
    anim = anim_1;
    timeout = 3000;
}

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), timeout);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return <React.Fragment>{children}</React.Fragment>;
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ maxHeight: 250 }}
        src={anim}
        alt="Launch Screen Animation"
      />
    </div>
  );
};

export default Layout;
