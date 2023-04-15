import global from "@/styles/global.module.css"
import style_fb from "@/styles/pages/support.module.css"
import style from "@/styles/pages/questions.module.css"
import {motion} from "framer-motion";
import Button from "@/components/Button";

const Question1 = ({setCurrentQuest}) => {
    return (
        <motion.div
            className={style.flex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <h1 className={global.head}>Как рассчитывается комиссия при покупке?</h1>
            <div className={global.text + ' ' + global.txt_mt}>
                В стоимость бита уже включены все возможные комиссии и акции, больше, чем указано на странице покупки, вы не заплатите.
                Все покупки на сайте облагаются комиссией в размере <p className={global.bold}>2%</p> от
                цены <p className={global.underline}>которую указал создатель</p> при
                публикации музыкального произведения, половину от этой суммы
                платит покупатель, другую половину - продавец.
            </div>
            <div className={global.text + ' ' + global.txt_mt}>
                <p className={global.imt}>Важно:</p><br/>
                Цена указанная при оформлении заказа учитывает <p className={global.bold}>комиссию</p>.
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

export default Question1;