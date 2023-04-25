import style_in from "@/styles/pages/signin.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import Input from "@/components/Input";
import Button from "@/components/Button";
import style from "@/styles/pages/forgot-password.module.css";
import {useState} from "react";
import MessageForUser from "@/components/ForgotPasswordLayouts/MessageForUser";

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const [viewMessage, setViewMessage] = useState(false)

    const updateEmail = (value) => {
        setEmail(value)
    }

    const clickNext = () => {
        setViewMessage(true)
    }

    return (
        <HeightWrapper dir="column">
            <div className={style_in.up}>
                <div className={style_in.center + ' ' + style.transform}>
                    {!viewMessage ?
                        <>
                            <h1 className={style_in.head}>Восстановление</h1>
                            <Input
                                type="email"
                                value={email}
                                setValue={(value) => updateEmail(value)}
                                placeholder="E-Mail аккаунта"
                            />
                            <Button
                                text="Далее"
                                classes={style_in.btn_wrap}
                                btnClasses={style_in.button}
                                loading={false}
                                color="#304FFE"
                                onClick={clickNext}
                            />
                        </>
                        :
                        <MessageForUser text="
                            Инструкции по восстановалнию пароля отправлены
                            на вашу почту, если письма нет, то, возможно,
                            данного аккаунта не существует.
                        " />
                    }
                </div>
            </div>
        </HeightWrapper>
    );
};

export default ForgotPassword;