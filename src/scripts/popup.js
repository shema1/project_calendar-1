//popup

let selectedId;
let selectedElem;


const inputName = document.querySelector(`.input__name`);
const startDate = document.querySelector(`.start-date`);
const endDate = document.querySelector(`.end-date`);
const startTime = document.querySelector('.start-time')
const endTime = document.querySelector('.end-time')
const description = document.querySelector('.description-input')

const btnUpdate = document.querySelector('.submit-button');


const selectDay = (event) => {
    const popup = document.querySelector(`.popup`);
    popup.classList.add('popup-on');
    if (event.target.classList.value === 'table-sections__section') {
        btnUpdate.classList.remove("update")

        const getYear = event.target.dataset.yearNumber
        const getMonth = event.target.dataset.monthNumber
        const getDay = event.target.dataset.dateNumber
        const getTime = event.target.closest('.table-sections__line').dataset.timeSet

        inputName.value = '';
        startDate.value = getYear + '-' + check(getMonth) + "-" + check(getDay);
        endDate.value = startDate.value
        startTime.value = `${check(getTime-1)+':00'}`
        endTime.value = `${check(getTime)+':00'}`
        description.value = ''
    } else {
        btnUpdate.classList.add("update")

        const getId = event.target.dataset.idNumber;
        // console.log(events[getId])
        let eventObj = events.find(elem => elem.id == getId)
        let startEventTime = new Date(events[getId].startDateEvent)
        let endEventTime = new Date(events[getId].endDateEvent)
        let year = startEventTime.getFullYear();
        let months = check(startEventTime.getMonth())
        let day = check(startEventTime.getDay())
        let valueStratHour = check(startEventTime.getHours())
        let valueStartMin = check(startEventTime.getMinutes())
        let valueEndHour = check(endEventTime.getHours())
        let valueEndMin = check(endEventTime.getMinutes())

        inputName.value = eventObj.name;
        startDate.value = year + '-' + months + '-' + day;
        endDate.value = startDate.value
        startTime.value = `${valueStratHour+':'+valueStartMin}`
        endTime.value = `${valueEndHour+':'+valueEndMin}`
        description.value = eventObj.description;

        return selectedElem = eventObj, selectedId = getId;
    }
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