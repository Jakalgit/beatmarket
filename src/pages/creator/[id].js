import style from "@/styles/pages/creator_page.module.css"
import Image from "next/image";
import Grid from "@/components/Grid";
import {reformatCount} from "@/logic/functions";
import { motion } from "framer-motion";
import {useState} from "react";
import Beat from "@/components/Beat";
import Pagination from "@/components/Pagination";
import Reviews from "@/components/Popups/Reviews";
import Button from "@/components/Button";

export default function CreatorPage() {

    const [subLoading, setSubLoading] = useState(false)
    const [reviewVisible, setReviewVisible] = useState(false)

    const subscribe = () => {
        setSubLoading(true)
        setTimeout(() => {
            setSubLoading(false)
        }, 2000)
    }

    const updateReviewVisible = (value) => {
        setReviewVisible(value)
    }

    return (
        <div className="height" style={{display: 'flex', flexDirection: 'column'}}>
            <Reviews visible={reviewVisible} setVisible={(value) => updateReviewVisible(value)} />
            <Grid>
                <motion.div
                    className={style.info_block}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                >
                    <Image alt="image" src="" className={style.preview}/>
                    <div className={style.line}>
                        <div className={style.left}>
                            <div className={style.name_above}>
                                <p className={style.name_above_text}>1.2 млн.</p>
                                <div className={style.rating}>
                                    <p className={style.name_above_text}>4.9</p>
                                    <Image alt="star" src={require("@/img/star.png")} className={style.star}/>
                                </div>
                            </div>
                            <h1 className={style.name}>VisaGangBeatz</h1>
                            <div className={style.name_under}>
                                <p className={style.start_time}>с нами уже 576 дней</p>
                                <p onClick={() => setReviewVisible(true)}
                                   className={style.start_time + ' ' + style.text_button}>Отзывы</p>
                            </div>
                            <div className={style.reactions}>
                                <div>
                                    <Image alt="star" src={require("@/img/star.png")} className={style.react_star}/>
                                    <Image alt="star" src={require("@/img/star.png")} className={style.react_star}/>
                                    <Image alt="star" src={require("@/img/star.png")} className={style.react_star}/>
                                    <Image alt="star" src={require("@/img/star.png")} className={style.react_star}/>
                                    <Image alt="star" src={require("@/img/star.png")} className={style.react_star}/>
                                </div>
                                <p className={style.react_count}>{reformatCount("12234782")}</p>
                            </div>
                        </div>
                        <div className={style.right}>
                            <div className={style.send_mail}>
                                <svg className={style.svg_mail} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5833 83.3333C12.9167 83.3333 11.4583 82.7083 10.2083 81.4583C8.95833 80.2083 8.33333 78.75 8.33333 77.0833V22.9166C8.33333 21.25 8.95833 19.7916 10.2083 18.5416C11.4583 17.2916 12.9167 16.6666 14.5833 16.6666H85.4167C87.0833 16.6666 88.5417 17.2916 89.7917 18.5416C91.0417 19.7916 91.6667 21.25 91.6667 22.9166V77.0833C91.6667 78.75 91.0417 80.2083 89.7917 81.4583C88.5417 82.7083 87.0833 83.3333 85.4167 83.3333H14.5833ZM50 51.875L14.5833 28.6458V77.0833H85.4167V28.6458L50 51.875ZM50 45.625L85 22.9166H15.1042L50 45.625ZM14.5833 28.6458V22.9166V77.0833V28.6458Z"/>
                                </svg>
                                <p className={style.send_text}>Написать продавцу</p>
                            </div>
                            <Button
                                onClick={subscribe}
                                text="Подписаться"
                                loading={subLoading}
                                classes={style.sub}
                                color="#304FFE"
                            />
                        </div>
                    </div>
                </motion.div>
                <div className={style.beat_list}>
                    <Grid>
                        <Beat name={'OVERHEAVEN (Synthwave)'} author={'GONE.Fludd'} price={"10000"} />
                        <Beat name={'OVERHEAVEN (Synthwave)'} author={'GONE.Fludd'} price={"10000"} />
                        <Beat name={'OVERHEAVEN (Synthwave)'} author={'GONE.Fludd'} price={"10000"} />
                        <Beat name={'OVERHEAVEN (Synthwave)'} author={'GONE.Fludd'} price={"10000"} />
                        <Beat name={'OVERHEAVEN (Synthwave)'} author={'GONE.Fludd'} price={"10000"} />
                        <Beat name={'OVERHEAVEN (Synthwave)'} author={'GONE.Fludd'} price={"10000"} />
                        <Beat name={'OVERHEAVEN (Synthwave)'} author={'GONE.Fludd'} price={"10000"} />
                        <Beat name={'OVERHEAVEN (Synthwave)'} author={'GONE.Fludd'} price={"10000"} />
                    </Grid>
                </div>
                <Pagination />
            </Grid>
        </div>
    );
};