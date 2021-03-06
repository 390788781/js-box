let regions = [
  { name: "π¨π³ δΈ­ε½", code: "cn" },
  { name: "π­π° ι¦ζΈ―", code: "hk" },
  { name: "πΊπΈ ηΎε½", code: "us" },
  { name: "π¬π§ θ±ε½", code: "gb" },
  { name: "π―π΅ ζ₯ζ¬", code: "jp" },
]

let version = parseInt($device.info.version.split(".")[0]);
let prefix = version >= 13 ? "itms-apps://apps.apple.com/" : "https://itunes.apple.com/";

$ui.menu({
  items: regions.map(function(item) {
    return item.name;
  }),
  handler: function(title, idx) {
    $app.openURL(prefix + regions[idx].code + "/app/");
  }
});