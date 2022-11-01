import React from "react";
import '../App.css';


export default function Stars() {
  
  const ratingChanged = (newRating) => {
    console.log(`rating: ${newRating}⭐`)
  }
  return (
    <Stars
      count={5}
      color2={'#ffd700'}
      size={24}
      onChange={ratingChanged}
    />
  );
}

