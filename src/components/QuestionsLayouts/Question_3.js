import style from "@/styles/pages/questions.module.css"
import style_fb from "@/styles/pages/support.module.css"
import global from "@/styles/global.module.css"
import {motion} from "framer-motion";
import Link from "next/link";
import {BECOME_CREATOR} from "@/utils/routes";
import Button from "@/components/Button";

const Question3 = ({setCurrentQuest}) => {
    return (
        <motion.div
            className={style.flex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <h1 className={global.head}>Как продавать свои биты?</h1>
            <div className={global.text + ' ' + global.txt_mt}>
                Для этого вам нужно <Link className={style_fb.href} href={BECOME_CREATOR}>зарегистрировать аккаунт создателя</Link>,
                мы взимаем единоразовый регистрационный сбор в размере <p className={global.bold}>389 ₽</p>,
                дальнейшие инструкции по работе с аккаунтом создателя вы найдёте после его регистрации.
            </div>
            <Button
                text="Назад"
                loading={false}
                classes={style_fb.button_div + ' ' + style.btn_mt}
                color="#304FFE"
                onClick={() => setCurrentQuest(-1)}
            />
        </motion.div>
    );
};

export default Question3;