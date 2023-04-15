import style from "@/styles/pages/forgot-password.module.css"
import global from "@/styles/global.module.css"
import {motion} from "framer-motion";

const MessageForUser = () => {
    return (
        <motion.div
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <p className={style.message + ' ' + global.bold}>
                Инструкции отправлены на вашу почту инструкции
                по восстановалнию пароля, если письма нет, то, возможно,
                данного аккаунта не существует.
            </p>
            <a
                className={style.mail + ' ' + global.underline}
                href="mailto:beatmarket@yandex.ru"
            >
                beatmarket@yandex.ru
            </a>
        </motion.div>
    );
};

export default MessageForUser;