import style from "@/styles/pages/questions.module.css"
import style_fb from "@/styles/pages/support.module.css"
import {motion} from "framer-motion";
import Link from "next/link";
import {BECOME_CREATOR} from "@/utils/routes";

const Question3 = ({setCurrentQuest}) => {
    return (
        <motion.div
            className={style.flex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <h1 className={style_fb.head}>Как продавать свои биты?</h1>
            <div className={style_fb.text + ' ' + style_fb.txt_mt}>
                Для этого вам нужно <Link className={style_fb.href} href={BECOME_CREATOR}>зарегистрировать аккаунт создателя</Link>,
                мы взимаем единоразовый регистрационный сбор в размере <p className={style_fb.bold}>389 ₽</p>,
                дальнейшие инструкции по работе с аккаунтом создателя вы найдёте после его регистрации.
            </div>
            <div className={style_fb.button_div + ' ' + style.btn_mt}>
                <motion.button
                    onClick={() => setCurrentQuest(-1)}
                    className={style_fb.button}
                    whileTap={{scale: 0.95}}
                >
                    Назад
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Question3;