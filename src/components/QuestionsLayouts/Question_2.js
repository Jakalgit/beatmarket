import style from "@/styles/pages/questions.module.css"
import style_fb from "@/styles/pages/support.module.css"
import global from "@/styles/global.module.css"
import {motion} from "framer-motion";
import Button from "@/components/Button";

const Question2 = ({setCurrentQuest}) => {
    return (
        <motion.div
            className={style.flex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <h1 className={global.head}>Как работает подтверждение покупки?</h1>
            <div className={global.text + ' ' + global.txt_mt}>
                Для минимизации шанаса обмана покупателя или продавца мы используем сисетму подтверждения покупки. В момент оплаты
                сумма задерживается у нас до подтверждения сделки покупателем и продавцом. Срок подтверждения - <p className={global.bold}>24 часа</p>, его можно
                продлить ещё на 24 часа при запросе с обоеих сторон, если сделка не была закрыта по истеченю этого времени, то она автоматически
                закрывается системой, вся сумма обратно возвращается на счёт покупателя. Так же сделку можно отменить вручную, нажав
                на соответствуюшую кнопку, для отмены сделки достаточно одного запроса отмены.
            </div>
            <div className={global.text + ' ' + global.txt_mt}>
                <p className={global.imt}>Важно:</p><br/>
                Подтверждение сделки существует в том числе для случев когда нужно подписать договор о передаче
                эксклюзивных прав с продавцом, подтверждать сделку <p className={global.underline}>нужно только после подписания договора</p>.
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

export default Question2;