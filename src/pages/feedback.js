import Grid from "@/components/Grid";
import style from "@/styles/pages/feedback.module.css"

export default function Feedback() {
    return (
        <div className="height" style={{display: 'flex', flexDirection: 'column'}}>
            <Grid>
                <h1 className={style.head}>Обратная связь</h1>
            </Grid>
        </div>
    );
};