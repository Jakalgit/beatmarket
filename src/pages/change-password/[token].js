import style_in from "@/styles/pages/signin.module.css"
import style_forgot from "@/styles/pages/forgot-password.module.css";
import style from "@/styles/pages/change_password.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import Input from "@/components/Input";
import {useState} from "react";
import Button from "@/components/Button";
import {motion} from "framer-motion";
import Success from "@/components/Success";

const ChangePassword = () => {

    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const [updateDone, setUpdateDone] = useState(false)

    const updatePassword = (value) => {
        setPassword(value)
    }

    const updateRepeatPassword = (value) => {
        setRepeatPassword(value)
    }

    return (
        <HeightWrapper dir="column">
            <div className={style_in.up}>
                <div className={style_in.center + ' ' + style_forgot.transform}>
                    {updateDone ?
                        <Success text="Пароль изменён" />
                        :
                        <>
                            <h1 className={style_in.head}>Новый пароль</h1>
                            <Input
                                type="password"
                                placeholder="Придумайте новый пароль"
                                value={password}
                                setValue={(value) => updatePassword(value)}
                            />
                            <Input
                                type="password"
                                placeholder="Повторите пароль"
                                value={repeatPassword}
                                setValue={(value) => updateRepeatPassword(value)}
                            />
                            <p className={style.text}>
                                Пароль должен состоять минимум из 8 символов и содержать цифры и специальные символы (! “ # $ % ‘ () *)
                            </p>
                            <Button
                                text="Сохранить"
                                classes={style_in.btn_wrap}
                                btnClasses={style_in.button}
                                loading={false}
                                color="#304FFE"
                                onClick={() => {setUpdateDone(true)}}
                            />
                        </>
                    }
                </div>
            </div>
        </HeightWrapper>
    );
};

export default ChangePassword;