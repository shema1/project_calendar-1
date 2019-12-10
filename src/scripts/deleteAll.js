const deleteAll = () => {
    for (let i = 0; i < events.length - 1; i++) {
        let a = document.querySelector('.event')
        if (a == null) return
        a.parentNode.removeChild(a)
    };
}