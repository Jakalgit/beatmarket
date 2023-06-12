import style from "@/styles/pages/signin.module.css"
import Input from "@/components/Input";
import {useState} from "react";
import Image from "next/image";
import HeightWrapper from "@/components/HeightWrapper";
import Button from "@/components/Button";
import {useRouter} from "next/router";
import {FORGOT_PASSWORD, INFO, PROFILE, SIGN_UP} from "@/utils/routes";
import {login} from "@/http/api/authApi";
import {useActions} from "@/hooks/useActions";
import {add_notification, serverSideValidationToken} from "@/logic/functions";
import Cookies from "universal-cookie";
import NonAuthorizationUser from "@/components/NonAuthorizationUser";

const SignIn = ({ validation }) => {

    const router = useRouter()
    const {addNotification} = useActions()
    const cookies = new Cookies()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loadingButton, setLoadingButton] = useState(false)

    const updateEmail = (value) => {
        setEmail(value)
    }

    const updatePassword = (value) => {
        setPassword(value)
    }

    const clickSingIn = async () => {
        if (email && password) {
            setLoadingButton(true)
            try {
                const data = await login(email, password)
                if (data) {
                    cookies.set('token', data.token, {path: '/'})
                    router.push(PROFILE + INFO).then()
                } else {
                    add_notification("Ошибка", "Неверный ответ сервера", 1, addNotification)
                }
            } catch (e) {
                add_notification("Ошибка", "Неверный E-Mail или пароль", 1, addNotification)
            }
            setLoadingButton(false)
        }
    }

    return (
        <NonAuthorizationUser validation={validation}>
            <HeightWrapper dir="column">
                <div className={style.up}>
                    <div className={style.center}>
                        <h1 className={style.head}>Вход</h1>
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
                        <div onClick={() => router.push(SIGN_UP)} className={style.text}>Нет аккаунта? <p className={style.href}>Зарегистрируйтесь</p>.</div>
                        <div onClick={() => router.push(FORGOT_PASSWORD)} className={style.text}><p className={style.href}>Забыл пароль</p></div>
                        <Button
                            text="Войти"
                            classes={style.btn_wrap}
                            btnClasses={style.button}
                            loading={loadingButton}
                            color="#304FFE"
                            onClick={clickSingIn}
                        />
                    </div>
                </div>
                <div className={style.cont_google}>
                    <Image alt="google" src={require("@/img/google.png")} className={style.google}/>
                    Продолжить с Google
                </div>
            </HeightWrapper>
        </NonAuthorizationUser>
    );
};

export async function getServerSideProps({ req, res }) {

    const validation = await serverSideValidationToken({req, res})

    return {props: {validation}}
}

export default SignIn;