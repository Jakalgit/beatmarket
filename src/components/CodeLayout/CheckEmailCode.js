import {motion} from "framer-motion";
import style_in from "@/styles/pages/signin.module.css";
import style from "@/styles/components/check_code.module.css"
import {useEffect, useState} from "react";
import style_pass from "@/styles/pages/change_password.module.css";
import Button from "@/components/Button";
import style_forgot from "@/styles/pages/forgot-password.module.css";
import {useRouter} from "next/router";
import {registration} from "@/http/api/authApi";
import Cookies from "universal-cookie";
import {useActions} from "@/hooks/useActions";
import {add_notification} from "@/logic/functions";
import {INFO, PROFILE, SIGN_IN} from "@/utils/routes";

const CheckEmailCode = ({email, password, setSendDone}) => {

    const [code, setCode] = useState('')
    const [loadingButton, setLoadingButton] = useState(false)

    const router = useRouter()
    const cookies = new Cookies()

    const {addNotification} = useActions()

    useEffect(() => {
        if (code.length === 6) {
            setLoadingButton(true)
            registration(email, password, Number(code)).
            then(response => {
                if (response) {
                    cookies.set('act', response.data.backendTokens.accessToken, {path: '/', httpOnly: true})
                    cookies.set('rft', response.data.backendTokens.refreshToken, {path: '/', httpOnly: true})
                    router.push(PROFILE + INFO).then()
                    setLoadingButton(false)
                } else {
                    router.push(SIGN_IN).then()
                }
            })
        }
    }, [code])

    return (
        <motion.div
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
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
                На ваш E-Mail был отправлен код.
            </p>
            <Button
                text="Подтвердить E-Mail"
                classes={style_in.btn_wrap}
                btnClasses={style_in.button}
                loading={loadingButton}
                color="#304FFE"
                onClick={() => {setSendDone(false)}}
            />
        </motion.div>
    );
};

export default CheckEmailCode;