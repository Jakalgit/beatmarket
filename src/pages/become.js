import style_fb from "@/styles/pages/support.module.css"
import style from "@/styles/pages/become.module.css"
import Grid from "@/components/Grid";
import Image from "next/image";
import {motion} from "framer-motion";

const Become = () => {
    return (
        <div className="height" style={{display: 'flex', flexDirection: 'column'}}>
            <Grid>
                <motion.div
                    className={style_fb.pd}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <h1 className={style_fb.head}>Аккаунт создателя</h1>
                    <p className={style_fb.text + ' ' + style_fb.txt_mt}>
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
                    <div className={style_fb.text}>
                        Для того чтобы продолжить, требуестя подтвердить ваш номер телефона и пароль,
                        на них придут коды которые нужно ввести на сайте. Вводите свои достоверные данные,
                        так мы сможем вам помочь при утере пароля.  После регистрации вам потребуется оплатить
                        регистрационный сбор в размере <p className={style_fb.bold}>389 ₽</p>.
                    </div>
                    <div className={style.dates}>
                        <p className={style.data}>+7(***)-***-26-96</p>
                        <p className={style.data + ' ' + style.danger}>E-Mail не указан</p>
                    </div>
                    <div>

                    </div>
                    <div className={style.line}>
                        <div className={style_fb.button_div + ' ' + style.btn_mt}>
                            <motion.button
                                className={style_fb.button}
                                whileTap={{scale: 0.95}}
                            >
                                Подтвердить
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </Grid>
        </div>
    );
};

export default Become;