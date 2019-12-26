import { errorDate, duration, checkForUpdate, checkEvent } from './validate.js'
import { deleteAll } from './deleteEvent.js';
import { selectedId } from './popup.js';
import { renderEvents } from './renderEvent.js'
import { close } from './utilities.js';
import { updateEvents, getEventsList, deleteEvents } from './eventsGateaway.js';

export const updateEvent = (event) => {
    event.preventDefault();

    let listEvents = JSON.parse(localStorage.getItem('httpRequest'))

    let elem = listEvents.find(elem => elem.id == selectedId)
    let inputName = document.querySelector('.input__name');
    const startDate = document.querySelector(`.start-date`);
    const startTime = document.querySelector('.start-time')
    const endDate = document.querySelector(`.end-date`);
    const endTime = document.querySelector('.end-time');
    let inputDescription = document.querySelector('.description-input');
    let selectColor = document.querySelector('.select__color')

    let strat = new Date(startDate.value + 'T' + startTime.value);
    let end = new Date(endDate.value + 'T' + endTime.value);

    if (!errorDate(strat.getTime(), end.getTime())) return;
    if (!duration(strat, end)) return;
    if (!checkForUpdate(strat.getTime())) return;
    if (!checkEvent()) return;

    let selectedElem = listEvents.find(elem => elem.id == selectedId)
        // selectedElem = {
        //     name: inputName.value,
        //     startDateEvent: startDate.value + 'T' + startTime.value,
        //     endDateEvent: endDate.value + 'T' + endTime.value,
        //     description: inputDescription.value,
        //     color: selectColor.value,
        // }

    let form = document.querySelector('.popup__form')
    const formData = [...new FormData(form)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});

    let startDateUpdate = formData.startDate + 'T' + formData.startTime;
    let endDateUpdate = formData.endData + 'T' + formData.endTime;
    const newEvent = formData;
    newEvent.startDateEvent = startDate;
    newEvent.endDateEvent = endDate;

    updateEvents(selectedId, newEvent)
        .then(() => getEventsList())
        .then(newTasksList => {
            localStorage.setItem('httpRequest', JSON.stringify(newTasksList))
        }).catch(() => {
            let elemm = listEvents.find(elem => elem.id == selectedId)
            listEvents[listEvents.indexOf(elemm)] = {
                id: selectedId,
                name: inputName.value,
                startDateEvent: startDate.value + 'T' + startTime.value,
                endDateEvent: endDate.value + 'T' + endTime.value,
                description: inputDescription.value,
                color: selectColor.value,
            }
            localStorage.setItem('httpRequest', JSON.stringify(listEvents))
        });
    location.reload()
    close(event);
}