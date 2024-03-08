import React from 'react';
import style from "@/styles/pages/messages.module.css";

const TextMessage = ({ message, compId }) => {
    return (
        <div className={(message.userId === compId ? style.left_message : style.right_message)
            + ' ' + style.line_message}
        >
            <div className={style.message}>
                <p className={style.message_text}>{message.text}</p>
                <div className={style.message_under_line}>
                    <div>
                        <svg className={style.viewed_svg + ' ' + style.viewed_left}
                             viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.74994 6.73744L2.01244 4.99994L1.42078 5.58744L3.74994 7.9166L8.74994 2.9166L8.16244 2.3291L3.74994 6.73744Z"/>
                        </svg>
                        <svg className={style.viewed_svg} viewBox="0 0 10 10"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.74994 6.73744L2.01244 4.99994L1.42078 5.58744L3.74994 7.9166L8.74994 2.9166L8.16244 2.3291L3.74994 6.73744Z"/>
                        </svg>
                    </div>
                    <p className={style.message_time}>21:38</p>
                </div>
            </div>
        </div>
    );
};

export default TextMessage;