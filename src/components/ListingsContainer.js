import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  function initial() {
    fetch("http://localhost:6001/listings/")
  .then(r => r.json())
  .then(data => setListings(data))
  }

  useEffect(() => {
    initial()
  }, [])

  function handleDeleteClick(deleteList){
    // Delete Fetch in Listing card
    setListings(deleteList)
    initial()
  }

  if(listings === []) {
    return <h1>LOADING</h1>
  }

  const listingsOfCards = listings.map(eachListing => {
    return (
      <ListingCard 
        listings={listings}
        key={eachListing.id}
        id={eachListing.id}
        description={eachListing.description}
        image={eachListing.image}
        location={eachListing.location}
        deleteClick={handleDeleteClick}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingsOfCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
