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

const storyBody = ['were confronted by an angy herd of Hippopotami. That were extra aggressive due to the drought.',
    'were forced to answer the riddle of the Sphinx.',
    'came across an ornate box wedged amongst the trees at the edge of the river Inside were the cut up remains of Osiris.',
    'were faced with the Lioness form of the goddess. She was charged with decimating a village and was currently rampaging out of control.',
    'were tasked with unifying all of Kemet.'
];

let body = storyBody[getRandNum(storyBody)];

const storyEnd = ['they wrapped Osiris in linen to become the first mummy.',
    'answered her questions three and were granted with tremendous knowledge.',
    'called upon the river god Sobek for protection.',
    'colored the beer red thus satiating the goddess blood lust and making her drunk.',
    'took up the Crook and Flail and gathered up great armies.'
];

let end = storyEnd[getRandNum(storyEnd)];


function addStory() {
    document.getElementById("story").innerHTML +=
    `<p>
        ${start} inside the ${region}, our hero the ${hero} was interrupted by ${godOrGoddess}. Together, the ${hero} and ${godOrGoddess}, ${body} And in response, ${end}
    </p>`;
}