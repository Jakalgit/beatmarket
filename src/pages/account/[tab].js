import style from "@/styles/pages/profile.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import {CONFIRMATIONS, INFO, NOTIFICATIONS, PROFILE, PURCHASES, SIGN_IN} from "@/utils/routes";
import ProfileInfo from "@/components/ProfileLayouts/ProfileInfo";
import Grid from "@/components/Grid";
import ProfilePurchases from "@/components/ProfileLayouts/ProfilePurchases";
import {useEffect, useRef, useState} from "react";
import ProfileConfirmations from "@/components/ProfileLayouts/ProfileConfirmations";
import ProfileNotifications from "@/components/ProfileLayouts/ProfileNotifications";
import {serverSideValidationToken} from "@/logic/functions";
import AuthorizationUser from "@/components/AuthorizationUser";
import {getCookie} from "cookies-next";
import jwtDecode from "jwt-decode";
import {getOneUser, getUserNotifications} from "@/http/api/userApi";
import {getUserPurchases} from "@/http/api/purchaseApi";
import {getUserConfirmations} from "@/http/api/confirmationApi";

function Profile({ validation, userData, token, purchases, confirmations, notifications }) {

    const router = useRouter()

    const [layoutHeight, setLayoutHeight] = useState(0)

    const [user, setUser] = useState(userData)

    const heightRef = useRef(null)
    const buttonsRef = useRef(null)

    useEffect(() => {
        if (validation) {
            setLayoutHeight(
                heightRef.current.getBoundingClientRect().height - buttonsRef.current.getBoundingClientRect().height
            )
        }
    }, [heightRef, buttonsRef])

    const tabs = [
        {
            href: INFO.replace("/", ""),
            text: "Профиль"
        },
        {
            href: PURCHASES.replace("/", ""),
            text: "Покупки"
        },
        {
            href: CONFIRMATIONS.replace("/", ""),
            text: "Подтверждения"
        },
        {
            href: NOTIFICATIONS.replace("/", ""),
            text: "Уведомления"
        }
    ]

    const setLayout = (href) => {
        router.push(PROFILE + "/" + href).then()
    }

    const updateUser = (user) => {
        setUser(user)
    }

    return (
        <AuthorizationUser validation={validation} >
            <div ref={heightRef}>
                <Grid>
                    <HeightWrapper
                        dir="column"
                    >
                        <div className={style.layouts}>
                            {router.query.tab === tabs[0].href &&
                                <ProfileInfo user={user} setUser={(value) => updateUser(value)} token={token}/>
                            }
                            {router.query.tab === tabs[1].href &&
                                <ProfilePurchases layoutHeight={layoutHeight} purchases={purchases} />
                            }
                            {router.query.tab === tabs[2].href &&
                                <ProfileConfirmations layoutHeight={layoutHeight} confirmations={confirmations}/>
                            }
                            {router.query.tab === tabs[3].href &&
                                <ProfileNotifications layoutHeight={layoutHeight} notifications={notifications} />
                            }
                        </div>
                        <div
                            ref={buttonsRef}
                            className={style.layoutsButton}
                        >
                            {tabs.map(tab =>
                                <motion.button
                                    onClick={() => setLayout(tab.href)}
                                    className={style.layoutButton + ' '
                                        + (router.query.tab === tab.href ? style.selectButton : '')}
                                    whileTap={{scale: 0.95}}
                                >
                                    {tab.text}
                                </motion.button>
                            )}
                        </div>
                    </HeightWrapper>
                </Grid>
            </div>
        </AuthorizationUser>
    );
}

export async function getServerSideProps({ req, res }) {

    const validation = await serverSideValidationToken({req, res})

    let userData = null, token = null, purchases = null, confirmations = null, notifications = null
    if (validation) {
        token = getCookie('act',{ req, res }) + ""
        const {user} = jwtDecode(token)
        userData = await getOneUser(user.id, token)
        purchases = await getUserPurchases(user.id, token)
        confirmations = await getUserConfirmations(user.id, token)
        notifications = await getUserNotifications(user.id, token)
    }

    return {
        props: {validation,  userData, token, purchases, confirmations, notifications},
    };
}

export default Profile;