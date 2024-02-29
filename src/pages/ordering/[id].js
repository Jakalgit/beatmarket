import style from "@/styles/pages/ordering.module.css"
import Image from "next/image";
import Grid from "@/components/Grid";
import {motion} from "framer-motion";
import {useState} from "react";
import HeightWrapper from "@/components/HeightWrapper";
import Button from "@/components/Button";
import AuthorizationUser from "@/components/AuthorizationUser";
import {serverSideValidationToken} from "@/logic/functions";

function Ordering({ validation }) {

    const [currentPay, setCurrentPay] = useState(-1)

    const payTypes = [
        {
            id: 1,
            image: require("@/img/payment/card.png"),
            name: "VISA / Mastercard / МИР"
        },
        {
            id: 2,
            image: require("@/img/payment/yoomoney.png"),
            name: "Яндекс Деньги (Юmoney)"
        },
        {
            id: 3,
            image: require("@/img/payment/qiwi.png"),
            name: "Qiwi Кошелёк"
        },
        {
            id: 4,
            image: require("@/img/payment/webmoney.png"),
            name: "Webmoney"
        }
    ]

    return (
        <AuthorizationUser validation={}>
            <HeightWrapper dir="column">
                <Grid>
                    <div className={style.line}>
                        <Image alt="preview" src={require("@/img/preview.png")} className={style.preview} />
                        <div className={style.nameBlock}>
                            <p className={style.name}>OVERHEAVEN (Synthwave)</p>
                            <p className={style.bpm}>170 bpm</p>
                            <p className={style.type}>Безлимитная аренда (MP3 + WAV + TrackOut)</p>
                            <p className={style.intoAccount}>С учётом скидок</p>
                            <p className={style.name}>К оплате: 30 000 ₽  </p>
                        </div>
                        <Button
                            text="Подтвердить и оформить"
                            classes={style.buttonWrapper + ' ' + style.checkout}
                            loading={false}
                            color="#304FFE"
                        />
                    </div>
                    <div className={style.line + ' ' + style.under}>
                        <div className={style.typePay}>
                            <p className={style.typePayText}>Способ оплаты</p>
                            {payTypes.map(type =>
                                <div className={style.payBlock} onClick={() => setCurrentPay(type.id)}>
                                    <Image src={type.image} alt="image" className={style.payImage} />
                                    <p className={style.payName}>{type.name}</p>
                                    <motion.div
                                        className={style.currentPay}
                                        animate={{opacity: currentPay === type.id ? 1 : 0}}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={style.conditionsBlock}>
                            <div className={style.conditions}>
                                <div className={style.condition}>
                                    <div className={style.dot} />
                                    <p className={style.text}>
                                        Вы получаете инструментал в форматах mp3, WAV и раскладку по дорожкам высокого качества без защитных звуковых тэгов.
                                    </p>
                                </div>
                                <div className={style.condition}>
                                    <div className={style.dot} />
                                    <p className={style.text}>
                                        Количество прослушиваний и срок лицензии: не ограничено
                                    </p>
                                </div>
                                <div className={style.condition}>
                                    <div className={style.dot} />
                                    <p className={style.text}>
                                        Инструментал остается в продаже до покупки эксклюзивных прав. Кто выкупает полностью бит, подписывает договор что не может препятствовать распространению треков, взятых в аренду. Поэтому можете не переживать, треки на арендованные биты остаются у вас, и ни кто их не заблокирует.
                                    </p>
                                </div>
                            </div>
                            <p className={style.note}>
                                При покупке эксклюзива вы можете договориться с продавцом о подписи контракта, если его требуется подписать
                            </p>
                        </div>
                        <div className={style.right}>
                            <div className={style.line + ' ' + style.small_line}>
                                <input type="text" className={style.input + ' ' + style.code} placeholder="Промокод"/>
                                <Button
                                    text="Активировать"
                                    classes={style.buttonWrapper + ' ' + style.activate}
                                    loading={false}
                                    color="#304FFE"
                                />
                            </div>
                            <input type="text" className={style.input + ' ' + style.fio} placeholder="ФИО*"/>
                        </div>
                    </div>
                </Grid>
                <div className={style.infoBlock}>
                    <div className={style.info + ' ' + style.infoSmall}>
                        При нажатии кнопки “Подтвердить и оформить” вы соглашаетесь с <p className={style.href}>пользовательским соглашением</p>.
                    </div>
                    <div className={style.info + ' ' + style.infoLarge}>
                        Информацию о покупке вы сможете посмотреть в разделе <p className={style.href}>“Мои покупки”</p>.
                    </div>
                </div>
            </HeightWrapper>
        </AuthorizationUser>
    );
}

export async function getServerSideProps({ req, res }) {

    const validation = await serverSideValidationToken({req, res})

    return {props: {validation}}
}

export default Ordering;