import style_in from "@/styles/pages/signin.module.css"
import Input from "@/components/Input";
import {motion} from "framer-motion";
import Image from "next/image";
import {useState} from "react";

const SignUp = () => {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const updatePhone = (value) => {
        setPhone(value)
    }

    const updatePassword = (value) => {
        setPassword(value)
    }

    const updateRepeatPassword = (value) => {
        setRepeatPassword(value)
    }

    return (
        <motion.div
            className="height"
            style={{display: 'flex', flexDirection: 'column'}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <div className={style_in.up}>
                <div className={style_in.center} style={{marginTop: 0}}>
                    <h1 className={style_in.head}>Регистрация</h1>
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
                    <Input
                        type="password"
                        value={repeatPassword}
                        setValue={(value) => updateRepeatPassword(value)}
                        placeholder="Повторите пароль"
                    />
                    <div className={style_in.btn_wrap}>
                        <motion.button
                            className={style_in.button}
                            whileTap={{scale: 0.95}}
                        >
                            Зарегистрироваться
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className={style_in.cont_google}>
                <Image alt="google" src={require("@/img/google.png")} className={style_in.google}/>
                Продолжить с Google
            </div>
        </motion.div>
    );
};

export default SignUp;