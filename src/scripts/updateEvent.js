const updateEvent = (event) => {
    event.preventDefault();


    let inputName = document.querySelector('.input__name');
    const startDate = document.querySelector(`.start-date`);
    const startTime = document.querySelector('.start-time')
    const endDate = document.querySelector(`.end-date`);
    const endTime = document.querySelector('.end-time');
    let inputDescription = document.querySelector('.description-input');

    let strat = new Date(startDate.value + 'T' + startTime.value);
    let end = new Date(endDate.value + 'T' + endTime.value);
    if (!duration(strat, end)) return;
    if (!errorDate(strat.getTime(), end.getTime())) return;
    if (!checkForUpdate(strat.getTime())) return;
    if (!checkEvent()) return;

    deleteAll();

    selectedElem.name = inputName.value
    selectedElem.startDateEvent = startDate.value + 'T' + startTime.value;
    selectedElem.endDateEvent = endDate.value + 'T' + endTime.value;
    selectedElem.description = inputDescription.value;

    renderEvents();
};