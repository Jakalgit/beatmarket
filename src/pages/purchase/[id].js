import style_variants from "@/styles/components/variants.module.css"
import style from "@/styles/pages/purchase.module.css"
import style_file from "@/styles/pages/file.module.css"
import global from "@/styles/global.module.css"
import Grid from "@/components/Grid";
import HeightWrapper from "@/components/HeightWrapper";
import Image from "next/image";
import {motion} from "framer-motion";
import Button from "@/components/Button";
import Link from "next/link";

const Purchase = () => {
    return (
        <Grid>
            <HeightWrapper dir="column">
                <h1 className={global.head + ' ' + style.head}>Покупка №261451924</h1>
                <div className={style.line}>
                    <Image src={require("@/img/preview.png")} alt="preview" className={style.preview} />
                    <div className={style.block}>
                        <h1 className={style.name}>OVERHEAVEN (Synthwave)</h1>
                        <p className={style.bpm}>170 bpm</p>
                        <p className={style.license}>Безлимитная аренда (MP3 + WAV + TrackOut)</p>
                    </div>
                    <div className={style.block + ' ' + style.right}>
                        <p className={style.name + ' ' + style.price}>30 000 ₽</p>
                        <p className={style.name + ' ' + style.date}>12.02.2023</p>
                    </div>
                </div>
                <div className={style.line + ' ' + style.mt_line}>
                    <div className={style.list + ' ' + style_variants.conditions}>
                        {[1, 1, 1].map(() =>
                            <>
                                <motion.div
                                    className={style_variants.condition}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false }}
                                >
                                    <div className={style_variants.dot}/>
                                    <div className={style_variants.cond_text + ' ' + style.conditionText}>
                                        Вы получаете инструментал в форматах mp3, WAV и раскладку по дорожкам высокого качества без защитных звуковых тэгов.
                                    </div>
                                </motion.div>
                                <motion.div
                                    className={style_variants.condition}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false }}
                                >
                                    <div className={style_variants.dot}/>
                                    <div className={style_variants.cond_text + ' ' + style.conditionText}>
                                        Количество прослушиваний и срок лицензии: не ограничено.
                                    </div>
                                </motion.div>
                                <motion.div
                                    className={style_variants.condition}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false }}
                                >
                                    <div className={style_variants.dot}/>
                                    <div className={style_variants.cond_text + ' ' + style.conditionText}>
                                        Инструментал остается в продаже до покупки эксклюзивных прав. Кто выкупает полностью бит, подписывает договор что не может препятствовать распространению треков, взятых в аренду. Поэтому можете не переживать, треки на арендованные биты остаются у вас, и ни кто их не заблокирует.
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </div>
                    <div className={style.right + ' ' + style.ml_0}>
                        <Button
                            text="Оставьте отзыв о продавце"
                            color="#304FFE"
                            classes={style.button}
                        />
                        <p className={style.href + ' ' + global.underline}>GONE.Fludd</p>
                    </div>
                </div>
                <div className={style_file.file}>
                    <p className={style_file.download}>
                        Нажмите чтобы скачать
                    </p>
                    <svg
                        className={style_file.svg}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 15.875C11.9 15.875 11.8083 15.8583 11.725 15.825C11.6417 15.7917 11.5583 15.7333 11.475 15.65L7.7 11.875C7.55 11.725 7.47917 11.5458 7.4875 11.3375C7.49583 11.1292 7.575 10.95 7.725 10.8C7.875 10.65 8.05417 10.575 8.2625 10.575C8.47083 10.575 8.65 10.65 8.8 10.8L11.25 13.275V4.75C11.25 4.53333 11.3208 4.35417 11.4625 4.2125C11.6042 4.07083 11.7833 4 12 4C12.2167 4 12.3958 4.07083 12.5375 4.2125C12.6792 4.35417 12.75 4.53333 12.75 4.75V13.275L15.225 10.8C15.375 10.65 15.5542 10.575 15.7625 10.575C15.9708 10.575 16.15 10.65 16.3 10.8C16.45 10.95 16.525 11.1292 16.525 11.3375C16.525 11.5458 16.45 11.725 16.3 11.875L12.525 15.65C12.4417 15.7333 12.3583 15.7917 12.275 15.825C12.1917 15.8583 12.1 15.875 12 15.875ZM5.5 20C5.1 20 4.75 19.85 4.45 19.55C4.15 19.25 4 18.9 4 18.5V15.675C4 15.4583 4.07083 15.2792 4.2125 15.1375C4.35417 14.9958 4.53333 14.925 4.75 14.925C4.96667 14.925 5.14583 14.9958 5.2875 15.1375C5.42917 15.2792 5.5 15.4583 5.5 15.675V18.5H18.5V15.675C18.5 15.4583 18.5708 15.2792 18.7125 15.1375C18.8542 14.9958 19.0333 14.925 19.25 14.925C19.4667 14.925 19.6458 14.9958 19.7875 15.1375C19.9292 15.2792 20 15.4583 20 15.675V18.5C20 18.9 19.85 19.25 19.55 19.55C19.25 19.85 18.9 20 18.5 20H5.5Z" />
                    </svg>
                </div>
                <div className={style_file.underText + ' ' + style.underText}>
                    Возникли проблемы с файлом? Сообщите об этом <p className={style_file.href + ' ' + global.underline}>продавцу</p>.<br/>
                    Если проблема не решана - напишите в {"\n"}
                    <Link className={style_file.href + ' ' + global.underline} href="/support">
                        поддрежку
                    </Link>.<br/>
                    <p className={global.bold}>Мы всегда готовы вам помочь!</p>
                </div>
            </HeightWrapper>
        </Grid>
    );
};

export default Purchase;