import style from "@/styles/pages/profile.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import {PROFILE} from "@/utils/routes";
import ProfileInfo from "@/components/ProfileLayouts/ProfileInfo";
import Grid from "@/components/Grid";

const Profile = () => {

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
            href: "confirmation",
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
        <HeightWrapper dir="column">
            <div className={style.layouts}>
                <Grid>
                    {router.query.tab === tabs[0].href &&
                        <ProfileInfo />
                    }
                </Grid>
            </div>
            <div className={style.layoutsButton}>
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
    );
};

export default Profile;