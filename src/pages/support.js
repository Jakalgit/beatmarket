import Grid from "@/components/Grid";
import style from "@/styles/pages/support.module.css"
import global from "@/styles/global.module.css"
import {motion} from "framer-motion";
import Link from "next/link";
import {QUESTIONS} from "@/utils/routes";
import HeightWrapper from "@/components/HeightWrapper";
import Button from "@/components/Button";
import {useState} from "react";
import {useActions} from "@/hooks/useActions";
import {add_notification} from "@/logic/functions";
import Cookies from "universal-cookie";
import {createFeedbackPost} from "@/http/api/feedbackApi";

export default function Support() {

    const {addNotification} = useActions()
    const cookies = new Cookies();

    const [text, setText] = useState("")

    const sendFeedback = () => {
        if (text.length >= 20 && text.length <= 3000) {
            const lastFeedback = cookies.get('last_fb')

            const send = async () => {
                cookies.set('last_fb', Date.now(), { path: '/' });
                try {
                    const data = await createFeedbackPost(text)
                    add_notification("Отправлено", "Ваше сообщение отправлено, ожидайте ответа на почту", 0, addNotification)
                } catch (e) {
                    add_notification("Ошибка соединения", "Ошибка соединения с сервером, попробуйте позже", 0, addNotification)
                }
            }

            if (!lastFeedback) {
                send().then()
            } else {
                if ((Date.now() - Number(lastFeedback)) >= 180000) {
                    send().then()
                } else {
                    const time = Math.round((179000 - (Date.now() - Number(lastFeedback)))/1000)
                    add_notification("Ошибка", `Интервал между сообщениями 3 минуты.` +
                        `Осталось ${Math.floor(time/60)}:${time % 60}`, 1, addNotification)
                }
            }
        } else {
            add_notification("Ошибка", "Минимальная длина - 20 символов\nМаксимальная длина - 3000 символов", 1, addNotification)
        }
    }

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
                    <textarea
                        className={style.textarea}
                        placeholder="Введите текст от 20 до 3000 символов"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Button
                        text="Отправить"
                        classes={style.button_div}
                        onClick={sendFeedback}
                        loading={false}
                        color="#304FFE"
                    />
                </motion.div>
            </HeightWrapper>
        </Grid>
    );
};