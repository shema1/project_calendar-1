// days

const daysElem = document.querySelector('.days');
const nameDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПН', 'СБ'];
let increasDataAttrib = 0;

const timeNow = new Date();
while (timeNow.getDay() !== 1) {
    timeNow.setDate(timeNow.getDate() - 1);
};



const getDays = () => {
    let result = [];

    generateNumbersRange(0, 6)
        .map(sectionNumber => {
            let newDay = new Date(timeNow);
            newDay.setDate(newDay.getDate() + sectionNumber);

            result.push(
                `<div class="wrapper">
                    <span class="week-day">${nameDays[new Date(newDay).getDay()]}</span>
                    <div 
                        class="days__numbe" 
                        data-block-number='${sectionNumber + increasDataAttrib}'
                    >${new Date(newDay).getDate()}</div>
                </div>`)
        });

    return result.join('');
};

const renderDays = () => {
    daysElem.innerHTML = getDays();
};

renderDays();




//tables

const tableSectionsElem = document.querySelector('.table-sections');

const getSectionBlock = () => generateNumbersRange(1, 7)
    .map(sectionNumber => `
        <div 
            class="table-sections__section" 
            data-block-number='${sectionNumber + increasDataAttrib}'
        ></div>`)
    .join('');


const getSectionLines = () => {
    const blocksString = getSectionBlock();

    return generateNumbersRange(1, 24)
        .map(lineNumber => `
            <div 
                class="table-sections__line" 
                data-line-number='${lineNumber + increasDataAttrib}'
            >${blocksString}</div>`).join('');
};

const renderTable = () => {
    tableSectionsElem.innerHTML = getSectionLines();
};

renderTable();


//tableline

const tableLinesElem = document.querySelector('.lines');

const getLinesBlocks = () => generateNumbersRange(1, 24)
    .map(blockNumber => `
            <div 
                class="lines__blocks" 
                data-line-number='${blockNumber + increasDataAttrib}'
            ></div>`)
    .join('');


const renderLines = () => {
    tableLinesElem.innerHTML = getLinesBlocks();
};

renderLines();


//arrows

const nextArrowElem = document.querySelector('.nav-button__next');
const prevArrowElem = document.querySelector('.nav-button__prev');

const getNextWeek = () => {
    timeNow.setDate(timeNow.getDate() + 7);
    increasDataAttrib += 7;
    renderDays();
    renderTable();
    renderLines();
};

const getPrevWeek = () => {
    timeNow.setDate(timeNow.getDate() - 7);
    increasDataAttrib -= 7;
    renderDays();
    renderTable();
    renderLines();
};

nextArrowElem.addEventListener('click', getNextWeek);
prevArrowElem.addEventListener('click', getPrevWeek);