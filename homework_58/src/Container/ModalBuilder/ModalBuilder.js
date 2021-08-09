import React, {useState} from 'react';
import Modal from "../../Components/UI/Modal/Modal";
import InnerModal from "../../Components/InnerModal/InnerModal";
import Alert from "../../Components/Alert/Alert";
import JustAlert from "../../Components/JustAlert/JustAlert";

const ModalBuilder = () => {
    const [modalShow, setModalShow] = useState(false);

    const [alertShow, setAlertShow] = useState(false);

    const [alertForm, setAlertForm] = useState({
        select: 'open',
        input: '',
        dismiss: false,
    });

    const showModalHandle = () => {
        setModalShow(true);
    };

    const closeModalHandle = () => {
        setModalShow(false);
    };

    const continuedHandler = () => {
        alert('all is super');
    };

    const inputHandle = value => {
        setAlertForm(prev => ({
            ...prev,
            input: value,
        }));
    };

    const selectedHandleSubmit = e => {
        e.preventDefault();
        setAlertShow(true);
    };

    const selectedHandleChange = value => {
        setAlertForm(prev => ({
            ...prev,
            select: value,
        }));
    };

    const CloseAlertHandle = () => {
        setAlertShow(false);
        setAlertForm(prev => ({
            ...prev,
            select: 'open',
            input: '',
            dismiss: false,

        }))
    };

    const closeJustAlert = () => {
        justAlert = null;
    }

    let justAlert = (
        <JustAlert
            type="warning"
            // dismiss={closeJustAlert}
        >
            Some typing text
        </JustAlert>
    );

    return (
        <div>
            <Modal
                show={modalShow}
                close={closeModalHandle}>
                <InnerModal
                    close={closeModalHandle}
                    continued={continuedHandler}
                    textHeader='Всяко разно'
                    textBody='То что должно быть выведенно'
                />

            </Modal>

            <Alert
                show={alertShow}
                type={alertForm.select}
                dismiss={CloseAlertHandle}
            >
                {alertForm.input}
            </Alert>

            <p>
                <button
                    type="button"
                    onClick={showModalHandle}
                    className="btn btn-primary"
                >
                    Modal
                </button>
            </p>
            <form onSubmit={selectedHandleSubmit}>
                <label>
                    Input message
                    <input
                        type="text"
                        className="form-control"
                        onChange={e => inputHandle(e.target.value)}
                        value={alertForm.input}
                    />
                </label>
                <label>
                    input type of alert
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={alertForm.select}
                        onChange={e => selectedHandleChange(e.target.value)}
                    >
                        <option value="open">Open this select menu</option>
                        <option value="Primary">Primary</option>
                        <option value="Success">Success</option>
                        <option value="Danger">Danger</option>
                        <option value="Warning">Warning</option>
                    </select>
                </label>
                <button type="submit" className="btn btn-secondary">OK</button>
            </form>
            {justAlert}

        </div>
    );
};

export default ModalBuilder;