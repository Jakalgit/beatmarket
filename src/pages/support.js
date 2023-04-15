import Grid from "@/components/Grid";
import style from "@/styles/pages/support.module.css"
import global from "@/styles/global.module.css"
import {motion} from "framer-motion";
import Link from "next/link";
import {QUESTIONS} from "@/utils/routes";
import HeightWrapper from "@/components/HeightWrapper";
import Button from "@/components/Button";

export default function Support() {
    return (
        <Grid>
            <HeightWrapper dir="column" >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <h1 className={global.head}>Обратная связь</h1>
                    <p className={global.text + ' ' + global.txt_mt}>
                        Если у вас возникли проблемы при работе сайтом, вы можете написать их здесь, напишите в подробностях
                    </p>
                    <div className={global.text}>
                        что у вас не работает, вы можете написать
                        на почту <p className={global.bold}>beatmarket@yandex.ru</p>, или
                        посмотрите <Link href={QUESTIONS} className={style.href}>часто задаваемые вопросы</Link>.
                    </div>
                    <p className={global.text + ' ' + global.txt_mt}>
                        Так же мы рассмотрим ваши пожелания и рекомендации по улучшению проекта.
                    </p>
                    <textarea className={style.textarea} placeholder="Введите текст..." />
                    <Button
                        text="Отправить"
                        classes={style.button_div}
                        onClick={() => {}}
                        loading={false}
                        color="#304FFE"
                    />
                </motion.div>
            </HeightWrapper>
        </Grid>
    );
};