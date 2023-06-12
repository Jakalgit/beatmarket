import style_in from "@/styles/pages/signin.module.css"
import Input from "@/components/Input";
import Image from "next/image";
import {useState} from "react";
import HeightWrapper from "@/components/HeightWrapper";
import Button from "@/components/Button";
import {sendCode} from "@/http/api/authApi";
import CheckEmailCode from "@/components/CodeLayout/CheckEmailCode";
import {add_notification, serverSideValidationToken} from "@/logic/functions";
import {useActions} from "@/hooks/useActions";
import {motion} from "framer-motion";
import NonAuthorizationUser from "@/components/NonAuthorizationUser";

const SignUp = ({ validation }) => {

    const {addNotification} = useActions()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [loadingButton, setLoadingButton] = useState(false)

    const [isSendCode, setIsSendCode] = useState(false)
    const [response, setResponse] = useState(null)

    const updateEmail = (value) => {
        setEmail(value)
    }

    const updatePassword = (value) => {
        setPassword(value)
    }

    const updateRepeatPassword = (value) => {
        setRepeatPassword(value)
    }

    const updateSendStatus = (value) => {
        setIsSendCode(value)
    }

    const clickSendCode = () => {
        if (!(email.length >= 6 && email.includes("@") && email.includes("."))) {
            add_notification("Ошибка", "Невалидный E-Mail", 1, addNotification)
            return
        }
        if (password.length < 8) {
            add_notification("Ошибка", "Пароль не менее 8 символов", 1, addNotification)
            return
        }
        if (password === repeatPassword) {
            setLoadingButton(true)
            sendCode(email, password).
            then(res => {
                if (res) {
                    setLoadingButton(false)
                    setResponse(res)
                    setIsSendCode(true)
                }
            })
        } else {
            add_notification("Ошибка", "Пароли не совпадают", 1, addNotification)
        }
    }

    return (
        <NonAuthorizationUser validation={validation}>
            <HeightWrapper dir="column">
                <div className={style_in.up}>
                    {isSendCode ?
                        <CheckEmailCode setSendDone={(value) => updateSendStatus(value)} res={response} />
                        :
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                        >
                            <div className={style_in.center} style={{marginTop: 0}}>
                                <h1 className={style_in.head}>Регистрация</h1>
                                <Input
                                    type="email"
                                    value={email}
                                    setValue={(value) => updateEmail(value)}
                                    placeholder="E-Mail"
                                />
                                <Input
                                    type="password"
                                    value={password}
                                    setValue={(value) => updatePassword(value)}
                                    placeholder="Пароль"
                                />
                                <Input
                                    type="password"
                                    value={repeatPassword}
                                    setValue={(value) => updateRepeatPassword(value)}
                                    placeholder="Повторите пароль"
                                />
                                <Button
                                    text="Зарегистрироваться"
                                    classes={style_in.btn_wrap}
                                    btnClasses={style_in.button}
                                    loading={loadingButton}
                                    color="#304FFE"
                                    onClick={clickSendCode}
                                />
                            </div>
                        </motion.div>
                    }
                </div>
                {!isSendCode &&
                    <div className={style_in.cont_google}>
                        <Image alt="google" src={require("@/img/google.png")} className={style_in.google}/>
                        Продолжить с Google
                    </div>
                }
            </HeightWrapper>
        </NonAuthorizationUser>
    );
};

export async function getServerSideProps({ req, res }) {

    const validation = await serverSideValidationToken({req, res})

    return {props: {validation}}
}

export default SignUp;