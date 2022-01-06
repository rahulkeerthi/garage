// TODO: Build an awesome garage!
const GARAGE = 'chopshop';

const garageContainer = document.querySelector('.cars-list');

// GET REQUEST TO GET ALL CARS ENDPOINT
const apiUrl = `https://wagon-garage-api.herokuapp.com/${GARAGE}/cars`;

const fetchAllCars = () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then((dataArray) => {
      // What is in the dataArray owbject?
      // What is the "template" I want to use to insert the car in the DOM?
      // Where do we put the data in?
      // How do I put the right data in the card?
      // ITERATE THROUGH ARRAY OF CARS TO ADD CARDS TO CONTAINER
      dataArray.forEach((car) => {
        const carCard = `<div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${car.model}" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong> ${car.owner}</p>
        <p><strong>Plate:</strong> ${car.plate}</p>
      </div>
    </div>`;
        garageContainer.insertAdjacentHTML('beforeend', carCard);
      });
    });
};
fetchAllCars();

//  TELL CHRISTIAN HOW TO SCALE

// HOW DO I KNOW WHEN THE FORM IS SUBMITTED
// HOW DO I PREPARE THE DATA TO BE SENT TO THE API

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // HOW DO I EXTRACT ALL THE DATA

  const carToCreate = {};
  const inputBrand = form.querySelector('#brand');
  carToCreate.brand = inputBrand.value;
  const inputModel = form.querySelector('#model');
  carToCreate.model = inputModel.value;
  const inputPlate = form.querySelector('#plate');
  carToCreate.plate = inputPlate.value;
  const inputOwner = form.querySelector('#owner');
  carToCreate.owner = inputOwner.value;
  // console.log(carToCreate);
  // How do I send this data to the server?
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carToCreate),
  }).then(() => {
    garageContainer.innerHTML = '';
    fetchAllCars();
  });

  // How do I refetch all the cars?
  // I should convert the fetch of all cars into a function that I can use here
});
