// winampPlayer.js

// Load Webamp if it isn't already loaded
const loadWebamp = async () => {
  if (!window.Webamp) {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/webamp@1.4.0/built/webamp.bundle.min.js";
    script.async = true;
    script.onload = initializeWebamp;
    document.head.appendChild(script);
  } else {
    initializeWebamp();
  }
};

// Initialize Webamp instance
const initializeWebamp = () => {
  const Winamp = window.Webamp;
  const webamp = new Winamp({
    initialTracks: [
      {
        metaData: { artist: "AK1R4S4T0H", title: "PAST.mp3" },
        url: "https://raw.githubusercontent.com/AK1R4S4T0H/Music/main/PAST.mp3"
      },
      {
        metaData: { artist: "AK1R4S4T0H", title: "More Soviet SynthPop sung by AI, Music BY ME" },
        url: "https://raw.githubusercontent.com/AK1R4S4T0H/Music/main/dark.mp3"
      },
      {
        metaData: { artist: "AK1R4S4T0H", title: "And Another One, AI sung" },
        url: "https://raw.githubusercontent.com/AK1R4S4T0H/Music/main/SovietSynth1.mp3"
      },
      {
        metaData: { artist: "AK1R4S4T0H", title: "Тень и лёд Shadow and Ice, AI sung" },
        url: "https://raw.githubusercontent.com/AK1R4S4T0H/Music/main/ShadowAndIce.mp3"
      },
      {
        metaData: { artist: "AK1R4S4T0H", title: "Then you make this kind of music, NO AI" },
        url: "https://raw.githubusercontent.com/AK1R4S4T0H/Music/main/SEGAfish.mp3"
      },
      {
        metaData: { artist: "AK1R4S4T0H", title: "Some ATMOSPHERIC JUNGLE, NO AI" },
        url: "https://raw.githubusercontent.com/AK1R4S4T0H/Music/main/JUNGLE9.mp3"
      },
      {
        metaData: { artist: "AK1R4S4T0H", title: "Whatever this is, NO AI" },
        url: "https://raw.githubusercontent.com/AK1R4S4T0H/Music/main/Whispers.mp3"
      },
      {
        metaData: { artist: "AK1R4S4T0H", title: "This ONE has some AI help again, It is Ridiculous" },
        url: "https://raw.githubusercontent.com/AK1R4S4T0H/Music/main/Bubblehead.mp3"
      },
      {
        metaData: { artist: "AK1R4S4T0H", title: "I made this to resemble 1990s Racing video game music, NO AI" },
        url: "https://raw.githubusercontent.com/AK1R4S4T0H/Music/main/SlipStream.mp3"
      }
    ],
      initialSkins: [
          {
            url: "https://raw.githubusercontent.com/AK1R4S4T0H/Music/main/ASUKA.wsz",
            name: "asuka mercury",
          }]
    
  });
  webamp.renderWhenReady(document.getElementById("winamp-container"));
};

// Call the function to load Webamp and initialize the player
loadWebamp();
