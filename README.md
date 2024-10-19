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
     musicTracks.forEach((item) => {
       item.tracks.forEach(itm => {
         itm.id = 1;
       });
    
       console.log(item.tracks);
     });
   });
  ```
   
## Author

Adebayo Muis 