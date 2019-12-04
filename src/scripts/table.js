const tableSectionsElem = document.querySelector('.table-sections');

const getSectionBlock = () => generateNumbersRange(1, 7)
    .map(sectionNumber => `
        <div 
            class="table-sections__section" 
            data-block-number='${sectionNumber}'
        ></div>`)
    .join('');


const getSectionLines = () => {
    const blocksString = getSectionBlock();

    return generateNumbersRange(1, 24)
        .map(lineNumber => `
            <div 
                class="table-sections__line" 
                data-line-number='${lineNumber}'
            >${blocksString}</div>`).join('');
};

const renderTable = () => {
    tableSectionsElem.innerHTML = getSectionLines();
};

renderTable();


const tableLinesElem = document.querySelector('.lines');

const getLinesBlocks = () => generateNumbersRange(1, 24)
    .map(blockNumber => `
            <div 
                class="lines__blocks" 
                data-line-number='${blockNumber}'
            ></div>`)
    .join('');


const renderLines = () => {
    tableLinesElem.innerHTML = getLinesBlocks();
};

renderLines();