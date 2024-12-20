function Rating({ rating }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {  //dolu yıldız
    stars.push(
      <span className="glyphicon glyphicon-star" key={i}>
        {" "}
      </span>
    );
  }
  for (let i = rating; i < 5; i++) {  //boş yıldız
    stars.push(
      <span className="glyphicon glyphicon-star-empty" key={i}>
        {" "}
      </span>
    );
  }
  return stars;
}
export default Rating;
