import { errorDate, duration, checkEvent } from './validate.js'
import { events } from './storage.js'
import { renderEvents } from './renderEvent.js';
import { updateEvent } from './updateEvent.js';
import { close } from './utilities.js';

const btnSend = document.querySelector('.submit-button');
const btnClose = document.querySelector('.close');
const btnUpdateEvent = document.querySelector('.submit-button');

export const addEvent = (event) => {
    event.preventDefault();
    if (btnUpdateEvent.classList.contains("update")) {
        updateEvent(event);
        return;
    };

    let inputName = document.querySelector('.input__name');
    let inputStartDate = document.querySelector('.start-date');
    let inputStartTime = document.querySelector('.start-time');
    let inputEndDate = document.querySelector('.end-date');
    let inputEndTime = document.querySelector('.end-time');
    let inputDescription = document.querySelector('.description-input');
    let strat = new Date(inputStartDate.value + 'T' + inputStartTime.value);
    let end = new Date(inputEndDate.value + 'T' + inputEndTime.value);

    if (!errorDate(strat.getTime(), end.getTime())) return;
    if (!duration(strat, end)) return;
    if (!checkEvent()) return;

    if (inputStartTime.value > inputEndTime.value) {
        events.push({
            id: events.length,
            name: inputName.value,
            createDate: new Date(),
            startDateEvent: inputStartDate.value + 'T' + inputStartTime.value,
            endDateEvent: inputStartDate.value + 'T' + '24:00',
            description: inputDescription.value,
            transfer: 'main',
        });
        events.push({
            id: events.length,
            name: inputName.value,
            createDate: new Date(),
            startDateEvent: inputEndDate.value + 'T' + '00:00',
            endDateEvent: inputEndDate.value + 'T' + inputEndTime.value,
            description: inputDescription.value,
            transfer: 'additional',
        });
    } else {
        events.push({
            id: events.length,
            name: inputName.value,
            createDate: new Date(),
            startDateEvent: inputStartDate.value + 'T' + inputStartTime.value,
            endDateEvent: inputEndDate.value + 'T' + inputEndTime.value,
            description: inputDescription.value,
        });
    };
    inputName.value = '';
    inputDescription.value = '';
    close(event)
    renderEvents()
}

btnSend.addEventListener('click', addEvent);
btnClose.addEventListener('click', close);