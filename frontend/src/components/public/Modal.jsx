function ConfirmModal({ action, confirmStyle }) {
    return (
        <dialog id="confirm_modal" className="modal">
            <div className="modal-box">
                <h2 className="text-lg text-bold">Apakah anda yakin?</h2>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Tidak jadi</button>
                    </form>
                    <button className={`btn ${confirmStyle}`}>Ya, {action}</button>
                </div>
            </div>
            <form className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export { ConfirmModal }