//popup

const selectDay = (event) => {
    const popup = document.querySelector(`.popup`);
    popup.classList.add('popup-on');
    const start = document.querySelector(`.start-date`);


    const getDayFromDiv = event.target.dataset.dateNumber
    const getTimeFromDiv = event.target.closest('.table-sections__line').dataset.lineNumber

    let dateNow = new Date();
    let dayNow = getDayFromDiv;
    dayNow < 10 ? dayNow = `0${dayNow}` : dayNow = dayNow;
    start.value = dateNow.getFullYear() + '-' + dateNow.getMonth() + "-" + dayNow;

    // const getDayDate = event.target.classList.contains('sector__seat');
    // const getDateFromDiv
    let a = dateNow.getFullYear() + '-' + dateNow.getMonth() + "-" + dayNow;

    console.log('date:' + getDayFromDiv + ' ' + getTimeFromDiv)
    console.log(a)
}


const timeListElemStart = document.querySelector('.start-time');
const timeListElemEnd = document.querySelector('.end-time');
const popupWindow = document.querySelector(`.table-sections`);


const btnAdd = document.querySelector('.add-button');

popupWindow.addEventListener('click', selectDay)
btnAdd.addEventListener('click', selectDay)

const TimeElem = () => {
    let resultTime = [];

    generateNumbersRange(0, 23)
        .map(timeList => {
            let setTime = '';
            let setSec = 0;
            let cell = '00';
            for (let i = 0; i < 4; i++) {
                timeList < 10 ? setTime = `0${timeList}` : setTime = timeList;
                resultTime.push(
                    `<option 
            value="${setTime}:${setSec}"
            data-block-number='${timeList}'>${setTime}:${cell}</option> `)
                setSec += 15
                cell = setSec
            };
        })

    return resultTime.join('');
}

const renderTimeList = () => {
    timeListElemStart.innerHTML = TimeElem();
    timeListElemEnd.innerHTML = TimeElem();
}

renderTimeList()