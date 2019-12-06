// days

const daysElem = document.querySelector('.days');
const nameDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПН', 'СБ'];

let increasDataAttrib = 0;
let timeNow = new Date();

const getMonday = () => {
    while (timeNow.getDay() !== 1) {
        timeNow.setDate(timeNow.getDate() - 1);
    };
};
getMonday();


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

const getSectionBlock = () => {
    let result = [];
    let tesst = document.querySelector('.days__numbe').innerHTML;
    generateNumbersRange(1, 7)
        .map(sectionNumber => {
            result.push(
                `
        <div 
            class="table-sections__section " 
            data-block-number='${sectionNumber + increasDataAttrib}'
            data-date-number='${tesst++}'
            data-month-number=''
        ></div>`
            )
        })
    return result.join('');
}


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

//color current day
const markCurrentDay = () => {
    const weekDaysElems = document.querySelectorAll('.days__numbe');
    const currentNumberDay = new Date().getDay() - 1;
    [...weekDaysElems].find(arg => arg.dataset.blockNumber == currentNumberDay).classList.add('active-day-number');
};

markCurrentDay();

//current month

const monthElem = document.querySelector('.header-date');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const setCurrentMonth = () => {
    const daysNumbElems = document.querySelectorAll('.days__numbe');

    const arrWithoutFirstArg = [...daysNumbElems].splice(1);
    let checkOneMonthOnWeek = false;

    for (let arg of arrWithoutFirstArg) {
        if (arg.textContent == 1) {
            checkOneMonthOnWeek = true;
        }
    };

    let incr = 0;
    let setPreviosMonth = () => {
        let result = '';
        if (checkOneMonthOnWeek == true) {
            if ((new Date(timeNow).getMonth() + 1) > 11) {
                result = months[0];
                incr = 1;
            } else {
                result = months[new Date(timeNow).getMonth() + 1];
            }
        }
        return result;
    };

    let currentMonth = months[new Date(timeNow).getMonth()];
    monthElem.textContent = `${currentMonth} - ${setPreviosMonth()} ${timeNow.getFullYear() + +incr}`;
};

setCurrentMonth();


//arrows

const nextArrowElem = document.querySelector('.nav-button__next');
const prevArrowElem = document.querySelector('.nav-button__prev');

const getNextWeek = () => {
    timeNow.setDate(timeNow.getDate() + 7);
    increasDataAttrib += 7;
    renderDays();
    renderTable();
    renderLines();
    setCurrentMonth();
    markCurrentDay();
};

const getPrevWeek = () => {
    timeNow.setDate(timeNow.getDate() - 7);
    increasDataAttrib -= 7;
    renderDays();
    renderTable();
    renderLines();
    setCurrentMonth();
    markCurrentDay();
};

nextArrowElem.addEventListener('click', getNextWeek);
prevArrowElem.addEventListener('click', getPrevWeek);


//today button

const addButtonElem = document.querySelector('.today-button');

const getCurrentDay = () => {
    timeNow = new Date();
    getMonday();
    increasDataAttrib = 0;
    renderDays();
    renderTable();
    renderLines();
    setCurrentMonth();
    markCurrentDay();
};

addButtonElem.addEventListener('click', getCurrentDay);