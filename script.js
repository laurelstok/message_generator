const words = new URLSearchParams(window.location.search);

const godOrGoddess = words.get('godOrGoddess');
const region = words.get('region');
const hero = words.get('hero');

function getRandNum(array){
    return Math.floor(Math.random() * array.length);
};

const storyBegin = ['On an early morning strole',
    'After a long day of work', 
    'After a mid-morning snack',
    'Just before the early morning rays',
    'In the dead of night'
];

let start = storyBegin[getRandNum(storyBegin)];

const storyBody = ['Was confronted by an angy herd of Hippopotamouses. That were extra aggressive due to the drought',
    'Was forced to answer the riddle of the Sphinx.',
    'Came across an ornate box wedged amongst the trees at the edge of the river Inside were the cut up remains of Osiris.',
    'Was faced with the Lioness form of the goddess. She was charged with decimating a village and was currently rampaging out of control.',
    'Was tasked by the god with unifying all of Kemet.'
];

let body = storyBody[getRandNum(storyBody)];

const storyEnd = ['Was wrapped in linen to become the first mummy.',
    'Answered her questions three and was granted with tremendous knowledge.',
    'Called upon the river god Sobek for protection.',
    'Colored the beer red thus satiating the goddess blood lust and making her drunk.',
    'Took up the Crook and Flail and gathered up great armies.'
];

let end = storyEnd[getRandNum(storyEnd)];

function createStory() {
    function getRandNum(array){
        return Math.floor(Math.random() * array.length);
    }
    let start = storyBegin[getRandNum(storyBegin)];
    let body = storyBody[getRandNum(storyBody)];
    let end = storyEnd[getRandNum(storyEnd)];

    const fullStory = `${start}, our hero ${hero} Ran into ${godOrGoddess}. ${body} And in response ${end}.`;
    console.log(fullStory);
    return fullStory;
};

function addStory() {
    document.getElementById("story").innerHTML +=
    `<p>
        ${start}, our hero ${hero} ran into ${godOrGoddess}. ${body} And in response ${end}.
    </p>`;
}