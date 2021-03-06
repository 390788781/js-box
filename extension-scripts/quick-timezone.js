// Timezones: https://www.iana.org/time-zones
var options = [
  {
    flag: "π¨π³",
    code: "Asia/Shanghai"
  },
  {
    flag: "πΊπΈ",
    code: "America/New_York"
  },
  {
    flag: "πΊπΈ",
    code: "Pacific/Honolulu"
  }
]

var locale = $device.info.language || "en-US"
$ui.menu({
  items: options.map(function(item) {
    var date = new Date()
    return item.flag + " " + date.toLocaleString(locale, { timeZone: item.code })
  })
})