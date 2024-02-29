import style_tab from "@/styles/pages/profile.module.css";
import {motion} from "framer-motion";
import style_pr from "@/styles/components/profile_purchases.module.css";
import style_conf from "@/styles/components/profile_confirmations.module.css"
import style from "@/styles/components/profile_notifications.module.css"
import {useEffect, useRef, useState} from "react";
import style_auth from "@/styles/components/authorization_user.module.css";

const ProfileNotifications = ({ layoutHeight, notifications }) => {

    const [listHeight, setListHeight] = useState(0)

    const notificationRef = useRef(null)

    useEffect(() => {
        if (notificationRef && notifications.length !== 0) {
            const orderHeight = notificationRef.current.getBoundingClientRect().height;
            let count = Math.trunc(layoutHeight / orderHeight)
            if (count < 1) count = 1
            setListHeight(count * orderHeight - 2)
        }
    }, [notificationRef])

    return (
        <motion.div
            style={{justifyContent: "center"}}
            className={style_tab.layout}
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
        >
            {notifications.length === 0 ?
                <h1
                    className={style_auth.denied}
                    style={{textAlign: "center"}}
                >Уведомлений нет</h1>
                :
                <div
                    style={{maxHeight: listHeight}}
                    className={style_pr.orderList}
                >
                    {notifications.map(notification =>
                        <motion.div
                            ref={notificationRef}
                            className={style_pr.order + ' ' + style.notification}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                        >
                            <div className={style_conf.line + ' ' + style_conf.up}>
                                <h1 className={style_pr.name}>Уведомление №12346412</h1>
                                <p className={style.time + ' ' + style.text}>19:32</p>
                            </div>
                            <p className={style.message + ' ' + style.text}>
                                Необходимо добавить почту в ваш аккаунт, иначе вы не сможете восстановить к нему доступ при утере пароля.
                            </p>
                            <div className={style_conf.line}>
                                <p className={style.date + ' ' + style.text}>12.02.2023</p>
                            </div>
                        </motion.div>
                    )}
                </div>
            }
        </motion.div>
    );
};

export default ProfileNotifications;