const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
        <div className="my-2 md:my-0">
            <button className="bg-white text-black p-2  px-4 md:px-8 rounded-md text-xs hover:bg-opacity-80 "> ▶  Play</button>
            <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-8 rounded-md text-xs bg-opacity-50"> More Info</button>
        </div>
    </div>
  );
};

export default VideoTitle;