setTimeout(() => {
  var audio = new Audio("https://cdn.blerp.com/normalized/3b295720-f1c0-11e8-b17c-dd2e9bdb6825");
  audio.play();
  let gifLink = "https://media3.giphy.com/media/3ohjV8JRMcNVGYK10I/giphy.gif?cid=ecf05e47k0gehaolzs40y3jlu1a0ntrcuguxw6yfbmekbtj4&rid=giphy.gif";
  image = document.createElement("img")
  image.src = gifLink
  document.body.appendChild(image)
  image.style = "position: fixed;height: 100%;z-index: 10000;top:0;";
  setTimeout(() => {
    image.style = "display:none;"
  }, 2000)
  setInterval(() => {
    var audio = new Audio("https://cdn.blerp.com/normalized/3b295720-f1c0-11e8-b17c-dd2e9bdb6825");
    audio.play();
    let gifLink = "https://media3.giphy.com/media/3ohjV8JRMcNVGYK10I/giphy.gif?cid=ecf05e47k0gehaolzs40y3jlu1a0ntrcuguxw6yfbmekbtj4&rid=giphy.gif";
    image = document.createElement("img")
    image.src = gifLink
    document.body.appendChild(image)
    image.style = "position: fixed;height: 100%;z-index: 10000;top:0;";
    setTimeout(() => {
      image.style = "display:none;"
    }, 2000)
  }, 60000)
}, 15000)