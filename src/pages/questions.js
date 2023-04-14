import global from "@/styles/global.module.css"
import style from "@/styles/pages/questions.module.css"
import Grid from "@/components/Grid";
import {motion} from "framer-motion";
import {useState} from "react";
import Question_1 from "@/components/QuestionsLayouts/Question_1";
import Question_2 from "@/components/QuestionsLayouts/Question_2";
import Question_3 from "@/components/QuestionsLayouts/Question_3";
import HeightWrapper from "@/components/HeightWrapper";

const Questions = () => {

    const [currentQuest, setCurrentQuest] = useState(-1)

    const updateCurrentQuest = (value) => {
        setCurrentQuest(value)
    }

    return (
        <HeightWrapper dir="column" JSX={
            <Grid>
                {currentQuest === -1 &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <h1 className={global.head + ' ' + style.head}>Часто задаваемые вопросы</h1>
                        <div className={style.list}>
                            <p onClick={() => setCurrentQuest(1)} className={style.href}>Как рассчитывается комиссия при покупке?</p>
                            <p onClick={() => setCurrentQuest(2)} className={style.href}>Как работает подтверждение покупки?</p>
                            <p onClick={() => setCurrentQuest(3)} className={style.href}>Как продавать свои биты?</p>
                            <p className={style.href + ' ' + style.policy}>Пользовательское соглашение</p>
                        </div>
                    </motion.div>
                }
                {currentQuest === 1 &&
                    <Question_1 setCurrentQuest={(value) => updateCurrentQuest(value)} />
                }
                {currentQuest === 2 &&
                    <Question_2 setCurrentQuest={(value) => updateCurrentQuest(value)} />
                }
                {currentQuest === 3 &&
                    <Question_3 setCurrentQuest={(value) => updateCurrentQuest(value)} />
                }
            </Grid>
        } />
    );
};

export default Questions;