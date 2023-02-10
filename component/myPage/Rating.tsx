const RATINGS = [1, 2, 3, 4, 5];
import * as React from "react";
import StyledRating from "./StyledRating";
function Star({ selected = false, rating, onSelect, onHover }: any) {
  const className = `Rating-star ${selected ? "selected" : ""}`;
  const handleClick = onSelect ? () => onSelect(rating) : undefined;
  const handleMouseOver = onHover ? () => onHover(rating) : undefined;
  return (
    <span className={className} onClick={handleClick} onMouseOver={handleMouseOver}>
      ★
    </span>
  );
}
// selected값이 true 일 때 seleted 스타일을 추가

function Rating({ className, value = 0, onSelect, onHover, onMouseOut }: any) {
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
