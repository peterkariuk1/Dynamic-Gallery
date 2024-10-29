import {destinations} from './destinations.js';
destinations.forEach((destination) => {

    const destinationHtml = `
<div class="image-grid-item">
    <div class="image-wrapper">
        <img class="grid-item-image" src="${destination.image}">
    </div>
 <div class="grid-item-details">
    <div class="top-details">
        <p class="trip-duration">${destination.tripDuration}-DAY TRIP</p>
        <p class="trip-location">
            ${destination.name},
            <span>${destination.location}</span>
        </p>
        <p class="location-description">
            ${destination.description}
        </p>
    </div>
    <div class="price-text">
        <div>From</div>
        <div class="price-image">
            <span>Ksh. ${destination.price.toLocaleString()}</span>
        <div class="image-background">
            <img src="./images/icons8-right-arrow-26.png">
        </div>
        </div>
    </div>
 </div>
</div>
`;
console.log(destination.location)
    document.querySelector('.images-grid')
        .innerHTML += destinationHtml;
});


