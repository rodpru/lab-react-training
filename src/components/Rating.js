import React from 'react';

const Rating = (props) => {
  let rating = props.children;
  let starRating = Math.round(rating);
  if (starRating === 0) {
    starRating = '☆☆☆☆☆';
  }
  if (starRating === 1) {
    starRating = '★☆☆☆☆';
  }
  if (starRating === 2) {
    starRating = '★★☆☆☆';
  }
  if (starRating === 3) {
    starRating = '★★★☆☆';
  }
  if (starRating === 4) {
    starRating = '★★★★☆';
  }
  if (starRating === 5) {
    starRating = '★★★★★';
  }
  return (
    <div>
      <p>{starRating}</p>
    </div>
  );
};

export default Rating;
