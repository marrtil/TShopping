import * as React from "react";
import { useState, useEffect } from "react";
import StyledBody from "./styles/StyledBody";
import moomin1 from "../upload/moomin1.jpeg";
import moomin2 from "../upload/moomin2.jpeg";

const Body = () => {
  const [num, setNum] = useState<number>(0);
  const [thumbnail, setThumbnail] = useState<string[]>([moomin1, moomin2]);

  const prevBtn = () => {
    if (num == 0) {
      setNum(thumbnail.length - 1);
    } else setNum((prevNum) => prevNum - 1);
  };

  const nextBtn = () => {
    if (num == thumbnail.length - 1) {
      setNum(0);
    } else setNum((prevNum) => prevNum + 1);
  };

  useEffect(() => {
    const Effeter = setTimeout(nextBtn, 4000);
  }, [num]);

  return (
    <StyledBody>
      <div>
        <img src={thumbnail[num]}></img>
        <button id="btn1" onClick={prevBtn}>
          {"<"}
        </button>
        <button id="btn2" onClick={nextBtn}>
          &gt;
        </button>
      </div>
    </StyledBody>
  );
};

export default Body;
