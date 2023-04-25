import style_in from "@/styles/pages/signin.module.css"
import style_forgot from "@/styles/pages/forgot-password.module.css";
import style_pass from "@/styles/pages/change_password.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import Input from "@/components/Input";
import {useState} from "react";
import {motion} from "framer-motion";
import Button from "@/components/Button";
import MessageForUser from "@/components/ForgotPasswordLayouts/MessageForUser";

const ChangeEmail = () => {

    const [email, setEmail] = useState('')

    const [sendDone, setSendDone] = useState(false)

    const updateEmail = (value) => {
        setEmail(value)
    }

    return (
        <HeightWrapper dir="column">
            <div className={style_in.up}>
                {sendDone ?
                    <>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <MessageForUser
                                text="На вашу почту отправлено письмо, проверьте папку спам,
                            если письма нет, то повторите смену почты."
                            />
                            <Button
                                text="Изменить почту"
                                classes={style_in.btn_wrap}
                                btnClasses={style_in.button}
                                loading={false}
                                color="#304FFE"
                                onClick={() => {setSendDone(false)}}
                            />
                        </div>
                    </>
                    :
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        className={style_in.center + ' ' + style_forgot.transform}
                    >
                        <h1 className={style_in.head}>Новая почта</h1>
                        <Input
                            type="email"
                            placeholder="Укажите новый E-Mail"
                            value={email}
                            setValue={(value) => updateEmail(value)}
                        />
                        <p className={style_pass.text}>
                            Введите адрес электронной почты, чтобы иметь возможность восстановить доступ к аккаунту и получать уведомления безопасности.
                        </p>
                        <Button
                            text="Сохранить"
                            classes={style_in.btn_wrap}
                            btnClasses={style_in.button}
                            loading={false}
                            color="#304FFE"
                            onClick={() => {setSendDone(true)}}
                        />
                    </motion.div>
                }
            </div>
        </HeightWrapper>
    );
};

export default ChangeEmail;