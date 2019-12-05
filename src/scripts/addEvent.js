const btnSend = document.querySelector('.submit-button');
const btnClose = document.querySelector('.close');


const addEvent = (event) => {
    event.preventDefault();
    let inputName = document.querySelector('.input__name');
    let inputStartDate = document.querySelector('.start-date');
    let inputStartTime = document.querySelector('.start-time');
    let inputEndDate = document.querySelector('.end-date');
    let inputEndTime = document.querySelector('.end-time');
    let inputDescription = document.querySelector('.description-input');

    events.push({
        id: events.length + 1,
        name: inputName.value,
        createDate: new Date(),
        startDateEvent: inputStartDate.value,
        stratTimeEvent: inputStartTime.value,
        endDateEvent: inputEndDate.value,
        endTimeEvent: inputEndTime.value,
        description: inputDescription.value
    })

    inputName.value = '';
    inputDescription.value = '';

    console.log(events)
}

const close = (event) => {
    event.preventDefault();
    const popup = document.querySelector(`.popup`);
    popup.classList.remove('popup-on')
}

btnSend.addEventListener('click', addEvent)
btnClose.addEventListener('click', close)