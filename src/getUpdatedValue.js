const getUpdatedValue = (querySelectorString) => {
    const targetInputEl = document.querySelector(querySelectorString);
    return targetInputEl.value;
};

export {getUpdatedValue};