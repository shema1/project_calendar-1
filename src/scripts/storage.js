import { createEvents, getEvents, deleteEvents, baseUrl } from './eventsGateaway.js';

export let events = [];




// const mapTasks = tasks =>
//     tasks.map(({ _id, ...rest }) => ({...rest, id: _id }))

// const getEventsList = () => {
//     return fetch(baseUrl)
//         .then(response => response.json())
//         .then(tasks => mapTasks(tasks))
// };

// const setItem = (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
// };

// const getItem = key => {
//     return JSON.parse(localStorage.getItem(key));
// };

// creatTask(newTask)
// .then(() => getTasksList())
// .then(newTasksList => {
//     setItem('tasksList', newTasksList)
//     renderTasks();
// });

// createEvents(one)
//     .then(() => getTasksList())
//     .then(newTasksList => {
//         setItem('tasksList', newTasksList)
//             // console.log(getItem('tasksList'))
//     });

// createEvents(two)
//     .then(() => getTasksList())
//     .then(newTasksList => {
//         setItem('tasksList', newTasksList)
//         console.log(getItem('tasksList'))
//     });

// createEvents(even)
//     .then(() => getTasksList())
//     .then(newTasksList => {
//         setItem('tasksList', newTasksList)
//         console.log(getItem('tasksList'))
//     });



// deleteTask("5e00e015e6280703e8ec0b6b")
//     .then(() => getTasksList())
//     .then(newTasksList => {
//         setItem('tasksList', newTasksList)
//         console.log(getItem('tasksList'))
//     });


// console.log(getItem('tasksList'))



// createEvents(events)
//     .then(data => console.log(data));

// createEvents(one)
//     .then(data => console.log(data));
// createEvents(two)
//     .then(data => console.log(data));



// getTask()
//     .then(data => console.log(data));