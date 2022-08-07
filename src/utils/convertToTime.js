// slightly different than version used in @cassette/player -
// minutes are always shown as 2 digits regardless of whether
// there is an hour display or not.
export default function convertToTime(number) {
  const hours = Math.floor(number / (60 * 60));
  const mins = Math.floor(number / 60) - hours * 60;
  const secs = (number % 60).toFixed();
  let time = hours > 0 ? `${hours}:` : '';
  time += `${mins < 10 ? '0' : ''}${mins}:`;
  time += `${secs < 10 ? '0' : ''}${secs}`;
  return time;
}
