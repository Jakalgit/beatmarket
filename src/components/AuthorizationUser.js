import HeightWrapper from "@/components/HeightWrapper";
import style from "@/styles/components/authorization_user.module.css"
import Link from "next/link";
import {SIGN_IN} from "@/utils/routes";

function AuthorizationUser({ children, validation }) {

    // Обёртка для страниц, на которые могут заходить только автризованные пользователи

    if (validation) {
        return children
    } else {
        return (
            <HeightWrapper dir="row">
                <div className={style.center}>
                    <h1 className={style.denied}>Доступ запрещён</h1>
                    <Link href={SIGN_IN} className={style.link}>Войдите чтобы продолжить</Link>
                </div>
            </HeightWrapper>
        );
    }
}

export default AuthorizationUser;