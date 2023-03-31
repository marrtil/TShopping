export const RATINGS = [1, 2, 3, 4, 5];
import * as React from "react";
import StyledRating from "../styles/StyledRating";

interface Star {
  selected: boolean;
  rating: number;
  onSelect: (value: number) => void;
  onHover: (value: number) => void;
}

function Star({ selected = false, rating, onSelect, onHover }: Star) {
  const className = `Rating-star ${selected ? "selected" : ""}`;
  const handleClick = onSelect ? () => onSelect(rating) : undefined;
  const handleMouseOver = onHover ? () => onHover(rating) : undefined;
  return (
    <span className={className} onClick={handleClick} onMouseOver={handleMouseOver}>
      ★
    </span>
  );
}

interface Rating {
  className: string;
  value: number;
  onSelect: (value: number) => void;
  onHover: (value: number) => void;
  onMouseOut: () => void;
}

function Rating({ className = "", value = 0, onSelect, onHover, onMouseOut }: Rating) {
  return (
    <StyledRating>
      <div className={className} onMouseOut={onMouseOut}>
        {RATINGS.map((rating) => (
          <Star key={rating} selected={value >= rating} rating={rating} onSelect={onSelect} onHover={onHover} />
        ))}
      </div>
    </StyledRating>
  );
}

export default Rating;
