const renderEvents = () => {
    let arrEvents = [];
    events.map(elem => {
        let now = new Date(`${elem.startDateEvent}`);
        let end = new Date(`${elem.endDateEvent}`)
        let selector = `${now.getFullYear()+'-'}${now.getMonth()+1+'-'}${check(now.getDate())}`
        const test = document.querySelector(`[id='${selector}']`);
        if (test === null) {
            console.log('The event cannot be displayed at a specified interval')
            return
        }
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let minInHours = now.getHours() * 60 + minutes;
        let height = (end.getHours() - hours) * 60;
        minutes > 0 ? height = height - minutes : minutes;
        let result;
        hours < 1 ? result = minutes : result = minInHours;
        let aaa = `<div id='${elem.id}' class="event" 
        data-id-number='${elem.id}'
        data-time-ivent='${hours}'
        style="top:${result}px; height:${height}px;">
        <span class="event__name">
        ${elem.name}
        </span>
        <span class="event__description">
        ${elem.description}
        </span>
        </div>`

        test.innerHTML = aaa

    })
}



renderEvents()