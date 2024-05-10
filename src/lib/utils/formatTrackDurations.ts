interface FormatTrackDurationProps {
  hours: string;
  minutes: string;
  seconds: string;
}

const formatTrackDuration = ({ hours, minutes, seconds }: FormatTrackDurationProps): string =>
  `${hours === '0' ? '' : hours.padStart(2, '0') + ':'}${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;

export { formatTrackDuration };
