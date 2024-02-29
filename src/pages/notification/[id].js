import global from "@/styles/global.module.css"
import Grid from "@/components/Grid";
import HeightWrapper from "@/components/HeightWrapper";
import style_quest from "@/styles/pages/questions.module.css"
import style_fb from "@/styles/pages/support.module.css";
import style from "@/styles/pages/notification.module.css"
import Button from "@/components/Button";
import {serverSideValidationToken} from "@/logic/functions";
import AuthorizationUser from "@/components/AuthorizationUser";

function Notification({ validation }) {
    return (
        <AuthorizationUser validation={validation}>
            <Grid>
                <HeightWrapper dir="column">
                    <h1 className={global.head}>Уведомление №12345551</h1>
                    <div className={style.block}>
                        <p className={style.text}>
                            Необходимо добавить почту в ваш аккаунт, иначе вы не сможете восстановить к нему доступ при утере пароля.
                        </p>
                    </div>
                    <div className={style.line + ' ' + style_quest.btn_mt}>
                        <p className={style.date}>12.02.2023</p>
                        <p className={style.date + ' ' + style.time}>19:32</p>
                        <Button
                            text="Назад"
                            classes={style_fb.button_div + ' ' + style.button}
                            color="#304FFE"
                        />
                    </div>
                </HeightWrapper>
            </Grid>
        </AuthorizationUser>
    );
}

export async function getServerSideProps({ req, res }) {

    const validation = await serverSideValidationToken({req, res})

    return {props: {validation}}
}

export default Notification;