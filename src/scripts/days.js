const daysElem = document.querySelector('.days');
const nameDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПН', 'СБ'];

const timeNow = new Date();
while (timeNow.getDay() !== 1) {
    timeNow.setDate(timeNow.getDate() - 1);
};



const getDays = () => {
    let result = [];

    generateNumbersRange(0, 6)
        .map(sectionNumber => {
            let newDay = new Date(timeNow);
            newDay.setDate(newDay.getDate() + sectionNumber);


            result.push(
                `<div class="wrapper">
                    <span class="week-day">${nameDays[new Date(newDay).getDay()]}</span>
                    <div 
                        class="days__numbe" 
                        data-block-number='${sectionNumber}'
                    >${new Date(newDay).getDate()}</div>
                </div>`)
        });

    return result.join('');
};

const renderDays = () => {
    daysElem.innerHTML = getDays();
};

renderDays();


// const getWeekDay = date => {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//     return days[date.getDay()];
// }

// let date = new Date();
// console.log(getWeekDay(date));