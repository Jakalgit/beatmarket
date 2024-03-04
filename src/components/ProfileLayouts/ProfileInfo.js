import style_tab from "@/styles/pages/profile.module.css"
import style from "@/styles/components/profile_info.module.css"
import Image from "next/image";
import {motion} from "framer-motion";
import Button from "@/components/Button";
import {useState} from "react";
import ChangeInfo from "@/components/Popups/ChangeInfo";
import ChangePassword from "@/components/Popups/ChangePassword";
import {changeUserIdentifier, changeUserName} from "@/http/api/userApi";
import {useActions} from "@/hooks/useActions";
import {add_notification} from "@/logic/functions";
import Cookies from "universal-cookie";
import {useRouter} from "next/router";
import {CHANGE_EMAIL, CHANGE_PHONE, SIGN_IN} from "@/utils/routes";
import {deleteCookie} from "cookies-next";

const ProfileInfo = ({user, setUser, token}) => {

    const {addNotification} = useActions()
    const router = useRouter()

    const cookies = new Cookies()

    const [changeInfoVisible, setChangeInfoVisible] = useState(false)
    const [placeholder, setPlaceholder] = useState('')

    const [loadingChange, setLoadingChange] = useState(false)
    const [changeValue, setChangeValue] = useState('')

    const [changePasswordVisible, setChangePasswordVisible] = useState(false)

    const [name, setName] = useState('')

    const openChangeNamePopup = () => {
        setPlaceholder("Введите новое имя")
        setChangeInfoVisible(true)
    }

    const openChangeIDPopup = () => {
        setPlaceholder("Введите новый ID")
        setChangeInfoVisible(true)
    }

    const openPasswordPopup = () => {
        setChangePasswordVisible(true)
    }

    const updateInfoVisible = (value) => {
        setChangeInfoVisible(value)
    }

    const updateChangeValue = (value) => {
        setChangeValue(value)
    }

    const updatePasswordVisible = (value) => {
        setChangePasswordVisible(value)
    }

    const clickChangeInfo = () => {
        if (placeholder.includes("имя")) {
            changeName(changeValue).then()
        }
        if (placeholder.includes("ID")) {
            changeIdentifier(changeValue).then()
        }
    }

    const changeName = async (value) => {
        if (value.length >= 4 && value.length <= 50) {
            setLoadingChange(true)
            try {
                const data = await changeUserName(user.id, value, token)
                if (data) {
                    setLoadingChange(false)
                    setUser({...user, name: value})
                    setChangeInfoVisible(false)
                    setChangeValue('')
                    add_notification("Изменено", "Имя пользователя изменено", 0, addNotification)
                }
            } catch (e) {
                console.log(e)
                add_notification("Ошибка", "Ошибка соединения, попробуйте позже", 1, addNotification)
            }
        } else {
            add_notification("Ошибка", "Длина имени от 4 до 50 символов", 1, addNotification)
        }
    }

    const changeIdentifier = async (value) => {
        if (value.length >= 8 && value.length <= 55) {
            setLoadingChange(true)
            try {
                const data = await changeUserIdentifier(user.id, value.toLowerCase(), token)
                if (data) {
                    setLoadingChange(false)
                    setUser({...user, identifier: value})
                    setChangeInfoVisible(false)
                    setChangeValue('')
                    add_notification("Изменено", "ID пользователя изменён", 0, addNotification)
                }
            } catch (e) {
                console.log(e)
                add_notification("Ошибка", "Ошибка соединения, попробуйте позже", 1, addNotification)
            }
        } else {
            add_notification("Ошибка", "Длина идентификатора от 8 до 55 символов", 1, addNotification)
        }
    }

    const changePhone = () => {
       router.push(CHANGE_PHONE).then()
    }

    const changeEmail = () => {
        router.push(CHANGE_EMAIL).then()
    }

    const logout = () => {
        deleteCookie('act')
        deleteCookie('rft')
        router.push(SIGN_IN).then()
    }

    return (
        <>
            <ChangePassword
                visible={changePasswordVisible}
                setVisible={(value) => updatePasswordVisible(value)}
            />
            <ChangeInfo
                visible={changeInfoVisible}
                loading={loadingChange}
                placeholder={placeholder}
                value={changeValue}
                onClick={clickChangeInfo}
                setVisible={(value) => updateInfoVisible(value)}
                setValue={(value) => updateChangeValue(value)}
            />
            <motion.div
                className={style_tab.layout}
                initial={{opacity: 0}}
                whileInView={{ opacity: 1 }}
            >
                <div className={style.line}>
                    <div className={style.wrapperPreview}>
                        <div className={style.filter}>
                            <div className={style.changePreview}>
                                <svg
                                    className={style.changePreviewSvg}
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M82.7083 30.625L69.375 17.2917L73.75 12.9166C74.9306 11.7361 76.4063 11.1632 78.1771 11.1979C79.9479 11.2326 81.4236 11.8403 82.6042 13.0208L87.0833 17.5C88.2639 18.6805 88.8542 20.1389 88.8542 21.875C88.8542 23.6111 88.2639 25.0694 87.0833 26.25L82.7083 30.625ZM15.625 87.5C14.7222 87.5 13.9757 87.2048 13.3854 86.6146C12.7951 86.0243 12.5 85.2778 12.5 84.375V75.4167C12.5 75 12.5694 74.618 12.7083 74.2708C12.8472 73.9236 13.0903 73.5764 13.4375 73.2292L65 21.6666L78.3333 35L26.7708 86.5625C26.4236 86.9097 26.0764 87.1528 25.7292 87.2917C25.3819 87.4305 25 87.5 24.5833 87.5H15.625Z" />
                                </svg>
                            </div>
                        </div>
                        <Image src={require("@/img/preview.png")} alt="preview" className={style.preview} />
                    </div>
                    <div className={style.nameBlock}>
                        <div className={style.name}>
                            {user.name}
                            <svg
                                onClick={openChangeNamePopup}
                                className={style.changeNameSvg}
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M82.7083 30.625L69.375 17.2917L73.75 12.9166C74.9306 11.7361 76.4063 11.1632 78.1771 11.1979C79.9479 11.2326 81.4236 11.8403 82.6042 13.0208L87.0833 17.5C88.2639 18.6805 88.8542 20.1389 88.8542 21.875C88.8542 23.6111 88.2639 25.0694 87.0833 26.25L82.7083 30.625ZM15.625 87.5C14.7222 87.5 13.9757 87.2048 13.3854 86.6146C12.7951 86.0243 12.5 85.2778 12.5 84.375V75.4167C12.5 75 12.5694 74.618 12.7083 74.2708C12.8472 73.9236 13.0903 73.5764 13.4375 73.2292L65 21.6666L78.3333 35L26.7708 86.5625C26.4236 86.9097 26.0764 87.1528 25.7292 87.2917C25.3819 87.4305 25 87.5 24.5833 87.5H15.625Z" />
                            </svg>
                        </div>
                        <div className={style.userId}>
                            @{user.identifier}
                            <svg
                                onClick={openChangeIDPopup}
                                className={style.changeSvg + ' ' + style.smallSvg}
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M82.7083 30.625L69.375 17.2917L73.75 12.9166C74.9306 11.7361 76.4063 11.1632 78.1771 11.1979C79.9479 11.2326 81.4236 11.8403 82.6042 13.0208L87.0833 17.5C88.2639 18.6805 88.8542 20.1389 88.8542 21.875C88.8542 23.6111 88.2639 25.0694 87.0833 26.25L82.7083 30.625ZM15.625 87.5C14.7222 87.5 13.9757 87.2048 13.3854 86.6146C12.7951 86.0243 12.5 85.2778 12.5 84.375V75.4167C12.5 75 12.5694 74.618 12.7083 74.2708C12.8472 73.9236 13.0903 73.5764 13.4375 73.2292L65 21.6666L78.3333 35L26.7708 86.5625C26.4236 86.9097 26.0764 87.1528 25.7292 87.2917C25.3819 87.4305 25 87.5 24.5833 87.5H15.625Z" />
                            </svg>
                        </div>
                        <div className={style.logoutBlock}>
                            <p
                                className={style.logout}
                                onClick={logout}
                            >
                                Выйти
                            </p>
                            <svg
                                className={style.logoutSvg}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 96 960 960"
                            >
                                <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z"/>
                            </svg>
                        </div>
                    </div>
                    <Button
                        onClick={openPasswordPopup}
                        text="Изменить пароль"
                        classes={style.changePassword}
                        color="#304FFE"
                    />
                </div>
                <div className={style.verticalLine}>
                    <div className={style.block}>
                        <div className={style.infoBlock}>
                            <div className={style.infoName}>
                                Номер телефона
                                <svg
                                    onClick={changePhone}
                                    style={{marginLeft: "auto"}}
                                    className={style.changeSvg + ' ' + style.smallSvg}
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M82.7083 30.625L69.375 17.2917L73.75 12.9166C74.9306 11.7361 76.4063 11.1632 78.1771 11.1979C79.9479 11.2326 81.4236 11.8403 82.6042 13.0208L87.0833 17.5C88.2639 18.6805 88.8542 20.1389 88.8542 21.875C88.8542 23.6111 88.2639 25.0694 87.0833 26.25L82.7083 30.625ZM15.625 87.5C14.7222 87.5 13.9757 87.2048 13.3854 86.6146C12.7951 86.0243 12.5 85.2778 12.5 84.375V75.4167C12.5 75 12.5694 74.618 12.7083 74.2708C12.8472 73.9236 13.0903 73.5764 13.4375 73.2292L65 21.6666L78.3333 35L26.7708 86.5625C26.4236 86.9097 26.0764 87.1528 25.7292 87.2917C25.3819 87.4305 25 87.5 24.5833 87.5H15.625Z" />
                                </svg>
                            </div>
                            {user.phone ?
                                <p className={style.info}>{user.phone}</p>
                                :
                                <div className={style.info + ' ' + style.infoError}>
                                    - - - - - - - - - -
                                    <svg
                                        className={style.error + ' ' + style.smallSvg}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 96 960 960"
                                    >
                                        <path d="M479.754 801Q504 801 519.5 786.246q15.5-14.755 15.5-39Q535 723 519.746 707q-15.255-16-39.5-16Q456 691 440.5 706.982 425 722.965 425 747.211q0 24.245 15.254 39.017Q455.509 801 479.754 801ZM436 624h94V354h-94v270Zm44.404 377q-88.872 0-166.125-33.084-77.254-33.083-135.183-91.012-57.929-57.929-91.012-135.119Q55 664.594 55 575.638q0-88.957 33.084-166.285 33.083-77.328 90.855-134.809 57.772-57.482 135.036-91.013Q391.238 150 480.279 150q89.04 0 166.486 33.454 77.446 33.453 134.853 90.802 57.407 57.349 90.895 134.877Q906 486.66 906 575.734q0 89.01-33.531 166.247-33.531 77.237-91.013 134.86-57.481 57.623-134.831 90.891Q569.276 1001 480.404 1001Zm.096-94q137.5 0 234-96.372T811 575.5q0-137.5-96.312-234Q618.375 245 479.5 245q-137.5 0-234 96.312Q149 437.625 149 576.5q0 137.5 96.372 234T480.5 907Zm-.5-331Z"/>
                                    </svg>
                                </div>
                            }
                        </div>
                        <p className={style.attention} style={{opacity: (user.phone ? 0 : 1)}}>
                            Укажите номер телефона, иначе вы не сможете совершать покупки
                            с данного аккаунта.
                        </p>
                    </div>
                    <div className={style.block + ' ' + style.mt}>
                        <div className={style.infoBlock}>
                            <div className={style.infoName}>
                                Адрес почты
                                <svg
                                    onClick={changeEmail}
                                    style={{marginLeft: "auto"}}
                                    className={style.changeSvg + ' ' + style.smallSvg}
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M82.7083 30.625L69.375 17.2917L73.75 12.9166C74.9306 11.7361 76.4063 11.1632 78.1771 11.1979C79.9479 11.2326 81.4236 11.8403 82.6042 13.0208L87.0833 17.5C88.2639 18.6805 88.8542 20.1389 88.8542 21.875C88.8542 23.6111 88.2639 25.0694 87.0833 26.25L82.7083 30.625ZM15.625 87.5C14.7222 87.5 13.9757 87.2048 13.3854 86.6146C12.7951 86.0243 12.5 85.2778 12.5 84.375V75.4167C12.5 75 12.5694 74.618 12.7083 74.2708C12.8472 73.9236 13.0903 73.5764 13.4375 73.2292L65 21.6666L78.3333 35L26.7708 86.5625C26.4236 86.9097 26.0764 87.1528 25.7292 87.2917C25.3819 87.4305 25 87.5 24.5833 87.5H15.625Z" />
                                </svg>
                            </div>
                            {user.email ?
                                <p className={style.info}>{user.email}</p>
                                :
                                <div className={style.info + ' ' + style.infoError}>
                                    - - - - - - - -
                                    <svg
                                        className={style.error + ' ' + style.smallSvg}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 96 960 960"
                                    >
                                        <path d="M479.754 801Q504 801 519.5 786.246q15.5-14.755 15.5-39Q535 723 519.746 707q-15.255-16-39.5-16Q456 691 440.5 706.982 425 722.965 425 747.211q0 24.245 15.254 39.017Q455.509 801 479.754 801ZM436 624h94V354h-94v270Zm44.404 377q-88.872 0-166.125-33.084-77.254-33.083-135.183-91.012-57.929-57.929-91.012-135.119Q55 664.594 55 575.638q0-88.957 33.084-166.285 33.083-77.328 90.855-134.809 57.772-57.482 135.036-91.013Q391.238 150 480.279 150q89.04 0 166.486 33.454 77.446 33.453 134.853 90.802 57.407 57.349 90.895 134.877Q906 486.66 906 575.734q0 89.01-33.531 166.247-33.531 77.237-91.013 134.86-57.481 57.623-134.831 90.891Q569.276 1001 480.404 1001Zm.096-94q137.5 0 234-96.372T811 575.5q0-137.5-96.312-234Q618.375 245 479.5 245q-137.5 0-234 96.312Q149 437.625 149 576.5q0 137.5 96.372 234T480.5 907Zm-.5-331Z"/>
                                    </svg>
                                </div>
                            }
                        </div>
                        <p className={style.attention} style={{opacity: (user.email ? 0 : 1)}}>
                            Укажите адрес почты, иначе вы не сможете восстановить
                            доступ к аккаунту при утере пароля.
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ProfileInfo;