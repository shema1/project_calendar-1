// const btnUpdateEvent = document.querySelector('.update');
const updateEvent = (event) => {
    event.preventDefault();


    let inputName = document.querySelector('.input__name');
    const startDate = document.querySelector(`.start-date`);
    const startTime = document.querySelector('.start-time')
    const endDate = document.querySelector(`.end-date`);
    const endTime = document.querySelector('.end-time')
    let inputDescription = document.querySelector('.description-input');

    selectedElem.name = inputName.value
    selectedElem.startDate = startDate.value + 'T' + startTime.value;
    selectedElem.endDate = endDate.value + 'T' + endTime.value;
    renderEvents()
}


// btnUpdateEvent.addEventListener('click', updateEvent)