let cl = console.log;

let places = [
   {
       placeName: 'Statue of unity',
       info: "The Statue of Unity is the world's tallest statue, with a height of 182 metres , located near Kevadia in the state of Gujarat, India."
   },
   {
       placeName: 'Laxmi Vilas Palace',
       info: "The Lakshmi Vilas Palace in Vadodara, Gujarat, India, was constructed by the Gaekwad family, a prominent Maratha family."
   },
   {
     placeName: 'Somnath temple',
     info: "The Somnath temple, also called Somanātha temple or Deo Patan, is a Hindu temple located in Prabhas Patan, Veraval in Gujarat, India."
   },
   {
     placeName: 'Sabarmati Riverfront',
     info: "Sabarmati Riverfront is a waterfront being developed along the banks of Sabarmati river in Ahmedabad, India. Proposed in the 1960s, the construction began in 2005."
   },
   {
     placeName: 'Gandhi Ashram',
     info: "Sabarmati Ashram is located in the Sabarmati suburb of Ahmedabad, Gujarat, adjoining the Ashram Road, on the banks of the River Sabarmat"
   },
   {
     placeName: 'Kankaria Lake',
     info: "Kankaria Lake is the second largest lake in Ahmedabad, Gujarat, India. It is located in the south-eastern part of the city, in the Maninagar area."
   }
];

let placesData = ``;
places.forEach((place) => {
     placesData += 
                    `
                           <div class="col-md-3 col-sm-6">
                              <div class="card mb-4">
                                 <div class="card-header">
                                     <h2 class="m-0">${place.placeName}</h2>
                                 </div>
                                 <div class="card-body">
                                     <p class="m-0">${place.info}</p>
                                 </div>
                                 <div class="card-footer d-flex justify-content-between">
                                     <button type="button" class="btn btn-success">Edit</button>
                                     <button type="button" class="btn btn-danger">Delete</button>
                                 </div>
                           </div>
                       </div>
                    `
});

document.getElementById('placesInfo').innerHTML = placesData;