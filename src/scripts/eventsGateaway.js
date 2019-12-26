export const baseUrl = 'https://crudcrud.com/api/ad1296a4cd7245da8fd779efbbc0a3ac/events';

const mapTasks = events =>
    events.map(({ _id, ...rest }) => ({...rest, id: _id }))

export const getEventsList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(events => mapTasks(events))
};

export const createEvents = eventData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(eventData)
    })

};

export const updateEvents = (eventsId, updateEventsData) => {
    return fetch(`${baseUrl}/${eventsId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(updateEventsData)
    })
};

export const getEvents = eventsData => {
    return fetch(baseUrl, {
        method: 'GET',
    })
};

export const deleteEvents = eventId => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE',
    })
};