import HeightWrapper from "@/components/HeightWrapper";
import Grid from "@/components/Grid";
import style from "@/styles/pages/file.module.css"
import global from "@/styles/global.module.css"
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import AuthorizationUser from "@/components/AuthorizationUser";
import {serverSideValidationToken} from "@/logic/functions";

function File({ validation }) {
    return (
        <AuthorizationUser validation={validation}>
            <Grid>
                <HeightWrapper dir="column" >
                    <h1 className={global.head}>Спасибо за покупку!</h1>
                    <p className={global.text + ' ' + global.txt_mt}>
                        Для того чтобы получить купленные вами файлы скачайте архив.
                    </p>
                    <div className={style.file}>
                        <p className={style.download}>
                            Нажмите чтобы скачать
                        </p>
                        <svg
                            className={style.svg}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 15.875C11.9 15.875 11.8083 15.8583 11.725 15.825C11.6417 15.7917 11.5583 15.7333 11.475 15.65L7.7 11.875C7.55 11.725 7.47917 11.5458 7.4875 11.3375C7.49583 11.1292 7.575 10.95 7.725 10.8C7.875 10.65 8.05417 10.575 8.2625 10.575C8.47083 10.575 8.65 10.65 8.8 10.8L11.25 13.275V4.75C11.25 4.53333 11.3208 4.35417 11.4625 4.2125C11.6042 4.07083 11.7833 4 12 4C12.2167 4 12.3958 4.07083 12.5375 4.2125C12.6792 4.35417 12.75 4.53333 12.75 4.75V13.275L15.225 10.8C15.375 10.65 15.5542 10.575 15.7625 10.575C15.9708 10.575 16.15 10.65 16.3 10.8C16.45 10.95 16.525 11.1292 16.525 11.3375C16.525 11.5458 16.45 11.725 16.3 11.875L12.525 15.65C12.4417 15.7333 12.3583 15.7917 12.275 15.825C12.1917 15.8583 12.1 15.875 12 15.875ZM5.5 20C5.1 20 4.75 19.85 4.45 19.55C4.15 19.25 4 18.9 4 18.5V15.675C4 15.4583 4.07083 15.2792 4.2125 15.1375C4.35417 14.9958 4.53333 14.925 4.75 14.925C4.96667 14.925 5.14583 14.9958 5.2875 15.1375C5.42917 15.2792 5.5 15.4583 5.5 15.675V18.5H18.5V15.675C18.5 15.4583 18.5708 15.2792 18.7125 15.1375C18.8542 14.9958 19.0333 14.925 19.25 14.925C19.4667 14.925 19.6458 14.9958 19.7875 15.1375C19.9292 15.2792 20 15.4583 20 15.675V18.5C20 18.9 19.85 19.25 19.55 19.55C19.25 19.85 18.9 20 18.5 20H5.5Z" />
                        </svg>
                    </div>
                    <div className={style.underText}>
                        Возникли проблемы с файлом? Сообщите об этом <p className={style.href + ' ' + global.underline}>продавцу</p>.<br/>
                        Если проблема не решана - напишите в {"\n"}
                        <Link className={style.href + ' ' + global.underline} href="/support">
                            поддрежку
                        </Link>.<br/>
                        <p className={global.bold}>Мы всегда готовы вам помочь!</p>
                    </div>
                    <div className={style.authorBlock}>
                        <Image src="" alt="preview" className={style.preview}/>
                        <Button
                            text="Оставьте отзыв о продавце"
                            loading={false}
                            classes={style.button}
                            color="#304FFe"
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

export default File;