# Free relaxation tracks

This repository is created to provide developers with free JSON file with media url of different relaxation tracks for different categories to use in their projects.


### Getting started

1. **Fetch JSON file:**
   ```bash
   
   https://raw.githubusercontent.com/Charmingdc/Relaxation-tracks/main/src/moods.json
   ```
2. **Generate unique id for each track:** 
   ```javascript
   
   fetch('https://raw.githubusercontent.com/Charmingdc/Relaxation-tracks/main/src/moods.json')
   .then(response => {
     return response.json(); 
   }).then(data => {
     
     const musicTracks = data.moods;
     
     // lopping through all moods tracks
     musicTracks.forEach((item) => {
       
      // loop through all moods tracks properties
       item.tracks.forEach(itm => {
         const randomNum = Math.floor(Math.random() * 1000000); // generate a random number
         
         itm.id = randomNum; // set randomNum as each track's unique id
       });
     });
     
     console.log(data);
   });
   ```

Here a random number is generated for each track, thus serving as their unique Id's.


## Author

Adebayo Muis 