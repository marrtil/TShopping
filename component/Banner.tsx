import * as React from "react";
import { useState, useEffect } from "react";
import moomin1 from "../upload/moomin1.jpeg";
import moomin2 from "../upload/moomin2.jpeg";
import moomin3 from "../upload/moomin3.jpeg";
import moomin4 from "../upload/moomin4.jpeg";

const Banner = () => {
  const [num, setNum] = useState<number>(0);
  const [thumbnail, setThumbnail] = useState<string[]>([
    moomin1,
    moomin2,
    moomin3,
    moomin4,
  ]); //지금은 state인데 어떻게될지모름
  const [stop, setStop] = useState<boolean>(false);

  const prevBtn = () => {
    if (num <= 0) {
      setNum(thumbnail.length - 1);
    } else setNum((prevNum) => prevNum - 1);
    setStop(true);
  };

  const nextBtn = () => {
    if (num >= thumbnail.length - 1) {
      setNum(0);
    } else setNum((prevNum) => prevNum + 1);
    setStop(true);
  };

  useEffect(() => {
    if (stop) {
      clearTimeout(0);
      clearTimeout(1);
      clearTimeout(2);
      return;
    } else
      setTimeout(() => {
        if (num >= thumbnail.length - 1) {
          setNum(0);
        } else {
          setNum(num + 1);
        }
      }, 4000);
  }, [num, stop]);

  //▶︎,⏸︎

  return (
    <div id="banner">
      <img src={thumbnail[num]} id="thumb"></img>
      <div id="buttons">
        <button onClick={prevBtn}>{"<"}</button>
        <button
          id="btn2"
          onClick={() => {
            stop ? setStop(false) : setStop(true);
          }}
        >
          {stop ? "▶︎" : "||"}
        </button>

        <button onClick={nextBtn}>&gt;</button>
      </div>
    </div>
  );
};

export default Banner;
