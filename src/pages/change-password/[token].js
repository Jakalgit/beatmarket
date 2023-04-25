import style_in from "@/styles/pages/signin.module.css"
import style from "@/styles/pages/change_password.module.css"
import HeightWrapper from "@/components/HeightWrapper";

const ChangePassword = () => {
    return (
        <HeightWrapper dir="column">
            <div className={style_in.center}>
                <h1 className={style_in.head}>Новый пароль</h1>
            </div>
        </HeightWrapper>
    );
};

export default ChangePassword;