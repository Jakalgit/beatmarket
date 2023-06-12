import style from "@/styles/components/authorization_user.module.css";
import Link from "next/link";
import {INFO, PROFILE, SIGN_IN} from "@/utils/routes";
import HeightWrapper from "@/components/HeightWrapper";

const NonAuthorizationUser = ({ children, validation }) => {

    // Обёртка для страниц, на которые могут заходить только не авторизованные пользователи

    if (!validation) {
        return children
    } else {
        return (
            <HeightWrapper dir="row">
                <div className={style.center}>
                    <h1 className={style.denied}>Вы уже авторизованы</h1>
                    <Link href={PROFILE + INFO} className={style.link}>Перейти в профиль</Link>
                </div>
            </HeightWrapper>
        );
    }
};

export default NonAuthorizationUser;