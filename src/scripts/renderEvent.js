// const test = document.querySelector(`.navigation`);

// const renderEvents = () => {
//     let arrEvents = [];
//     events.map(elem => {
//         let now = new Date(`${elem.startDateEvent}`);
//         let hours = now.getHours();
//         let minutes = now.getMinutes();
//         let minInHours = now.getHours() * 60 + minutes;

//         let result;
//         hours < 1 ? result = minutes : result = minInHours;
//         arrEvents.push(
//             `
//                 <div class="event" style="top:${result+154}px; position: absolute;">test</div>
//                 `
//         )
//     })
//     console.log('work')
//     return arrEvents.join('');

// }


// const renderTest = () => {
//     test.innerHTML = renderEvents();
// }

// renderTest();