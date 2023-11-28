const IntroVideo = () => {
  return (
    <div className="bg-video">
      <video src={require('./video/video.mp4')} className="bg-video__content" autoPlay muted loop>
      </video>
    </div>
  );
};

export default IntroVideo;
