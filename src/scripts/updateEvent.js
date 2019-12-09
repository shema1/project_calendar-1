// const btnUpdateEvent = document.querySelector('.update');
const updateEvent = (event) => {
    event.preventDefault();


    let inputName = document.querySelector('.input__name');
    const startDate = document.querySelector(`.start-date`);
    const startTime = document.querySelector('.start-time')
    const endDate = document.querySelector(`.end-date`);
    const endTime = document.querySelector('.end-time')
    let inputDescription = document.querySelector('.description-input');

    deleteAll()

    selectedElem.name = inputName.value
    selectedElem.startDateEvent = startDate.value + 'T' + startTime.value;
    selectedElem.endDateEvent = endDate.value + 'T' + endTime.value;
    selectedElem.description = inputDescription.value;




    renderEvents()
}


// btnUpdateEvent.addEventListener('click', updateEvent)