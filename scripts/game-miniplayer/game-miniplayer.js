const miniplayer = document.getElementById('game-miniplayer');
const gmIframe = document.getElementById('gm-miniplayer-iframe');
const gmHeader = document.querySelector('div#game-miniplayer div.miniplayer-controlbar a');

let gmIframeLoaded = false;
let lastScroll = 0;

function gmIframeLoad() {
    gmIframeLoaded = true;
    // console.log('miniplayer loaded!'); // for debugging
}

gmIframe.onload = gmIframeLoad;

function activateMiniplayer(url) {
    gmHeader.setAttribute('href', url);
    openMiniplayer();
    setTimeout(() => {
        document.querySelector('main').style.display = 'none';
        openIframeUrl(url);
    }, 800);
}

function openMiniplayer() {
    lastScroll = document.documentElement.scrollTop;
    miniplayer.classList.remove('gm-closed');
    miniplayer.classList.add('gm-opened');
}

function closeMiniplayer() {
    document.querySelector('main').style.display = '';
    document.documentElement.scrollTop = lastScroll;
    turnOffIframe();
    setTimeout(() => {
        setIframeUrl('');
        miniplayer.classList.remove('gm-opened');
        miniplayer.classList.add('gm-closed');
    }, 300);
}

function setIframeUrl(url) {
    gmIframeLoaded = false;
    gmIframe.setAttribute('src', url);
    // gmIframe.contentWindow.location.reload();
}

function openIframeUrl(url) {
    gmIframe.onload = () => {
        // console.log('iframe loaded, opening...'); // for debugging
        turnOnIframe();
        gmIframe.onload = gmIframeLoad;
    }
    setIframeUrl(url);
}

function turnOnIframe() {
    gmIframe.classList.remove('gm-iframe-off');
    gmIframe.classList.add('gm-iframe-on');
}

function turnOffIframe() {
    gmIframe.classList.add('gm-iframe-off');
    gmIframe.classList.remove('gm-iframe-on');
}