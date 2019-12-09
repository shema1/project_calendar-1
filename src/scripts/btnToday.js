const addButtonElem = document.querySelector('.today-button');
let eventsForCurrentWeek = [];


const getEventsByClick = () => {
    const tableSectionsElems = document.querySelector('.table-sections__line').childNodes;
    const arrWithoutTextArg = [...tableSectionsElems].filter((arg, index) => {
        if (index % 2 != 0) return arg;
    });
    testRend.map(arg => {
        for (let i = 0; i < arrWithoutTextArg.length; i++) {
            if (arg.dataset.idParent == arrWithoutTextArg[i].id) {
                arrWithoutTextArg[i].append(arg);
            }
        }
    });
};

const getCurrentDay = () => {
    timeNow = new Date();
    getMonday();
    increasDataAttrib = 0;
    renderDays();
    renderTable();
    renderLines();
    setCurrentMonth();
    markCurrentDay();
    getEventsByClick();
};

addButtonElem.addEventListener('click', getCurrentDay);