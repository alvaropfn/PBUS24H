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

function unhide(eID){
  let element = document.getElementById(eID);
  element.classList.remove("hide")
  console.log(eID)
}

let map = document.getElementById("map");

let alertBar = document.getElementById('alertBar')
alertBar.isLarge = false;

let help = document.getElementById('help')

let alert = document.getElementById('alert')

let menuWrapper =  document.getElementById('menuWrapper')
menuWrapper.isVisible = false;

function upAlertBar(){
  changeAlertBar()
}

function helpAction(){
  changeAlertBar()
  window.alert("sua localização foi enviada para a policia")
}

function changeMenu(){
  if(menuWrapper.isVisible){
    console.log('desaparecer')
    var domNode = anime({
      targets: menuWrapper,
      translateX: "-50vw",
      easing: 'easeInOutQuad'
    });
  }else{
    console.log('aparecer')
    var domNode = anime({
      targets: menuWrapper,
      translateX: "50vw",
      easing: 'easeInOutQuad'
    });
  }
  menuWrapper.isVisible = !menuWrapper.isVisible;
}

function changeAlertBar(){
  if(alertBar.isLarge){
    console.log("esticar")
    map.style.height="87vh";
    alertBar.style.height="8vh";
    
    alert.classList.remove('hide')
    help.classList.add('hide')
  }
  else{
    console.log('encolher')
    map.style.height="45vh";
    alertBar.style.height="55vh";

    alert.classList.add('hide')
    help.classList.remove('hide')
  }
  alertBar.isLarge = !alertBar.isLarge;
}

function changeAlertList(lat = -5.767392, lan = -35.257419){
  var mapdiv = document.getElementById('map');
  var map = new google.maps.Map(mapdiv, {
    center: {
      lat: lat,
      lng: lan
    },
    zoom: 18
  });
}