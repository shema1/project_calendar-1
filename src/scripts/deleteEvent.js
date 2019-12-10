const popupDel = document.querySelector(`.delete-ivent`);
const deleteEvent = (event) => {

    event.preventDefault();
    const delHtml = document.querySelector(`[id='${selectedId}'`);
    if (delHtml == null) alert(`you cannot delete an event that does not exist`);

    if (delHtml.getAttribute('data-transfer-event') == 'main') {
        const delHtmlAdd = document.querySelector(`[id='${+selectedId + 1}'`);
        events[selectedId] = {};
        events[selectedId + 1] = {};
        delHtml.parentNode.removeChild(delHtml);
        delHtmlAdd.parentNode.removeChild(delHtmlAdd);
    } else if (delHtml.getAttribute('data-transfer-event') == 'additional') {
        const delHtmlMain = document.querySelector(`[id='${+selectedId - +1}'`);
        events[selectedId] = {};
        events[selectedId - 1] = {};
        delHtml.parentNode.removeChild(delHtml);
        delHtmlMain.parentNode.removeChild(delHtmlMain);
    } else {
        events[selectedId] = {};
        delHtml.parentNode.removeChild(delHtml);
    };

    close(event);
}


popupDel.addEventListener('click', deleteEvent)