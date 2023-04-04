import Grid from "@/components/Grid";
import style from "@/styles/pages/support.module.css"
import {motion} from "framer-motion";
import Link from "next/link";
import {QUESTIONS} from "@/utils/routes";

export default function Support() {
    return (
        <div className="height" style={{display: 'flex', flexDirection: 'column'}}>
            <Grid>
                <motion.div
                    className={style.pd}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <h1 className={style.head}>Обратная связь</h1>
                    <p className={style.text + ' ' + style.txt_mt}>
                        Если у вас возникли проблемы при работе сайтом, вы можете написать их здесь, напишите в подробностях
                    </p>
                    <div className={style.text}>
                        что у вас не работает, вы можете написать
                        на почту <p className={style.bold}>beatmarket@yandex.ru</p>, или
                        посмотрите <Link href={QUESTIONS} className={style.href}>часто задаваемые вопросы</Link>.
                    </div>
                    <p className={style.text + ' ' + style.txt_mt}>
                        Так же мы рассмотрим ваши пожелания и рекомендации по улучшению проекта.
                    </p>
                    <textarea className={style.textarea} placeholder="Введите текст..." />
                    <div className={style.button_div}>
                        <motion.button
                            className={style.button}
                            whileTap={{scale: 0.97}}
                        >
                            Отправить
                        </motion.button>
                    </div>
                </motion.div>
            </Grid>
        </div>
    );
};