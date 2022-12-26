import React from "react";

function ListingCard({ description, image, location, id, deleteClick, listings }) {

  function handleFavoriteClick(event){
    let star = event.target.innerText
    star === "☆" ?
      event.target.innerText = '★':
      event.target.innerText = '☆'
  }

  function handleDelete(event) {
    const idToDelete = event.target.parentNode.parentNode.id

    fetch(`http://localhost:6001/listings/${idToDelete}`, {
    method: "DELETE"
  })
  .then(r => r.json())
  .then(() => deleteClick(
    listings.filter(eachListing => eachListing.id !== idToDelete)
    ))

  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={`http://localhost:6001/${image}`} alt={description} />
      </div>
      <div className="details">
        {false ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
