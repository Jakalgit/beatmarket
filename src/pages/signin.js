import style from "@/styles/pages/signin.module.css"
import Input from "@/components/Input";
import {useState} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import HeightWrapper from "@/components/HeightWrapper";

const SignIn = () => {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const updatePhone = (value) => {
        setPhone(value)
    }

    const updatePassword = (value) => {
        setPassword(value)
    }

    return (
        <HeightWrapper dir="column" JSX={
            <>
                <div className={style.up}>
                    <div className={style.center}>
                        <h1 className={style.head}>Вход</h1>
                        <Input
                            type="tel"
                            value={phone}
                            setValue={(value) => updatePhone(value)}
                            placeholder="Номер телефона +7..."
                        />
                        <Input
                            type="password"
                            value={password}
                            setValue={(value) => updatePassword(value)}
                            placeholder="Пароль"
                        />
                        <div className={style.text}>Нет аккаунта? <p className={style.href}>Зарегистрируйтесь</p>.</div>
                        <div className={style.text}><p className={style.href}>Забыл пароль</p></div>
                        <div className={style.btn_wrap}>
                            <motion.button
                                className={style.button}
                                whileTap={{scale: 0.95}}
                            >
                                Войти
                            </motion.button>
                        </div>
                    </div>
                </div>
                <div className={style.cont_google}>
                    <Image alt="google" src={require("@/img/google.png")} className={style.google}/>
                    Продолжить с Google
                </div>
            </>
        } />
    );
};

export default SignIn;