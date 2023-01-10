import * as React from "react";
import { useState, useEffect } from "react";
import StyledBody from "./styles/StyledBody";
import moomin1 from "../upload/moomin1.jpeg";
import moomin2 from "../upload/moomin2.jpeg";

const Banner = () => {
  const [num, setNum] = useState<number>(0);
  const [thumbnail, setThumbnail] = useState<string[]>([moomin1, moomin2]); //지금은 state인데 어떻게될지모름
  const [stop, setStop] = useState<boolean>(false);

  const prevBtn = () => {
    if (num == 0) {
      setNum(thumbnail.length - 1);
    } else setNum((prevNum) => prevNum - 1);
    setStop(true);
  };

  const nextBtn = () => {
    if (num == thumbnail.length - 1) {
      setNum(0);
    } else setNum((prevNum) => prevNum + 1);
    setStop(true);
  };

  useEffect(() => {
    console.log(num);
    if (stop) {
      return;
    }
    setTimeout(() => {
      if (num == thumbnail.length - 1) {
        setNum(0);
      } else if (num >= thumbnail.length) setNum(thumbnail.length - 1);
      else setNum((prevNum) => prevNum + 1);
    }, 4000);
  }, [num, stop]);

  //▶︎,⏸︎

  return (
    <div>
      <img src={thumbnail[num]} id="thumb"></img>
      <button id="btn1" onClick={prevBtn}>
        {"<"}
      </button>
      <button
        id="btn2"
        onClick={() => {
          stop ? setStop(false) : setStop(true);
        }}
      >
        {stop ? "▶︎" : "⏸︎"}
      </button>
      <button id="btn3" onClick={nextBtn}>
        &gt;
      </button>
    </div>
  );
};

export default Banner;
