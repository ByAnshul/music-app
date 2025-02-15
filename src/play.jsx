import React from 'react';

function Play({ play, handlePlayPause, handleNext, handlePrev, currentSong, progress, handleSeek }) {
    return (
        <>
            <div className="border w-[350px] glass rounded-xl flex">
                <img
                    src="https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g"
                    alt="music"
                    width="150"
                    height="150"
                    className="rounded-2xl p-2"
                />

                <div className="px-4 py-4">
                    <div className="font-outerSans py-3">
                        <p className="text-xs" style={{ color: "black", fontSize: "1.2rem" , fontWeight:"bold"}}>{currentSong}</p>
                    </div>

                    {/* Progress Bar */}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleSeek}
                        className="w-full h-2 bg-gray-3000 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        style={{ width:"10rem", 
        background: `linear-gradient(to right, #3B82F6 ${progress}%, #000 ${progress}%)`,
        cursor: "pointer" // Light blue progress
    }}
                    />

                    <div style={{marginTop:"10px"}}className="flex w-full justify-evenly">
                        {/* Previous Button */}
                        <button className="fill-[#ffffff4d] mx-2 border rounded-full border-gray-500 p-1"
                            style={{ backgroundColor: "#3B82F6", color: "white" }}
                            onClick={handlePrev}>
                            <svg width="30" height="30" viewBox="0 0 24 24">
                                <path d="M11 16.07V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.56.4-.56 1.24 0 1.63l5.77 4.07c.67.47 1.58 0 1.58-.81zm1.66-3.25 5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z"></path>
                            </svg>
                        </button>

                        {/* Play/Pause Button */}
                        <button className="fill-white border rounded-full border-gray-500 p-1"
                            style={{ color: 'white', backgroundColor: " #FF4E45" }}
                            onClick={handlePlayPause}>
                            {play ? (
                                <svg width="30" height="30" viewBox="0 0 24 24">
                                    <path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"></path>
                                </svg>
                            ) : (
                                <svg width="30" height="30" viewBox="0 0 24 24">
                                    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                                </svg>
                            )}
                        </button>

                        {/* Next Button */}
                        <button className="fill-[#ffffff4d] mx-2 border rounded-full border-gray-500 p-1"
                            style={{ backgroundColor: "#3B82F6", color: "white" }}
                            onClick={handleNext}>
                            <svg width="30" height="30" viewBox="0 0 24 24">
                                <path d="m5.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Play;
