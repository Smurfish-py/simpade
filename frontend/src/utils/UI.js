function openModal(data, modalId, setData) {
    document.getElementById(modalId).showModal();
    setData(data);
}

export { openModal }