import { errorDate, duration, checkForUpdate, checkEvent } from './validate.js'
import { deleteAll } from './deleteEvent.js';
import { selectedId } from './popup.js';
import { renderEvents } from './renderEvent.js'
import { close } from './utilities.js';
export const updateEvent = (event) => {
    event.preventDefault();

    let listEvents = JSON.parse(localStorage.getItem('eventss'))
    let inputName = document.querySelector('.input__name');
    const startDate = document.querySelector(`.start-date`);
    const startTime = document.querySelector('.start-time')
    const endDate = document.querySelector(`.end-date`);
    const endTime = document.querySelector('.end-time');
    let inputDescription = document.querySelector('.description-input');

    let strat = new Date(startDate.value + 'T' + startTime.value);
    let end = new Date(endDate.value + 'T' + endTime.value);

    if (!errorDate(strat.getTime(), end.getTime())) return;
    if (!duration(strat, end)) return;
    if (!checkForUpdate(strat.getTime())) return;
    if (!checkEvent()) return;

    deleteAll();

    let selectedElem = listEvents.find(elem => elem.id == selectedId)

    selectedElem.name = inputName.value
    selectedElem.startDateEvent = startDate.value + 'T' + startTime.value;
    selectedElem.endDateEvent = endDate.value + 'T' + endTime.value;
    selectedElem.description = inputDescription.value;

    localStorage.setItem('eventss', JSON.stringify(listEvents))
    close(event);
    renderEvents();
}