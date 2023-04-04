import style_fb from "@/styles/pages/support.module.css"
import style from "@/styles/pages/questions.module.css"
import Grid from "@/components/Grid";
import {motion} from "framer-motion";
import {useState} from "react";
import Question_1 from "@/components/QuestionsLayouts/Question_1";

const Questions = () => {

    const [currentQuest, setCurrentQuest] = useState(-1)

    return (
        <div className="height" style={{display: 'flex', flexDirection: 'column'}}>
            <Grid>
                <motion.div
                    className={style_fb.pd}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    {currentQuest === -1 &&
                        <>
                            <h1 className={style_fb.head + ' ' + style.head}>Часто задаваемые вопросы</h1>
                            <div className={style.list}>
                                <p onClick={() => setCurrentQuest(1)} className={style.href}>Как рассчитывается комиссия при покупке?</p>
                                <p className={style.href}>Как работает подтверждение покупки?</p>
                                <p className={style.href}>Как продавать свои биты?</p>
                                <p className={style.href + ' ' + style.policy}>Пользовательское соглашение</p>
                            </div>
                        </>
                    }
                    {currentQuest === 1 &&
                        <Question_1 />
                    }
                </motion.div>
            </Grid>
        </div>
    );
};

export default Questions;