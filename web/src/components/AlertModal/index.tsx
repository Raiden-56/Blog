import ConfirmButton from './ConfirmButton';
import './style.css';

const AlertModal = ({ isVisible, toggleModal, text }: { isVisible: boolean, toggleModal: (_: { text: string }) => any, text: string }) => {
    
    return isVisible ? (
        <div className="Modal-container">
            <div className="Modal">
                <div className="Modal-icon"><i className="fas fa-3x fa-exclamation-circle"></i></div>
                <div className="Modal-text">{text}</div>
                <ConfirmButton onClick={toggleModal}/>
            </div>
        </div>
    ) : null;
}

export default AlertModal;