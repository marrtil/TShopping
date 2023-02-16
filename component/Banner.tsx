import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

const baseURL = "https://tshopping-app.herokuapp.com";

const Banner = () => {
  const [num, setNum] = useState<number>(0);
  const [thumbnail, setThumbnail] = useState<string[]>([
    `${baseURL}/image/moomin1.jpeg`,
    `${baseURL}/image/moomin2.jpeg`,
    `${baseURL}/image/moomin3.jpeg`,
    `${baseURL}/image/moomin4.jpeg`,
  ]); //지금은 state인데 어떻게될지모름
  const [stop, setStop] = useState<boolean>(false);
  const thumbImage = useMemo<React.CSSProperties>(() => {
    const thumb = {
      backgroundImage: `url(${baseURL}/image/moomin${num + 1}.jpeg)`,
    };
    return thumb;
  }, [num]);

  const link: string[] = [
    "/productList",
    "/productType/new",
    "/productType/major",
    "/productList",
  ];

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
    <div id="banner" style={thumbImage}>
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
      <Link to={link[num]}>
        <div className="imageLink"></div>
      </Link>
    </div>
  );
};

export default Banner;
