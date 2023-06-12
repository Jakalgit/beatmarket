import {motion} from "framer-motion";
import style_in from "@/styles/pages/signin.module.css";
import style from "@/styles/components/check_code.module.css"
import {useEffect, useState} from "react";
import style_pass from "@/styles/pages/change_password.module.css";
import Button from "@/components/Button";
import style_forgot from "@/styles/pages/forgot-password.module.css";

const CheckPhoneCode = ({setSendDone, setSuccess}) => {

    const [code, setCode] = useState('')

    useEffect(() => {
        if (code.length === 6) {
            setSuccess(true)
        }
    }, [code])

    return (
        <motion.div
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className={style_forgot.transform}
        >
            <input
                className={style.input}
                type="number"
                placeholder="Код из сообщения"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <p className={style_pass.text}>
                На ваш телефон был отправлен код.
            </p>
            <Button
                text="Изменить номер"
                classes={style_in.btn_wrap}
                btnClasses={style_in.button}
                loading={false}
                color="#304FFE"
                onClick={() => {setSendDone(false)}}
            />
        </motion.div>
    );
};

export default CheckPhoneCode;