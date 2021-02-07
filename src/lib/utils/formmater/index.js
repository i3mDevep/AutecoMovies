import moment from "moment";
export const year = (date) => moment(date).format("YYYY");

export function timeConvert(n) {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return (
    Math.floor(hours) + " hour " + rminutes + " minutes"
  );
}
