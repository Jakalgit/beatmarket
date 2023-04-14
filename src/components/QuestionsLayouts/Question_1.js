import style from "@/styles/pages/questions.module.css"
import global from "@/styles/global.module.css"
import style_fb from "@/styles/pages/support.module.css"
import {motion} from "framer-motion";

const Question1 = ({setCurrentQuest}) => {
    return (
        <motion.div
            className={style.flex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <h1 className={global.head}>Как рассчитывается комиссия при покупке?</h1>
            <div className={style_fb.text + ' ' + style_fb.txt_mt}>
                В стоимость бита уже включены все возможные комиссии и акции, больше, чем указано на странице покупки, вы не заплатите.
                Все покупки на сайте облагаются комиссией в размере <p className={global.bold}>2%</p> от
                цены <p className={global.underline}>которую указал создатель</p> при
                публикации музыкального произведения, половину от этой суммы
                платит покупатель, другую половину - продавец.
            </div>
            <div className={style_fb.text + ' ' + style_fb.txt_mt}>
                <p className={global.bold + ' ' + style.imt}>Важно:</p><br/>
                Цена указанная при оформлении заказа учитывает <p className={global.bold}>комиссию</p>.
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

export default Question1;