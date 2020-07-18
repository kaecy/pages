var SHORTMONTH = [
	"Jan", "Feb", "Mar", "Apr",
	"May", "Jun", "Jul", "Aug",
	"Sep", "Oct", "Nov", "Dec"
]
var SHORTWEEK = [
	"Sun", "Mon", "Tue", "Wed",
	"Thu", "Fri", "Sat"
]
function getDate() {
  var date = new Date()
  
  return {
    "dayofweek": date.getDate(),
    "month": date.getMonth() + 1,
    "year": date.getFullYear(),
	"shortweek": SHORTWEEK[date.getDay()],
	"shortmonth": SHORTMONTH[date.getMonth()]
  }
}


function formatDate(format) {
  var date = getDate()
  var output = format
  
  output=output.replace("sd", date.shortweek)
  output=output.replace("d", date.dayofweek)
  output=output.replace("mm", date.month)
  output=output.replace("sm", date.shortmonth)
  output=output.replace("y", date.year)
  return output
}
