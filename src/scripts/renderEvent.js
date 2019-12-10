let now;
let end;
let selector;
let getHours;
let sectionElem;
let parent;


const renderEvents = () => {
    let sectionElemForInterval = [];
    let sectionElemRend = [];
    events.map(elem => {
        now = new Date(`${elem.startDateEvent}`);
        end = new Date(`${elem.endDateEvent}`);
        selector = `${now.getFullYear()+'-'}${now.getMonth()+1+'-'}${check(now.getDate())}`;
        getHours = now.getHours();
        if (getHours < 10) {
            getHours = `0${now.getHours()}`;
        };
        parent = document.querySelector(`[id='${getHours}']`);
        if (parent === null) return;
        sectionElem = parent.querySelector(`[id='${selector}']`);
        if (sectionElem === null) {
            return;
        };
        let bgnEvent = new Date(now);
        let endEvent = new Date(end);
        let diffEndBgn = (endEvent - bgnEvent) / 1000 / 60;
        let flexDirection = 'flex-direction:column';
        if (diffEndBgn < 60) {
            flexDirection = 'flex-direction:row; align-items:center; padding:0px';
        };


        let hours = now.getHours();
        let minutes = now.getMinutes();
        let minInHours = now.getHours() * 60 + minutes;
        let height = (end.getHours() - hours) * 60;
        minutes > 0 ? height = height - minutes : minutes;
        let result;
        hours < 1 ? result = minutes : result = minInHours;

        let startTime = `${check(new Date(elem.startDateEvent).getHours())+':'+check(new Date(elem.startDateEvent).getMinutes())}`;
        let endTime = `${check(new Date(elem.endDateEvent).getHours())+':'+check(new Date(elem.endDateEvent).getMinutes())}`;

        let divElem = `<div id='${elem.id}' class="event" 
        data-id-number='${elem.id}'
        data-time-ivent='${hours}'
        data-id-parent='${selector}'
        data-transfer-event='${elem.transfer}'
        style="
        height:${diffEndBgn}px; top:${now.getMinutes()}px; ${flexDirection};"
        >
        <div class="event__name" data-id-number='${elem.id}'>
        ${elem.name}
        </div>
        <div class="event__time" data-id-number='${elem.id}'>
        ${startTime} - ${endTime}
        </div>
        <div class="event__description" data-id-number='${elem.id}'>
        ${elem.description}
        </div>
        </div>`
        sectionElemForInterval.push(sectionElem);
        sectionElemRend.push(divElem);
    });
    let increaser = 0;
    const sectionElemRender = () => {
        if (!sectionElemRend[increaser]) {
            return
        } else {
            sectionElemForInterval[increaser].innerHTML = sectionElemRend[increaser];
            increaser++
        }
    };
    let interval = setInterval(sectionElemRender, 100);
    setTimeout(() => { clearInterval(interval) }, 5000);
}

renderEvents();