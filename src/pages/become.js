import global from "@/styles/global.module.css"
import style_fb from "@/styles/pages/support.module.css"
import style from "@/styles/pages/become.module.css"
import Grid from "@/components/Grid";
import Image from "next/image";
import {motion} from "framer-motion";
import HeightWrapper from "@/components/HeightWrapper";
import Button from "@/components/Button";

const Become = () => {
    return (
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
                    <p className={style.data}>+7(***)-***-26-96</p>
                    <p className={style.data + ' ' + style.danger}>E-Mail не указан</p>
                </div>
                <div className={style.line}>
                    <Button
                        text="Подтвердить"
                        classes={style_fb.button_div + ' ' + style.btn_mt}
                        loading={false}
                        color="#304FF3"
                    />
                </div>
            </HeightWrapper>
        </Grid>
    );
};

export default Become;