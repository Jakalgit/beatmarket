import style from "@/styles/pages/profile.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import {PROFILE} from "@/utils/routes";
import ProfileInfo from "@/components/ProfileLayouts/ProfileInfo";
import Grid from "@/components/Grid";
import ProfilePurchases from "@/components/ProfileLayouts/ProfilePurchases";
import {useEffect, useRef, useState} from "react";
import ProfileConfirmations from "@/components/ProfileLayouts/ProfileConfirmations";

const Profile = () => {

    const [layoutHeight, setLayoutHeight] = useState(0)

    const heightRef = useRef(null)
    const buttonsRef = useRef(null)

    useEffect(() => {
        setLayoutHeight(
            heightRef.current.getBoundingClientRect().height - buttonsRef.current.getBoundingClientRect().height
        )
    }, [heightRef, buttonsRef])

    const router = useRouter()

    const tabs = [
        {
            href: "info",
            text: "Профиль"
        },
        {
            href: "purchases",
            text: "Покупки"
        },
        {
            href: "confirmations",
            text: "Подтверждения"
        },
        {
            href: "notifications",
            text: "Уведомления"
        }
    ]

    const setLayout = (href) => {
        router.push(PROFILE + "/" + href).then()
    }

    return (
        <div ref={heightRef}>
            <Grid>
                <HeightWrapper
                    dir="column"
                >
                    <div className={style.layouts}>
                        {router.query.tab === tabs[0].href &&
                            <ProfileInfo />
                        }
                        {router.query.tab === tabs[1].href &&
                            <ProfilePurchases layoutHeight={layoutHeight} />
                        }
                        {router.query.tab === tabs[2].href &&
                            <ProfileConfirmations layoutHeight={layoutHeight} />
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
    );
};

export default Profile;