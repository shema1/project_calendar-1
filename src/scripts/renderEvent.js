let now;
let end;
let selector;
let getHours;
let test;
let parent;
let testRend = [];


const renderEvents = () => {

    events.map(elem => {
        now = new Date(`${elem.startDateEvent}`);
        end = new Date(`${elem.endDateEvent}`);
        selector = `${now.getFullYear()+'-'}${now.getMonth()+1+'-'}${check(now.getDate())}`;
        getHours = now.getHours();
        if (getHours < 10) {
            getHours = `0${now.getHours()}`;
        };
        parent = document.querySelector(`[id='${getHours}']`);
        // console.log(now.getHours());
        if (parent === null) return;
        test = parent.querySelector(`[id='${selector}']`);
        if (test === null) {
            console.log('The event cannot be displayed at a specified interval')
            return;
        };

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
        data-id-parent='${selector}'
        style=
        height:${height}px;"
        >
        <span class="event__name">
        ${elem.name}
        </span>
        <span class="event__description">
        ${elem.description}
        </span>
        </div>`
        testRend.push(aaa);
        test.innerHTML = aaa;
    })
    console.log(new Date('2019-12-12T02:00').getHours());
}

renderEvents();