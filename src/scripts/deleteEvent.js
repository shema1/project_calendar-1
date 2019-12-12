import { events } from './storage.js';
import { checkForUpdate } from './validate.js';
import { selectedId } from './popup.js';
import { close } from './utilities.js';
const popupDel = document.querySelector(`.delete-ivent`);
let listEvents = JSON.parse(localStorage.getItem('eventss'))
export const deleteEvent = (event) => {
    const startDate = document.querySelector(`.start-date`);
    const startTime = document.querySelector('.start-time')
    let strat = new Date(startDate.value + 'T' + startTime.value);

    event.preventDefault();
    if (!checkForUpdate(strat.getTime())) return;
    const delHtml = document.querySelector(`[id='${selectedId}'`);
    if (delHtml == null) alert(`you cannot delete an event that does not exist`);

    if (delHtml.getAttribute('data-transfer-event') == 'main') {
        const delHtmlAdd = document.querySelector(`[id='${+selectedId + 1}'`);
        listEvents[selectedId] = {};
        listEvents[selectedId + 1] = {};
        delHtml.parentNode.removeChild(delHtml);
        delHtmlAdd.parentNode.removeChild(delHtmlAdd);
        localStorage.setItem('eventss', JSON.stringify(listEvents))
    } else if (delHtml.getAttribute('data-transfer-event') == 'additional') {
        const delHtmlMain = document.querySelector(`[id='${+selectedId - +1}'`);
        listEvents[selectedId] = {};
        listEvents[selectedId - 1] = {};
        delHtml.parentNode.removeChild(delHtml);
        delHtmlMain.parentNode.removeChild(delHtmlMain);
        localStorage.setItem('eventss', JSON.stringify(listEvents))
    } else {
        listEvents[selectedId] = {};
        delHtml.parentNode.removeChild(delHtml);
        localStorage.setItem('eventss', JSON.stringify(listEvents))
    };

    close(event);
}

export const deleteAll = () => {
    for (let i = 0; i < listEvents.length - 1; i++) {
        let a = document.querySelector('.event')
        if (a == null) return
        a.parentNode.removeChild(a)
    };
    localStorage.setItem('eventss', JSON.stringify(listEvents))
}

popupDel.addEventListener('click', deleteEvent)