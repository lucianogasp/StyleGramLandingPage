
import render_nossaComunidade from './pages/nossa-comunidade/nossa-comunidade.js';

window.location.hash = '#nossa-proposta';

window.addEventListener('DOMContentLoaded', () => {
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
    const meetingButton = document.getElementById('meetingButton');
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const text4 = document.getElementById('text4');
    const text5 = document.getElementById('text5');
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const video3 = document.getElementById('video3');
    const video4 = document.getElementById('video4');
    const video5 = document.getElementById('video5');
    
    const overlayContent = [
        { text: text1, video: video1 },
        { text: text2, video: video2 },
        { text: text3, video: video3 },
        { text: text4, video: video4 },
        { text: text5, video: video5 }
    ]

    var counter = 0;
    
    arrowRight.addEventListener('click', () => {
        counter++;
        let currentText = overlayContent[counter - 1].text;
        let nextText = overlayContent[counter].text;
        let currentVideo = overlayContent[counter - 1].video;
        let nextVideo = overlayContent[counter].video;
        currentText.style = 'display: none';
        currentVideo.style = 'display: none';
        nextText.style = 'display: flex';
        nextVideo.style = 'display: flex';
        if (counter >= 1) {
            arrowLeft.style = 'visibility: visible';
        }
        if (counter === overlayContent.length - 1) {
            arrowRight.style = 'visibility: hidden';
            meetingButton.style = 'visibility: visible';
        }
    })
    
    arrowLeft.addEventListener('click', () => {
        counter--;
        let currentText = overlayContent[counter + 1].text;
        let nextText = overlayContent[counter].text;
        let currentVideo = overlayContent[counter + 1].video;
        let nextVideo = overlayContent[counter].video;
        currentText.style = 'display: none';
        currentVideo.style = 'display: none';
        nextText.style = 'display: flex';
        nextVideo.style = 'display: flex';
        if (counter <= overlayContent.length - 1) {
            arrowRight.style = 'visibility: visible';
            meetingButton.style = 'visibility: hidden';
        }
        if (counter === 0) {
            arrowLeft.style = 'visibility: hidden';
        }
    })

    window.addEventListener('hashchange', () => {
        switch(window.location.hash) {
            case "#nossa-comunidade":
                render_nossaComunidade();
                break;
            default:
                console.log('Deu ruim');
                console.log(window.location.hash);
        }
    })

})

