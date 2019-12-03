const tableSectionsElem = document.querySelector('.table-sections');

const generateNumbersRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    };

    return result;
};


const getLineSection = () => generateTableRange(1, 7)
    .map(sectionNumber => `
        <div 
            class="table-sections__section" 
            data-seat-number='${sectionNumber}'
        ></div>`)
    .join('');