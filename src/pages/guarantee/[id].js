import style from "@/styles/pages/guarantee.module.css"
import global from "@/styles/global.module.css"
import HeightWrapper from "@/components/HeightWrapper";
import Grid from "@/components/Grid";
import Button from "@/components/Button";

const Guarantee = () => {
    return (
        <Grid>
            <HeightWrapper dir="column" >
                <div className={global.head}>
                    Подтверждение покупки <p className={global.underline}>№123124</p>
                </div>
                <div className={global.text + ' ' + global.txt_mt}>
                    Ваша оплата зарезервирована маркетплейсом, чтобы окончательно завершить сделку Вы и Продавец должны подтвердить
                    покупку. Если хотя бы одна из сторон не подтвердить покупку в течении <p className={global.bold}>24 часов</p>,
                    то покупка отменятся, вам возвращаются
                    ваши денежные средства.
                </div>
                <h2 className={
                    global.imt + ' ' +
                    global.underline + ' ' +
                    style.important
                }>
                    Внимание!
                </h2>
                <p className={global.text + ' ' + global.txt_mt}>
                    Если вам нужно подписать договор с продавцом о передаче прав (эксклюзивные права), то нужно подписать его до
                    нажатия кнопки “Подтверждаю”. При наличии иных договорённостей которые требуется задукоментировать так же
                    рекомендуется сделать это до нажатия кнопки “Подтверждаю”.
                </p>
                <p className={style.end + ' ' + global.bold}>
                    Покупка завершается после подтверждения с обоеих сторон.
                </p>
                <div className={style.timeBlock}>
                    <p className={style.time}>21 : 34 : 12</p>
                </div>
                <div className={style.line}>
                    <Button
                        text="Продлить на 24 часа"
                        loading={false}
                        classes={style.buttonWrapper}
                        color="#304FFE"
                    />
                    <Button
                        text="Отказаться от покупки"
                        loading={false}
                        classes={style.buttonWrapper + ' ' + style.refusal}
                        color="#F44336"
                    />
                    <Button
                        text="Подтвердить"
                        loading={false}
                        classes={style.buttonWrapper + ' ' + style.confirm}
                        color="#304FFE"
                    />
                </div>
            </HeightWrapper>
        </Grid>
    );
};

export default Guarantee;