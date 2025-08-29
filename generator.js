var heading = document.getElementById("heading");
var pfpURL = document.getElementById("profilePictureURL");
var nameSalutation = document.getElementById("nameSalutation");
var par = document.getElementById("paragraph");
var send = document.getElementById("senderName");
var bgimg = document.getElementById("backgroundImageURL");
var url = document.getElementById("url");

// Default values
const bdTitleDef = "Happy Birthday!";
const pfpDef = "assets/placeholder-pfp.jpg";
const nameDef = "Dear User!";
const wishDef = "Happy birthday to the best friend anyone could ask for! May your day be as amazing as you are.";
const senderDef = "From: Anon";
const bodyBgDef = "assets/background.jpg";

// set default values
heading.value = bdTitleDef;
pfpURL.value = pfpDef;
nameSalutation.value = nameDef;
par.value = wishDef;
send.value = senderDef;
bgimg.value = bodyBgDef; 

// text holders
var heading_text = heading.value;
var pfpURL_text = pfpURL.value;
var name_text = nameSalutation.value;
var par_text = par.value;
var send_text = send.value;
var bgimg_text = bgimg.value;

var finURL;

URLFinalizer();


heading.addEventListener('input', () => {
    heading_text = heading.value;
    URLFinalizer();
});

pfpURL.addEventListener('input', () => {
    pfpURL_text = pfpURL.value;
    URLFinalizer();
});

nameSalutation.addEventListener('input', () => {
    name_text = nameSalutation.value;
    URLFinalizer();
});

par.addEventListener('input', () => {
    par_text = par.value;
    URLFinalizer();
});

send.addEventListener('input', () => {
    send_text = send.value;
    URLFinalizer();
});

bgimg.addEventListener('input', () => {
    bgimg_text = bgimg.value;
    URLFinalizer();
});

function URLFinalizer(){
    finURL = `https://nethularankidu.github.io/birthday-wish/?title=${encodeURIComponent(heading_text)}&pfp=${encodeURIComponent(pfpURL_text)}&name=${encodeURIComponent(name_text)}&wish=${encodeURIComponent(par_text)}&sender=${encodeURIComponent(send_text)}&bg=${encodeURIComponent(bgimg_text)}`;
    url.innerHTML = finURL
}