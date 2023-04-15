import style from "@/styles/components/loading_button.module.css"
import {motion} from "framer-motion";

const Button = ({onClick = () => {}, classes, btnClasses = "", loading, color, text}) => {
    return (
        <div className={style.buttonWrapper + ' ' + classes}>
            <div className={style.spinner} style={{display: (loading? "block" : "none")}}/>
            <motion.button
                onClick={onClick}
                className={style.button + ' ' + btnClasses}
                whileTap={{scale: 0.95}}
                style={{backgroundColor: color, display: (!loading ? "block" : "none")}}
            >
                {text}
            </motion.button>
        </div>
    );
};

export default Button;