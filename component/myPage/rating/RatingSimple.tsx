import { RATINGS } from "./Rating";
import * as React from "react";
import StyledRating from "../styles/StyledRating";

function Star({ selected = false, rating }: any) {
  const className = `Rating-star ${selected ? "selected" : ""}`;
  return <span className={className}>★</span>;
}

function RatingSimple({ value = 0 }: { value: number }) {
  return (
    <StyledRating>
      <div>
        {RATINGS.map((rating) => (
          <Star key={rating} selected={value >= rating} rating={rating} />
        ))}
      </div>
    </StyledRating>
  );
}

export default RatingSimple;
