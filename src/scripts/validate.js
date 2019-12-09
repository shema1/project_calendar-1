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
    console.log(start.getHours());
    console.log(end.getHours())
    if (end - start > 6) {
        alert('You cannot create an event longer than 6 hours')
        return false
    }
    return true;

}