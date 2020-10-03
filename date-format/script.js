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
  
  var newDate = {
    "dayofweek": date.getDate(),
    "month": date.getMonth() + 1,
    "year": date.getFullYear(),
	"shortweek": SHORTWEEK[date.getDay()],
	"shortmonth": SHORTMONTH[date.getMonth()]
  }
  
  if (newDate.dayofweek == 1) {
    newDate.dayofweekpf = "1<sup><small>st</small></sup>"
  } else {
    if (newDate.dayofweek == 2) {
      newDate.dayofweekpf = "2<sup><small>ed</small></sup>"
    } else {
      if (newDate.dayofweek == 3) {
        newDate.dayofweekpf = "3<sup><small>rd</small></sup>"
      } else {
        newDate.dayofweekpf = newDate.dayofweek + "<sup><small>th</small></sup>"
      }
    }
  }
  
  return newDate
}


function formatDate(format) {
  var date = getDate()
  var output = format
  
  output=output.replace("%sd", date.shortweek)
  output=output.replace("%dd", date.dayofweek)
  output=output.replace("%dpf", date.dayofweekpf)
  output=output.replace("%mm", date.month)
  output=output.replace("%sm", date.shortmonth)
  output=output.replace("%y", date.year)
  return output
}
