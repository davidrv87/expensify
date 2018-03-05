import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = props => (
    <Modal
        isOpen={!!props.expenseToRemove}
        contentLabel="Confirm Remove Expense"
        onRequestClose={props.handleCancelRemove}
        appElement={document.getElementById('app')}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Remove Expense</h3>
        {props.expenseToRemove && <p className="modal__body">{props.expenseToRemove}</p>}

        <div className="modal__buttons">
            <button className="button" onClick={props.handleConfirmRemove}>Confirm</button>
            <button className="button button--secondary" onClick={props.handleCancelRemove}>Cancel</button>
        </div>
    </Modal>
);

export default RemoveExpenseModal;