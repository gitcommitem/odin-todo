const toggleReadOnly = (targetEl) => {
    targetEl.readOnly === true ? targetEl.readOnly = false : targetEl.readOnly = true;
};

export {toggleReadOnly};