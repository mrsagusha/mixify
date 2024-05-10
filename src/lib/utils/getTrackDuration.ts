const getTrackDuration = (duration: number) => {
  const durationInSeconds = Math.floor(duration / 1000);

  let seconds = (durationInSeconds % 60).toString();
  let minutes = Math.floor((durationInSeconds / 60) % 60).toString();
  let hours = Math.floor((durationInSeconds / 60 / 60) % 60).toString();

  return { hours, minutes, seconds };
};

export { getTrackDuration };
