const redlineElem = document.querySelector('.redline');



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
    redlineElem.style.top = `${setTimeRedline() + 75}px`;
};

moveRedline();


setInterval(moveRedline, 1000);