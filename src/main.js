// Simulating user input (demo input)
const userInputMood = "Anxious"; // You can change this to simulate different moods like 'Anxious'

// Fetching the JSON file (assuming the file is hosted on the same server)
fetch('moods.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const moods = data.moods;
    // Function to get tracks by mood from the fetched data
    function getTracksByMood(mood) {
      const moodObject = moods.find(item => item.mood.toLowerCase() === mood.toLowerCase());
      if (moodObject) {
        return moodObject.tracks;
      } else {
        return `Mood "${mood}" not found.`;
      }
    }

    // Get tracks for the user input mood
    const tracks = getTracksByMood(userInputMood);

    // Display the tracks
    if (Array.isArray(tracks)) {
      console.log(`Tracks for mood "${userInputMood}":`);
      tracks.forEach(track => {
        console.log(`Track Name: ${track.name}`);
        console.log(`Media URL: ${track.media_url}`);
        console.log("----------");
      });
    } else {
      console.log(tracks); // Mood not found
    }
  })
  .catch(error => {
    console.error("Error fetching the JSON file:", error);
  });