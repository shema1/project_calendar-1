const redlineElem = document.querySelector('.redline');
const widthTableSectionElem = document.querySelector('.table-sections__section').offsetWidth;

let correctIndent;
const getCorrectIndent = () => {

    const dayOfweek = new Date().getDay() - 1;

    dayOfweek == 0 ? correctIndent = 0 : correctIndent = dayOfweek;

};

getCorrectIndent();



const setTimeRedline = () => {
    let result;
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const minutesInHours = now.getHours() * 60 + minutes;

    hours < 1 ? result = minutes : result = minutesInHours;

    return result;
};

const moveRedline = () => {
    redlineElem.style.top = `${setTimeRedline() + 154}px`;
    redlineElem.style.left = `${widthTableSectionElem * correctIndent + 70}px`;
};

moveRedline();


setInterval(moveRedline, 10000);