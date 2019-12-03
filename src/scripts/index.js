const tableSectionsElem = document.querySelector('.table-sections');

const generateNumbersRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    };

    return result;
};


const getSectionBlock = () => generateNumbersRange(1, 7)
    .map(sectionNumber => `
        <div 
            class="table-sections__section" 
            data-block-number='${sectionNumber}'
        ></div>`)
    .join('');


const getSectionLines = () => {
    const blocksString = getSectionBlock();

    return generateNumbersRange(1, 24)
        .map(lineNumber => `
            <div 
                class="table-sections__line" 
                data-line-number='${lineNumber}'
            >${blocksString}</div>`).join('');
};

const renderTable = () => {
    tableSectionsElem.innerHTML = getSectionLines();
};

renderTable();


const tableLinesElem = document.querySelector('.lines');

const getLinesBlocks = () => generateNumbersRange(1, 24)
    .map(blockNumber => `
            <div 
                class="lines__blocks" 
                data-line-number='${blockNumber}'
            ></div>`)
    .join('');


const renderLines = () => {
    tableLinesElem.innerHTML = getLinesBlocks();
};

renderLines();



const tableTimesElem = document.querySelector('.times');

const getTimesBlocks = () => {
    const result = [];

    generateNumbersRange(1, 23)
        .map(blockNumber => {
            let setTime = '';
            blockNumber < 10 ? setTime = `0${blockNumber}` : setTime = blockNumber;

            result.push(`<div 
                    class="times__blocks" 
                    data-block-number='${blockNumber}'
                    ><span class="clock">${setTime}:00</span></div>`)
        });

    return result.join('');
};

const renderTableTimes = () => tableTimesElem.innerHTML = getTimesBlocks();

renderTableTimes();


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
    redlineElem.style.top = `${setTimeRedline()}px`;
};

moveRedline();


setInterval(moveRedline, 10000);