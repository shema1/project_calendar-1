const errorDate = (start, end) => {

    // let startDate = new Date(start);
    // let endDate = new Date(end);

    if (end < start) {
        alert('error')
        return false
    }

    return true;
}



const duration = (start, end) => {

    if (end.getHours() - start.getHours() > 6) {

        alert('You cannot create an event longer than 6 hours')
        return false
    }
    return true;

}

const checkForDelete = (start) => {
    const now = new Date()
    let min15InMc = 900000;

    if (start - now.getTime() < min15InMc) {
        alert('you cannot delete/update event 15 minutes before the start')
        return false
    }
    return true

}