import style from "@/styles/components/notification.module.css"
import {motion} from "framer-motion";
import {useState} from "react";

const Notification = ({notificationsList, setNotificationsList}) => {

    const [x, setX] = useState("0")

    const closeNotification = () => {
        setX("-110%")
    }

    return (
        <motion.div
            initial={{x: "-110%"}}
            animate={{x}}
            transition={{
                type: "spring",
                layout: { duration: 0.5 }
            }}
            className={style.notification}
        >
            <div className={style.up_line}>
                <p className={style.head}>Чат удалён</p>
                <svg onClick={closeNotification} className={style.close} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 17.4L9.00005 24.4C8.80005 24.6 8.56672 24.7 8.30005 24.7C8.03338 24.7 7.80005 24.6 7.60005 24.4C7.40005 24.2 7.30005 23.9667 7.30005 23.7C7.30005 23.4333 7.40005 23.2 7.60005 23L14.6 16L7.60005 9C7.40005 8.8 7.30005 8.56667 7.30005 8.3C7.30005 8.03334 7.40005 7.8 7.60005 7.6C7.80005 7.4 8.03338 7.3 8.30005 7.3C8.56672 7.3 8.80005 7.4 9.00005 7.6L16 14.6L23 7.6C23.2 7.4 23.4334 7.3 23.7 7.3C23.9667 7.3 24.2 7.4 24.4 7.6C24.6 7.8 24.7 8.03334 24.7 8.3C24.7 8.56667 24.6 8.8 24.4 9L17.4 16L24.4 23C24.6 23.2 24.7 23.4333 24.7 23.7C24.7 23.9667 24.6 24.2 24.4 24.4C24.2 24.6 23.9667 24.7 23.7 24.7C23.4334 24.7 23.2 24.6 23 24.4L16 17.4Z" fill="#82B1FF"/>
                </svg>
            </div>
        </motion.div>
    );
};

export default Notification;