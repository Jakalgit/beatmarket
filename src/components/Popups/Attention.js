import {CSSTransition} from "react-transition-group";

const Attention = ({visible, setVisible}) => {
    return (
        <CSSTransition
            in={visible}
            timeout={580}
            classNames="popup-back"
            mountOnEnter
            unmountOnExit
        >

        </CSSTransition>
    );
};

export default Attention;