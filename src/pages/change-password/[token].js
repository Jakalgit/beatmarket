import style_in from "@/styles/pages/signin.module.css"
import style_forgot from "@/styles/pages/forgot-password.module.css";
import style from "@/styles/pages/change_password.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import Input from "@/components/Input";
import {useState} from "react";
import Button from "@/components/Button";
import {motion} from "framer-motion";
import Success from "@/components/Success";
import AuthorizationUser from "@/components/AuthorizationUser";
import {serverSideValidationToken} from "@/logic/functions";

function ChangePassword({ validation }) {

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
        <AuthorizationUser validation={validation}>
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
        </AuthorizationUser>
    );
}

export async function getServerSideProps({ req, res }) {

    const validation = await serverSideValidationToken({req, res})

    return {props: {validation}}
}

export default ChangePassword;