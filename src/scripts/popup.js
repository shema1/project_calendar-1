//popup
const check = (elem) => {

    let num = elem
    num < 10 ? num = `0${num}` : num;
    return num
}


const selectDay = (event) => {
    const popup = document.querySelector(`.popup`);
    popup.classList.add('popup-on');

    const startDate = document.querySelector(`.start-date`);
    const endDate = document.querySelector(`.end-date`);
    const startTime = document.querySelector('.start-time')
    const endTime = document.querySelector('.end-time')

    const getYear = event.target.dataset.yearNumber
    const getMonth = event.target.dataset.monthNumber
    const getDay = event.target.dataset.dateNumber
    const getTime = event.target.closest('.table-sections__line').dataset.lineNumber

    startDate.value = getYear + '-' + check(getMonth) + "-" + check(getDay);
    endDate.value = startDate.value
    startTime.value = `${check(getTime-1)+':00'}`
    endTime.value = `${check(getTime)+':00'}`

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
            value="${setTime}:${cell}"
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