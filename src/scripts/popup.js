//popup

const selectDay = () => {
    const popup = document.querySelector(`.popup`);
    popup.classList.add('popup-on');
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