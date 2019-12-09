const popupDel = document.querySelector(`.delete-ivent`);
const deleteEvent = (event) => {

    event.preventDefault();
    const delHtml = document.querySelector(`[id='${selectedId}'`);
    if (delHtml == null) alert(`you cannot delete an event that does not exist`)
    console.log(selectedId)

    events[selectedId] = {}
    delHtml.parentNode.removeChild(delHtml);

    close(event)
}


popupDel.addEventListener('click', deleteEvent)