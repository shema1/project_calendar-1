import { errorDate, duration, checkEvent } from './validate.js'
import { events } from './storage.js'
import { renderEvents } from './renderEvent.js';
import { updateEvent } from './updateEvent.js';
import { close } from './utilities.js';
import { createEvents, getEventsList, deleteEvents } from './eventsGateaway.js';

const btnSend = document.querySelector('.submit-button');
const btnClose = document.querySelector('.close');
const btnUpdateEvent = document.querySelector('.submit-button');

const serverStatusElem = document.querySelector('.status-server');

export const addEvent = (event) => {
    event.preventDefault();
    if (btnUpdateEvent.classList.contains("update")) {
        updateEvent(event);
        return;
    };
    let listEvents = JSON.parse(localStorage.getItem('httpRequest'))
    let inputName = document.querySelector('.input__name');
    let inputStartDate = document.querySelector('.start-date');
    let inputStartTime = document.querySelector('.start-time');
    let inputEndDate = document.querySelector('.end-date');
    let inputEndTime = document.querySelector('.end-time');
    let inputDescription = document.querySelector('.description-input');
    let selectColor = document.querySelector('.select__color')
    let strat = new Date(inputStartDate.value + 'T' + inputStartTime.value);
    let end = new Date(inputEndDate.value + 'T' + inputEndTime.value);

    if (!errorDate(strat.getTime(), end.getTime())) return;
    if (!duration(strat, end)) return;
    if (!checkEvent()) return;

    const newEvent = {
        id: listEvents.length,
        name: inputName.value,
        createDate: new Date(),
        startDateEvent: inputStartDate.value + 'T' + inputStartTime.value,
        endDateEvent: inputEndDate.value + 'T' + inputEndTime.value,
        description: inputDescription.value,
        color: selectColor.value
    };

    createEvents(newEvent)
        .then(() => getEventsList())
        .then(newTasksList => {
            serverStatusElem.classList.remove('status-server__off');
            localStorage.setItem('httpRequest', JSON.stringify(newTasksList));
            renderEvents();
        })
        .catch(() => {
            serverStatusElem.classList.add('status-server__off');
            const localStore = JSON.parse(localStorage.getItem('httpRequest'))
            localStore.push(newEvent);
            localStorage.setItem('httpRequest', JSON.stringify(localStore));
            renderEvents();

        });
    inputName.value = '';
    inputDescription.value = '';
    close(event)
}

btnSend.addEventListener('click', addEvent);
btnClose.addEventListener('click', close);