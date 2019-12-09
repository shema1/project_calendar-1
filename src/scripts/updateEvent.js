// const btnUpdateEvent = document.querySelector('.update');
const updateEvent = (event) => {
    event.preventDefault();


    let inputName = document.querySelector('.input__name');
    const startDate = document.querySelector(`.start-date`);
    const startTime = document.querySelector('.start-time')
    const endDate = document.querySelector(`.end-date`);
    const endTime = document.querySelector('.end-time')
    let inputDescription = document.querySelector('.description-input');

    //delete old elem from HTML
    now = new Date(`${selectedElem.startDateEvent}`);
    end = new Date(`${selectedElem.endDateEvent}`)
    selector = `${now.getFullYear()+'-'}${now.getMonth()+1+'-'}${check(now.getDate())}`
    parent = document.querySelector(`[id='${now.getHours()}']`);

    console.log(parent)

    //selectedElem from popup.js
    console.log(events[1])
    selectedElem.name = inputName.value
    selectedElem.startDateEvent = startDate.value + 'T' + startTime.value;
    selectedElem.endDateEvent = endDate.value + 'T' + endTime.value;
    selectedElem.description = inputDescription.value + "-" + startDate.value + 'T' + startTime.value;



    console.log(events[1])
    renderEvents()
}


// btnUpdateEvent.addEventListener('click', updateEvent)