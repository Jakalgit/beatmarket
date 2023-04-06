import style from "@/styles/pages/questions.module.css"
import style_fb from "@/styles/pages/support.module.css"
import {motion} from "framer-motion";

const Question2 = ({setCurrentQuest}) => {
    return (
        <motion.div
            className={style.flex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <h1 className={style_fb.head}>Как работает подтверждение покупки?</h1>
            <div className={style_fb.text + ' ' + style_fb.txt_mt}>
                Для минимизации шанаса обмана покупателя или продавца мы используем сисетму подтверждения покупки. В момент оплаты
                сумма задерживается у нас до подтверждения сделки покупателем и продавцом. Срок подтверждения - <p className={style_fb.bold}>24 часа</p>, его можно
                продлить ещё на 24 часа при запросе с обоеих сторон, если сделка не была закрыта по истеченю этого времени, то она автоматически
                закрывается системой, вся сумма обратно возвращается на счёт покупателя. Так же сделку можно отменить вручную, нажав
                на соответствуюшую кнопку, для отмены сделки достаточно одного запроса отмены.
            </div>
            <div className={style_fb.text + ' ' + style_fb.txt_mt}>
                <p className={style_fb.bold + ' ' + style.imt}>Важно:</p><br/>
                Подтверждение сделки существует в том числе для случев когда нужно подписать договор о передаче
                эксклюзивных прав с продавцом, подтверждать сделку <p className={style.under_line}>нужно только после подписания договора</p>.
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

export default Question2;