import Grid from "@/components/Grid";
import {Col} from "react-bootstrap";
import style from "@/styles/pages/messages.module.css"
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import Attention from "@/components/Popups/Attention";

const Messages = () => {

    const [maxHeight, setMaxHeight] = useState(140)
    const [message, setMessage] = useState('')

    const textareaRef = useRef(null)
    const underLineRef = useRef(null)
    const scrollableRef = useRef(null)
    let scrollFirst = true

    const [currentChat, setCurrentChat] = useState(null)

    const [showSend, setShowSend] = useState(false)

    const [attention, setAttention] = useState(false)
    const [delChatId, setDelChatId] = useState(-1)

    if (typeof(window) !== "undefined") {
        useEffect(() => {
            const width = window.innerWidth
            if (width > 991 && width <= 1299) {
                setMaxHeight(100)
            } else if (width > 767 && width <= 991) {

            }
        }, [window])
    }

    useEffect(() => {
        if (scrollFirst) {
            scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight
            scrollFirst = false
        } else if (scrollableRef.current.scrollTop + scrollableRef.current.clientHeight === scrollableRef.current.scrollHeight) {
            scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight
        }
    }, [scrollableRef])

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight
        if (scrollHeight + 4 < maxHeight) {
            underLineRef.current.style.height = scrollHeight + 15 + "px"
            textareaRef.current.style.height = scrollHeight + "px"
        } else {
            underLineRef.current.style.height = maxHeight + 15 + "px"
            textareaRef.current.style.height = maxHeight + "px"
        }
        if (message) {
            setShowSend(true)
        } else {
            setShowSend(false)
        }
    }, [message])

    const updateAttention = (value) => {
        setAttention(value)
    }

    const updateDeleteChat = (value) => {
        setDelChatId(value)
    }

    return (
        <div className="height" style={{display: 'flex', flexDirection: 'column'}}>
            <Attention visible={attention} setVisible={(value) => updateAttention(value)} setDelChat={(value) => updateDeleteChat(value)} />
            <Grid>
                <Col xxl={4}>
                    <div className={style.chats + ' ' + style.scl}>
                        {[1,1,1,1,1,1,1,1,1,1,1,1,1].map(() =>
                            <div className={style.chat}>
                                <Image src="" alt="prof-img" className={style.chat_preview}/>
                                <div className={style.middle}>
                                    <h1 className={style.chat_name}>CAKE BUY BEATS</h1>
                                    <p className={style.last_message}>Какое-то сообщение от пользователя</p>
                                </div>
                                <div className={style.right}>
                                    <p className={style.time}>19:24</p>
                                    <p className={style.message_view}>1</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Col>
                <Col xxl={8}>
                    <div className={style.area}>
                        <div className={style.head_line}>
                            <h1 className={style.name}>CAKE BUY BEATS</h1>
                            <svg onClick={() => setAttention(true)} className={style.delete} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                                <path d="M261 936q-24 0-42-18t-18-42V306h-11q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190 246h158q0-13 8.625-21.5T378 216h204q12.75 0 21.375 8.625T612 246h158q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770 306h-11v570q0 24-18 42t-42 18H261Zm0-630v570h438V306H261Zm106 454q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T427 760V421q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T367 421v339Zm166 0q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T593 760V421q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T533 421v339ZM261 306v570-570Z"/>
                            </svg>
                            <p className={style.user_id}>@cakebuybeats</p>
                        </div>
                        <div className={style.view_area + ' ' + style.scl} ref={scrollableRef}>
                            <div className={style.ribbon}>
                                <p className={style.day}>14 февраля</p>
                                {[1,2,1,2,1,2,1,2,1,2].map(i =>
                                    <div className={(i === 1 ? style.left_message : style.right_message) + ' ' + style.line_message}>
                                        <div className={style.message}>
                                            <p className={style.message_text}>Здравствуйте, сколько стоит вот этот бит?</p>
                                            <div className={style.message_under_line}>
                                                <div>
                                                    <svg className={style.viewed_svg + ' ' + style.viewed_left} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.74994 6.73744L2.01244 4.99994L1.42078 5.58744L3.74994 7.9166L8.74994 2.9166L8.16244 2.3291L3.74994 6.73744Z"/>
                                                    </svg>
                                                    <svg className={style.viewed_svg} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.74994 6.73744L2.01244 4.99994L1.42078 5.58744L3.74994 7.9166L8.74994 2.9166L8.16244 2.3291L3.74994 6.73744Z"/>
                                                    </svg>
                                                </div>
                                                <p className={style.message_time}>21:38</p>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                        <div ref={underLineRef} className={style.under_line}>
                            <div style={{display: "flex", alignItems: "center", flex: "1 0 auto"}}>
                                <textarea
                                    ref={textareaRef}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="1"
                                    className={style.content}
                                    placeholder="Введите текст..."
                                />
                                {showSend ?
                                    <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                                        <path d="M120 851V301q0-16 13.5-24.5T162 274l652 274q18 8 18 28t-18 28L162 878q-15 6-28.5-2.5T120 851Zm60-48 544-227-544-230v168l242 62-242 60v167Zm0-227V346v457-227Z"/>
                                    </svg>
                                    :
                                    <svg className={style.svg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5 22.175C9.93328 22.175 8.59578 21.6376 7.48745 20.5625C6.37912 19.4875 5.82495 18.1667 5.82495 16.6V5.77505C5.82495 4.67505 6.21662 3.73755 6.99995 2.96255C7.78328 2.18755 8.73328 1.80005 9.84995 1.80005C10.9666 1.80005 11.9125 2.18755 12.6875 2.96255C13.4625 3.73755 13.85 4.68338 13.85 5.80005V15.7C13.85 16.35 13.625 16.9084 13.175 17.375C12.725 17.8417 12.1666 18.0751 11.5 18.0751C10.8333 18.0751 10.275 17.8251 9.82495 17.325C9.37495 16.825 9.14995 16.2417 9.14995 15.575V6.30005C9.14995 6.15005 9.20412 6.01672 9.31245 5.90005C9.42078 5.78338 9.55828 5.72505 9.72495 5.72505C9.87495 5.72505 10.0041 5.78338 10.1125 5.90005C10.2208 6.01672 10.275 6.15005 10.275 6.30005V15.65C10.275 16 10.3958 16.3 10.6375 16.55C10.8791 16.8 11.1666 16.925 11.5 16.925C11.8333 16.925 12.1208 16.8042 12.3625 16.5625C12.6041 16.3209 12.725 16.0334 12.725 15.7V5.77505C12.725 4.97505 12.4458 4.30005 11.8875 3.75005C11.3291 3.20005 10.65 2.92505 9.84995 2.92505C9.04995 2.92505 8.37078 3.20005 7.81245 3.75005C7.25412 4.30005 6.97495 4.97505 6.97495 5.77505V16.65C6.97495 17.8834 7.41662 18.9209 8.29995 19.7626C9.18328 20.6042 10.25 21.025 11.5 21.025C12.7666 21.025 13.8375 20.6 14.7125 19.75C15.5875 18.9 16.025 17.85 16.025 16.6V6.30005C16.025 6.15005 16.0833 6.01672 16.2 5.90005C16.3166 5.78338 16.45 5.72505 16.6 5.72505C16.75 5.72505 16.8833 5.78338 17 5.90005C17.1166 6.01672 17.175 6.15005 17.175 6.30005V16.575C17.175 18.1417 16.6208 19.4667 15.5125 20.55C14.4041 21.6334 13.0666 22.175 11.5 22.175Z"/>
                                    </svg>
                                }
                            </div>
                        </div>
                    </div>
                </Col>
            </Grid>
        </div>
    );
};

export default Messages;