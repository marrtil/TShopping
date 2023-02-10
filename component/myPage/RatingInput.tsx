import { useState } from "react";
import Rating from "./Rating";
import * as React from "react";
import StyledRatingInput from "./StyledRatingInput";
function RatingInput({ name, value, onChange }: any) {
  const [rating, setRating] = useState(value);

  const handleSelect = (nextValue: any) => onChange(name, nextValue);
  // 클릭하면 그대로 고정.

  const handleMouseOut = () => setRating(value);
  // 마우스 떼면 초기화.

  return (
    <StyledRatingInput>
      <Rating
        className="RatingInput"
        value={rating}
        onSelect={handleSelect}
        onHover={setRating}
        onMouseOut={handleMouseOut}
      ></Rating>
    </StyledRatingInput>
  );
}
export default RatingInput;
