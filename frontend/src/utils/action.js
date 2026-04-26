function openModal(modalId, data, setState) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.showModal();
    }

    if (data && setState) {
        setState(data);
    }
}

export { openModal }