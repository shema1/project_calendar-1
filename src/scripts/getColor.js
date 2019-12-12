let selectColor = document.querySelector('.select__color')
export const getColor = () => {

    if (selectColor.value == '#039be5') {
        selectColor.style.backgroundColor = `#039be5`
    }
    if (selectColor.value == '#red') {
        // selectColor.style.backgroundColor = `red`
        return 'red'
    }
}