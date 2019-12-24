import { events } from './storage.js';
import { checkForUpdate } from './validate.js';
import { selectedId } from './popup.js';
import { close } from './utilities.js';
import { createEvents, getEventsList, deleteEvents } from './eventsGateaway.js';
import { renderEvents } from './renderEvent.js';
const popupDel = document.querySelector(`.delete-ivent`);

export const deleteEvent = (event) => {
    let listEvents = JSON.parse(localStorage.getItem('httpRequest'))
    const startDate = document.querySelector(`.start-date`);
    const startTime = document.querySelector('.start-time')
    let strat = new Date(startDate.value + 'T' + startTime.value);

    event.preventDefault();
    if (!checkForUpdate(strat.getTime())) return;
    const delHtml = document.querySelector(`[id='${selectedId}'`);
    if (delHtml == null) alert(`you cannot delete an event that does not exist`);

    if (delHtml.getAttribute('data-transfer-event') == 'main') {
        deleteEvents(selectedId)
            .then(() => getEventsList())
            .then(newTasksList => {
                localStorage.setItem('httpRequest', JSON.stringify(newTasksList))
            })
            .catch(() => {
                listEvents[selectedId] = {};
                localStorage.setItem('httpRequest', JSON.stringify(listEvents))

            })
        delHtml.parentNode.removeChild(delHtml);

        let test = listEvents.indexOf(listEvents.find(elem => elem.id == selectedId))
        let secondId = listEvents[+test + 1].id
        console.log(secondId)
        deleteEvents(secondId)
            .then(() => getEventsList())
            .then(newTasksList => {
                localStorage.setItem('httpRequest', JSON.stringify(newTasksList))
                const delHtmlAdd = document.querySelector(`[id='${secondId}'`);
                delHtmlAdd.parentNode.removeChild(delHtmlAdd);
            })
            .catch(() => {
                const delHtmlAdd = document.querySelector(`[id='${secondId}'`);
                listEvents[secondId] = {};
                delHtmlAdd.parentNode.removeChild(delHtmlAdd);
                localStorage.setItem('httpRequest', JSON.stringify(listEvents))
            })

    } else if (delHtml.getAttribute('data-transfer-event') == 'additional') {

        deleteEvents(selectedId)
            .then(() => getEventsList())
            .then(newTasksList => {
                localStorage.setItem('httpRequest', JSON.stringify(newTasksList))
            })
            .catch(() => {
                listEvents[selectedId] = {};
                delHtml.parentNode.removeChild(delHtml);
                localStorage.setItem('httpRequest', JSON.stringify(listEvents))
            })
        let test = listEvents.indexOf(listEvents.find(elem => elem.id == selectedId))
        let secondId = listEvents[+test - 1].id
        console.log(secondId)
        deleteEvents(secondId)
            .then(() => getEventsList())
            .then(newTasksList => {
                localStorage.setItem('httpRequest', JSON.stringify(newTasksList))
                const delHtmlAdd = document.querySelector(`[id='${secondId}'`);
                delHtmlAdd.parentNode.removeChild(delHtmlAdd);
            })
            .catch(() => {
                const delHtmlAdd = document.querySelector(`[id='${secondId}'`);
                listEvents[secondId] = {};
                delHtmlAdd.parentNode.removeChild(delHtmlAdd);
                localStorage.setItem('httpRequest', JSON.stringify(listEvents))
            })

    } else {
        deleteEvents(selectedId)
            .then(() => getEventsList())
            .then(newTasksList => {
                localStorage.setItem('httpRequest', JSON.stringify(newTasksList))
                delHtml.parentNode.removeChild(delHtml);
            })
            .catch(() => {
                let elem = listEvents.find(elem => elem.id == selectedId)
                listEvents[listEvents.indexOf(elem)] = {}
                localStorage.setItem('httpRequest', JSON.stringify(listEvents))
                delHtml.parentNode.removeChild(delHtml);
                // deleteAll()
            })
    };

    close(event);
    // renderEvents()
}

export const deleteAll = () => {
    let listEvents = JSON.parse(localStorage.getItem('httpRequest'))
    for (let i = 0; i < listEvents.length - 1; i++) {
        let a = document.querySelector('.event')
        if (a == null) return
        a.parentNode.removeChild(a)
    };
    localStorage.setItem('httpRequest', JSON.stringify(listEvents))
}

popupDel.addEventListener('click', deleteEvent)