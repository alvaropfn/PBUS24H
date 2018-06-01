function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}


function sucesso() {
  console.log('sucesso');
}

function hide(eID){
  let element = document.getElementById(eID);
  element.classList.add("hide")
  console.log(eID)
}


let map = document.getElementById("map");
let alertBar = document.getElementById('alertBar')
alertBar.isLarge = false;
let help = document.getElementById('help')
let alert = document.getElementById('alert')

function upAlertBar(){
  change()
}

function helpAction(){
  change()
  window.alert("sua localização foi enviada para a policia")
}

function change(){
  if(alertBar.isLarge){
    console.log("esticar")
    map.style.height="90%";
    alertBar.style.height="10%";
    
    alert.classList.remove('hide')
    help.classList.add('hide')
  }
  else{
    console.log('encolher')
    map.style.height="40%";
    alertBar.style.height="60%";

    alert.classList.add('hide')
    help.classList.remove('hide')
  }
  alertBar.isLarge = !alertBar.isLarge;
}
// var cssSelector = anime({
//   targets: '#alerBar',
//   translateY: -250
// });

