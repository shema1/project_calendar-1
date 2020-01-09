import { check } from './utilities.js';
import { getEventsList } from './eventsGateaway.js';

let now;
let end;
let selector;
let getHours;
let sectionElem;
let parent;

export const renderEvents = () => {
  const obj = [{ id: 0 }];
  if (!JSON.parse(localStorage.getItem('httpRequest'))) {
    listEvents = localStorage.setItem('httpRequest', JSON.stringify(obj));
  }
  const sectionElemForInterval = [];
  const sectionElemRend = [];

  getEventsList()
    .then((tasksList) => {
      localStorage.setItem('httpRequest', JSON.stringify(tasksList));
    });

  let listEvents = JSON.parse(localStorage.getItem('httpRequest'));

  const listEventsFor2Days = [];

  listEvents.map((elem) => {
    const hourOfBegin = new Date(elem.startDateEvent).getHours();
    const hoursOfEnd = new Date(elem.endDateEvent).getHours();

    if (hourOfBegin > hoursOfEnd) {
      const startMonth = `0${new Date(elem.startDateEvent).getMonth() + 1}`;
      const startDate = `0${new Date(elem.startDateEvent).getDate()}`;
      const endMonth = `0${new Date(elem.endDateEvent).getMonth() + 1}`;
      const endDate = `0${new Date(elem.endDateEvent).getDate()}`;

      const todayEndEvent = `${new Date(elem.startDateEvent).getFullYear()}-${startMonth.slice(-2)}-${startDate.slice(-2)}`;
      const tommorowBeginEvent = `${new Date(elem.endDateEvent).getFullYear()}-${endMonth.slice(-2)}-${endDate.slice(-2)}`;

      const todayEvent = { ...elem };
      const tommorowEvent = { ...elem };

      Object.assign(todayEvent, { endDateEvent: `${todayEndEvent}T24:00`, transfer: 'main' });
      Object.assign(tommorowEvent, { startDateEvent: `${tommorowBeginEvent}T00:00`, transfer: 'additional' });

      listEventsFor2Days.push(todayEvent);
      listEventsFor2Days.push(tommorowEvent);
    } else {
      listEventsFor2Days.push(elem);
    }
  });

  listEventsFor2Days.map((elem) => {
    now = new Date(`${elem.startDateEvent}`);
    end = new Date(`${elem.endDateEvent}`);
    selector = `${`${now.getFullYear()}-`}${`${now.getMonth() + 1}-`}${check(now.getDate())}`;
    getHours = now.getHours();
    if (getHours < 10) {
      getHours = `0${now.getHours()}`;
    }
    parent = document.querySelector(`[id='${getHours}']`);
    if (parent === null) return;
    sectionElem = parent.querySelector(`[id='${selector}']`);
    if (sectionElem === null) {
      return;
    }
    const bgnEvent = new Date(now);
    const endEvent = new Date(end);
    const diffEndBgn = (endEvent - bgnEvent) / 1000 / 60;
    let flexDirection = 'flex-direction:column';
    if (diffEndBgn < 60) {
      flexDirection = 'flex-direction:row; align-items:center; padding:0px';
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    let height = (end.getHours() - hours) * 60;
    minutes > 0 ? height -= minutes : minutes;

    const startTime = `${`${check(new Date(elem.startDateEvent).getHours())}:${check(new Date(elem.startDateEvent).getMinutes())}`}`;
    const endTime = `${`${check(new Date(elem.endDateEvent).getHours())}:${check(new Date(elem.endDateEvent).getMinutes())}`}`;

    const divElem = `<div id='${elem.id}' class="event" 
        data-id-number='${elem.id}'
        data-time-ivent='${hours}'
        data-id-parent='${selector}'
        data-transfer-event='${elem.transfer}'
        style="
        height:${diffEndBgn}px; 
        top:${now.getMinutes()}px; ${flexDirection};
        background-color:${elem.color}"
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
        </div>`;
    sectionElemForInterval.push(sectionElem);
    sectionElemRend.push(divElem);
  });
  let increaser = 0;
  const sectionElemRender = () => {
    if (!sectionElemRend[increaser]) {

    } else {
      sectionElemForInterval[increaser].innerHTML = sectionElemRend[increaser];
      increaser++;
    }
  };
  const interval = setInterval(sectionElemRender, 50);
  setTimeout(() => { clearInterval(interval); }, 12000);
};
