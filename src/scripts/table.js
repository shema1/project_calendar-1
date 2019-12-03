const tableSectionsElem = document.querySelector('.table-sections');

const generateNumbersRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    };

    return result;
};


const getSectionBlock = () => generateTableRange(1, 7)
    .map(sectionNumber => `
        <div 
            class="table-sections__section" 
            data-seat-number='${sectionNumber}'
        ></div>`)
    .join('');


const getSectionLines = () => {
    const blocksString = getSectionBlock();

    return generateNumbersRange(1, 24)
        .map(lineNumber => `
            <div 
                class="table-sections__line" 
                data-line-number='${lineNumber}'
            >${blocksString}</div>`)
        .join('');
};

const renderTable = () => {
    tableSectionsElem.innerHTML = getSectionLines;
};

renderTable();