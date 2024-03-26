import React, { useEffect, useState } from "react";
import front from "./premierplan .png";
import midle from "./deuxiemeplan.png";
import background from "./troisiemeplan.png";
import "./Parallax.css";

export default function Parallax() {
  const [offset, setOffset] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    if (window.scrollY > 146) {
      // console.log("true", offset);
      setStop(true);
    } else {
      // console.log("false", offset);
      setStop(false);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
 
  return (
    <>
      <section className="parallax">
        <img
          src={background}
          className="parallax"
          alt="3"
          // style={{ top: `${offset * 1.5}px` }}
          // style={stop > 290 ? {marginTop: `${offset}px`} : `${offset * 1.5}px`}
        />
        <img
          src={midle}
          className="parallax"
          alt="2"
          // style={{ top: `${offset * -0.5}px` }}
          style={{ top: !stop ? `${offset * -0.5}px` : "-74px"}}
        />
        <img
          src={front}
          className="parallax"
          alt="1"
          style={{ top: !stop ? `${offset * -1}px` : "-148px" }}
        />
        
      </section>

      <p style={{ top: !stop ? `${offset * -1}px` : "-223px" }}>
        lorema df asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj lorema df
        asldfka;lskdfj;a lskdjf;alskjdf; askjfd ajlk lkj
      </p>
    </>
    // </div>
  );
}
