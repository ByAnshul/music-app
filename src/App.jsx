import { useState, useRef, useEffect } from "react";
import "./App.css";
import Play from "./play";

const songs = [
  "/audio/Ishq.mp3",
  "/audio/7-years-.mp3",
  "/audio/Apna Bana le.mp3",
  "/audio/Choo Loo.mp3",
  "/audio/Die with a smile.mp3",
  "/audio/end-of-beginning.mp3",
  "/audio/Espresso.mp3",
  "/audio/Hass Hass.mp3",
  "/audio/In Dino.mp3",
  "/audio/Kaise Ab Kahein.mp3",
  "/audio/Moral of the Story.mp3",
  "/audio/Sweater Weather.mp3",
  "/audio/12saal.mp3",
  "/audio/Way down We Go.mp3",
  "/audio/raanjhanaa.mp3"
];


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);  // Track song progress
  const audioRef = useRef(null);

  // Play/Pause Handler
  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!play);
  };

  // Update progress as the song plays
  const updateProgress = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  // Seek function
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  // Next Song
  const handleNext = () => {
    if (!audioRef.current) return;
    let nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setPlay(true);
  };
  
  const handlePrev = () => {
    if (!audioRef.current) return;
    let prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    setPlay(true);
  };
  
  // Effect to update audio source when currentIndex changes
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = songs[currentIndex];
    audioRef.current.load();
    if (play) {
      audioRef.current.play();
    }
  }, [currentIndex, play]);
  

  return (
    <div style={{ height: "70vh", marginTop: "15vh", marginBottom: "15vh", backgroundColor: "grey", padding: "2rem 4rem", borderRadius: "2rem" }}>
      <h1 style={{ color: "#001d3d" }}>Music ✌️</h1>

      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src={songs[currentIndex]} 
        onTimeUpdate={updateProgress} 
        onEnded={handleNext}
      />

      <Play
        play={play}
        handlePlayPause={handlePlayPause}
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentSong={songs[currentIndex].split("/").pop().replace(".mp3", "").toUpperCase()}
        progress={progress}
        handleSeek={handleSeek}
      />
      
      <p style={{fontSize:"1.2rem" , color:"white" , fontWeight:"normal" ,marginTop:"2.5rem"}}>Created By Anshul</p>
    </div>
  );
}

export default App;
