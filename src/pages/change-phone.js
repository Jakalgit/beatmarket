import HeightWrapper from "@/components/HeightWrapper";
import style_in from "@/styles/pages/signin.module.css"
import style_forgot from "@/styles/pages/forgot-password.module.css";
import style_pass from "@/styles/pages/change_password.module.css"
import Input from "@/components/Input";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import Button from "@/components/Button";
import CheckPhoneCode from "@/components/CodeLayout/CheckPhoneCode";
import Success from "@/components/Success";

const ChangePhone = () => {

    const [phone, setPhone] = useState('')

    const [sendDone, setSendDone] = useState(false)
    const [code, setCode] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {

    }, [sendDone])

    const updatePhone = (value) => {
        setPhone(value)
    }

    const updateSendDone = (value) => {
        setSendDone(false)
    }

    const updateSuccess = (value) => {
        setSuccess(value)
    }

    return (
        <HeightWrapper dir="column">
            <div className={style_in.up}>
                {sendDone ?
                    <>
                        {success ?
                            <Success text="E-Mail сохранён" />
                            :
                            <CheckPhoneCode
                                setSendDone={(value) => updateSendDone(value)}
                                setSuccess={(value) => updateSuccess(value)}
                            />
                        }
                    </>
                    :
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        className={style_in.center + ' ' + style_forgot.transform}
                    >
                        <h1 className={style_in.head}>Номер телефона</h1>
                        <Input
                            type="tel"
                            placeholder="Введите новый номер телефона"
                            value={phone}
                            setValue={(value) => updatePhone(value)}
                        />
                        <p className={style_pass.text}>
                            Введите новый номер телефона, который будет привязан к вашему аккаунту.
                        </p>
                        <Button
                            text="Получить код"
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

export default ChangePhone;