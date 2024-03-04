import global from "@/styles/global.module.css"
import style_fb from "@/styles/pages/support.module.css"
import style from "@/styles/pages/become.module.css"
import Grid from "@/components/Grid";
import Image from "next/image";
import HeightWrapper from "@/components/HeightWrapper";
import Button from "@/components/Button";
import {add_notification, getUserInfoByToken, serverSideValidationToken} from "@/logic/functions";
import AuthorizationUser from "@/components/AuthorizationUser";
import {getCookie} from "cookies-next";
import {getOneUser} from "@/http/api/userApi";
import {useActions} from "@/hooks/useActions";

const Become = ({ validation, email, phone }) => {

    const {addNotification} = useActions()

    const confirmCreator = () => {
        if (email && phone) {

        } else {
            add_notification("Ошибка", "Для регистрации аккаунта создателя в вашем профиле должны" +
                " быть E-Mail и номер телефона", 1, addNotification)
        }
    }

    return (
        <AuthorizationUser validation={validation}>
            <Grid>
                <HeightWrapper dir="column">
                    <h1 className={global.head}>Аккаунт создателя</h1>
                    <p className={global.text + ' ' + global.txt_mt}>
                        Продавайте свои музыкальные произведения, собирайте звезды чтобы оказаться в списках лучших,
                        станьте одним из самых
                        продаваемых бит-мейкеров, а мы вам поможем!
                    </p>
                    <div className={style.line + ' ' + style.stars}>
                        <Image src={require("@/img/star.png")} alt="img" className={style.star}/>
                        <Image src={require("@/img/star.png")} alt="img" className={style.star}/>
                        <Image src={require("@/img/star.png")} alt="img" className={style.star}/>
                        <Image src={require("@/img/star.png")} alt="img" className={style.star}/>
                        <Image src={require("@/img/star.png")} alt="img" className={style.star}/>
                    </div>
                    <div className={global.text}>
                        Для того чтобы продолжить, требуестя подтвердить ваш номер телефона и пароль,
                        на них придут коды которые нужно ввести на сайте. Вводите свои достоверные данные,
                        так мы сможем вам помочь при утере пароля.  После регистрации вам потребуется оплатить
                        регистрационный сбор в размере <p className={global.bold}>389 ₽</p>.
                    </div>
                    <div className={style.dates}>
                        {phone ?
                            <p className={style.data}>{phone}</p>
                            :
                            <p className={style.data + ' ' + style.danger}>Номер телефона не указан</p>
                        }
                        {email ?
                            <p className={style.data}>{email}</p>
                            :
                            <p className={style.data + ' ' + style.danger}>E-Mail не указан</p>
                        }
                    </div>
                    <div className={style.line}>
                        <Button
                            text="Подтвердить"
                            classes={style_fb.button_div + ' ' + style.btn_mt}
                            loading={false}
                            color="#304FF3"
                            onClick={confirmCreator}
                        />
                    </div>
                </HeightWrapper>
            </Grid>
        </AuthorizationUser>
    );
};

export async function getServerSideProps({ req, res }) {

    const validation = await serverSideValidationToken({req, res})

    let email = null, phone = null
    if (validation) {
        const token = getCookie('act',{ req, res })
        const {user} = getUserInfoByToken(token)
        const u = await getOneUser(user.id, token)
        email = u.email
        phone = u.phone
    }

    return {props: {validation, email, phone}}
}

export default Become;