let now;
let end;
let selector;
let test;
let testRend = [];


const renderEvents = () => {
    let arrEvents = [];
    events.map(elem => {
        now = new Date(`${elem.startDateEvent}`);
        end = new Date(`${elem.endDateEvent}`);
        selector = `${now.getFullYear()+'-'}${now.getMonth()+1+'-'}${check(now.getDate())}`;
        test = document.querySelector(`[id='${selector}']`);
        if (test === null) {
            console.log('The event cannot be displayed at a specified interval');
            return;
        };
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let minInHours = now.getHours() * 60 + minutes;
        let height = (end.getHours() - hours) * 60;
        minutes > 0 ? height = height - minutes : minutes;
        let result;
        hours < 1 ? result = minutes : result = minInHours;
        let zzz = document.createElement('div');
        zzz.setAttribute("data-id-number", `${elem.id}`);
        zzz.setAttribute("data-time-ivent", `${hours}`);
        zzz.setAttribute("data-id-parent", `${selector}`);
        zzz.className = 'event';
        zzz.id = `${elem.id}`;
        zzz.style.top = `${result}px`;
        zzz.style.height = `${height}px`;
        zzz.innerHTML = `<span class="event__name">
            ${elem.name}
            </span>
            <span class="event__description">
            ${elem.description}
            </span>`;

        // let aaa = `<div id='${elem.id}' class="event" 
        // data-id-number='${elem.id}'
        // data-time-ivent='${hours}'
        // style="top:${result}px; height:${height}px;">
        // <span class="event__name">
        // ${elem.name}
        // </span>
        // <span class="event__description">
        // ${elem.description}
        // </span>
        // </div>`

        testRend.push(zzz);
    });
    if (test === null) {
        return;
    } else {
        test.append(testRend[testRend.length - 1]);
    };
    // console.log(testRend);
};

renderEvents();