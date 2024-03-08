import Grid from "@/components/Grid";
import {Col} from "react-bootstrap";
import style from "@/styles/pages/messages.module.css"
import Image from "next/image";
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import Attention from "@/components/Popups/Attention";
import {useActions} from "@/hooks/useActions";
import {serverSideValidationToken} from "@/logic/functions";
import HeightWrapper from "@/components/HeightWrapper";
import AuthorizationUser from "@/components/AuthorizationUser";
import SendFile from "@/components/SendFIle/SendFile";
import {getChats, getUsersByFinder} from "@/http/api/chatApi";
import {getCookie} from "cookies-next";
import {useSpring, animated, config} from 'react-spring';
import jwtDecode from "jwt-decode";

export default function Messages( { validation, chatsSSR }) {

    const [windowWidth, setWindowWidth] = useState(-1)

    const [message, setMessage] = useState('')
    const [finder, setFinder] = useState('')

    const [finderUsers, setFinderUsers] = useState([])
    const [loadingFinder, setLoadingFinder] = useState(false)
    const [showTips, setShowTips] = useState(false)
    const [zIndexTips, setZIndexTips] = useState(1)

    const inputMessageLineRef = useRef(null)
    const textAreaRef = useRef(null)
    const [inputLineHeight, setInputLineHeight] = useState(0)

    const textareaRef = useRef(null)
    const underLineRef = useRef(null)
    const scrollableRef = useRef(null)
    const findRef = useRef(null)
    let scrollFirst = true

    const [chats, setChats] = useState(chatsSSR)
    const [currentChat, setCurrentChat] = useState(null)

    const [showSend, setShowSend] = useState(false)

    const [showArea, setShowArea] = useState(false)
    const [opacityArea, setOpacityArea] = useState(1)

    const [showSelector, setShowSelector] = useState(false)
    const [opacitySelectorWrap, setOpacitySelectorWrap] = useState(0)
    const [selectorWrapDisplay, setSelectorWrapDisplay] = useState("none")

    const [showList, setShowList] = useState(true)
    const [opacityList, setOpacityList] = useState(1)

    const [attention, setAttention] = useState(false)
    const [delChatId, setDelChatId] = useState(-1)

    const {addNotification} = useActions()

    const animation = useSpring({
        opacity: showTips ? 1 : 0,
        transform: showTips ? 'translateY(0)' : 'translateY(40px)',
        config: {...config.gentle, duration: 100},
        zIndex: zIndexTips,
    })

    if (typeof(window) !== "undefined") {
        useEffect(() => {
            setWindowWidth(window.innerWidth)
            const width = window.innerWidth

            if (width <= 767) {
                setShowArea(false)
            } else {
                setOpacityArea(1)
                setOpacityList(1)
                setShowArea(true)
                setShowList(true)
            }
        }, [window])
    }

    // useEffect(() => {
    //     if (scrollFirst) {
    //         scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight
    //         scrollFirst = false
    //     } else if (scrollableRef.current.scrollTop + scrollableRef.current.clientHeight === scrollableRef.current.scrollHeight) {
    //         scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight
    //     }
    // }, [scrollableRef])

    useEffect(() => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
        }
    }, [scrollableRef]);

    // useEffect(() => {
    //     if (showArea) {
    //         textareaRef.current.style.height = "0px";
    //         const scrollHeight = textareaRef.current.scrollHeight
    //         if (scrollHeight + 4 < maxHeight) {
    //             underLineRef.current.style.height = scrollHeight + 15 + "px"
    //             textareaRef.current.style.height = scrollHeight + "px"
    //         } else {
    //             underLineRef.current.style.height = maxHeight + 15 + "px"
    //             textareaRef.current.style.height = maxHeight + "px"
    //         }
    //         if (message) {
    //             setShowSend(true)
    //         } else {
    //             setShowSend(false)
    //         }
    //     }
    // }, [message])

    useEffect(() => {
        if (showSelector) {
            setOpacitySelectorWrap(1)
            setSelectorWrapDisplay("flex")
        } else {
            setOpacitySelectorWrap(0)
            setTimeout(() => {
                setSelectorWrapDisplay("none")
            }, 500)
        }
    }, [showSelector]);

    useEffect(() => {
        if (showTips) {
            setZIndexTips(1)
        } else {
            setZIndexTips(-1)
        }
    }, [showTips])

    useEffect(() => {
        if (showTips) {
            setShowTips(false)
            setTimeout(() => {
                setFinderUsers([])
            }, 200)
        }
    }, [finder]);

    useEffect(() => {
        if (inputLineHeight !== 0) {
            const inputLine = inputMessageLineRef.current
            inputLine.style.height = `${inputLineHeight}px`
        }
    }, [inputLineHeight]);

    const handleTextAreaChange = (event) => {
        const textarea = textAreaRef.current;
        const old_h = Number(textarea.style.height.replace("px", ""))
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        const new_h = Number(textarea.style.height.replace("px", ""))
        if (textarea.scrollHeight <= textarea.clientHeight) {
            if (inputLineHeight + new_h - old_h < textarea.scrollHeight) {
                setInputLineHeight(textarea.scrollHeight)
            } else {
                setInputLineHeight(inputLineHeight + new_h - old_h)
            }
        }
        setMessage(event.target.value)
    };

    const clickChat = (chat) => {
        setCurrentChat(chat)
        if (windowWidth <= 767) {
            setOpacityList(0)
            setOpacityArea(0)
            setTimeout(() => {
                setShowList(false)
                setTimeout(() => {
                    setShowArea(true)
                    setOpacityArea(1)
                }, 100)
            }, 550)
        }
    }

    const handleClickFinderChat = (chat) => {
        const cond = chats.find(el => el.data.identifier === user.identifier)
        if (cond) {

        } else {
            clickChat(chat)
        }
        setShowTips(false)
    }

    const clickBack = () => {
        setCurrentChat(null)
        if (windowWidth <= 767) {
            setOpacityArea(0)
            setTimeout(() => {
                setShowArea(false)
                setTimeout(() => {
                    setShowList(true)
                    setOpacityList(1)
                }, 100)
            }, 550)
        }
    }

    const onKeyPressTextArea = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }

    const onKeyPressFinder = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            findRef.current.click()
        }
    }

    const findUsersByFinder = async () => {
        if (finder) {
            try {
                const accessToken = getCookie('act',{path:'/'})
                const {user} = jwtDecode(accessToken)
                setLoadingFinder(true)
                const data = await getUsersByFinder(finder, user.id, accessToken)
                setFinderUsers(data)
                setShowTips(true)
            } catch (e) {

            }
            setLoadingFinder(false)
        }
    }

    const openFileSelector = () => {
        setShowSelector(true)
    }

    const closeFileSelector = () => {
        setShowSelector(false)
    }

    const updateAttention = (value) => {
        setAttention(value)
    }

    const updateDeleteChat = (value) => {
        setDelChatId(value)
    }

    const updateMessage = (value) => {
        setMessage(value)
    }

    const toCreator = () => {

    }

    return (
        <AuthorizationUser validation={validation}>
            <Attention
                visible={attention}
                setVisible={(value) => updateAttention(value)}
                setDelChat={(value) => updateDeleteChat(value)}
            />
            <HeightWrapper dir="column">
                <Grid>
                    <Col xxl={4} xl={4} lg={4} md={{span: 4, offset: 0}} sm={{span: 10, offset: 1}} xs={12}
                         style={{display: showList ? "flex" : "none"}}
                         className={style.l_col}
                    >
                        <div className={style.finder_wrap}>
                            <input
                                value={finder}
                                onChange={(e) => setFinder(e.target.value)}
                                onKeyPress={(e) => onKeyPressFinder(e)}
                                className={style.finder}
                                type="text"
                                placeholder="Введите тег пользователя..."
                            />
                            {loadingFinder ?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -960 960 960"
                                    className={style.load_svg + ' lds-roller'}
                                >
                                    <path
                                        d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/>
                                </svg>
                                :
                                <button
                                    className={style.btn_find}
                                    onClick={findUsersByFinder}
                                    ref={findRef}
                                >
                                    <svg
                                        className={style.find_svg}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 96 960 960"
                                    >
                                        <path
                                            d="M774 913 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l243 241q9 8.442 9 20.721t-9.913 22.192Q809 922 795.778 922q-13.222 0-21.778-9ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
                                    </svg>
                                </button>
                            }
                        </div>
                        <div
                            className={style.tips_wrap}
                        >
                            <animated.div
                                style={animation}
                                className={style.tips}
                            >
                                {finderUsers.length !== 0 ?
                                    <>
                                        {finderUsers.map(user =>
                                            <div
                                                onClick={() => handleClickFinderChat(user)}
                                                className={style.tip}
                                            >
                                                <p className={style.tip_text}>{user.identifier}</p>
                                            </div>
                                        )}
                                    </>
                                    :
                                    <div className={style.tip + ' ' + style.not_found}>
                                        <p className={style.tip_text}>
                                            Ничего не найдено
                                        </p>
                                    </div>
                                }
                            </animated.div>
                        </div>
                        <motion.div
                            className={style.chats + ' ' + style.scl}
                            animate={{opacity: opacityList}}
                        >
                            {chats.length === 0 ?
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    className={style.empty_list_div}
                                >
                                    <p className={style.empty_list_p}>У вас пока нет чатов</p>
                                </motion.div>
                                :
                                <>
                                    {chats.map(() =>
                                        <motion.div
                                            className={style.chat}
                                            onClick={() => clickChat()}
                                            initial={{opacity: 0}}
                                            whileInView={{opacity: 1}}
                                            viewport={{once: false}}
                                        >
                                            <Image src="" alt="prof-img" className={style.chat_preview}/>
                                            <div className={style.middle}>
                                                <h1 className={style.chat_name}>CAKE BUY BEATS</h1>
                                                <p className={style.last_message}>Какое-то сообщение от пользователя</p>
                                            </div>
                                            <div className={style.right}>
                                                <p className={style.time}>19:24</p>
                                                <p className={style.message_view}>1</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </>
                            }
                        </motion.div>
                    </Col>
                    <Col className={style.area_col}
                         xxl={8} xl={8} lg={8} md={{span: 8, offset: 0}} sm={{span: 10, offset: 1}} xs={12}
                    >
                        <SendFile
                            closeFileSelector={closeFileSelector}
                            selectorWrapDisplay={selectorWrapDisplay}
                            opacitySelectorWrap={opacitySelectorWrap}
                            inputText={message}
                            setInputText={(value) => updateMessage(value)}
                        />
                        <motion.div
                            className={style.area}
                            initial={{opacity: 0}}
                            animate={{
                                display: showArea ? "flex" : "none",
                                opacity: opacityArea
                            }}
                            transition={{
                                type: "spring",
                                layout: {duration: 0.5},
                                bounce: 0,
                            }}
                        >
                            {currentChat ?
                                <>
                                    <div className={style.head_line}>
                                        <svg
                                            onClick={clickBack}
                                            className={style.area_svg + ' ' + style.back}
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        >
                                            <path
                                                d="m333.478 798.783-197-196q-6.13-6.131-8.978-13.109T124.652 575q0-7.696 2.848-14.674t8.978-13.109l197-197q10.826-10.826 27.783-11.326t28.783 11.326q11.826 11.826 11.826 28.283t-11.826 28.283L261.436 535.391h550.825q16.957 0 28.283 11.326T851.87 575q0 16.957-11.326 28.283t-28.283 11.326H261.436l128.608 128.608q10.826 10.826 11.044 27.283.217 16.457-11.044 28.283-11.826 11.826-28.283 11.826t-28.283-11.826Z"/>
                                        </svg>
                                        <h1 className={style.name}>{currentChat.name}</h1>
                                        <svg onClick={() => setAttention(true)}
                                             className={style.area_svg + ' ' + style.delete}
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                                            <path
                                                d="M261 936q-24 0-42-18t-18-42V306h-11q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190 246h158q0-13 8.625-21.5T378 216h204q12.75 0 21.375 8.625T612 246h158q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770 306h-11v570q0 24-18 42t-42 18H261Zm0-630v570h438V306H261Zm106 454q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T427 760V421q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T367 421v339Zm166 0q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T593 760V421q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T533 421v339ZM261 306v570-570Z"/>
                                        </svg>
                                        <p className={style.user_id}>@{currentChat.identifier}</p>
                                    </div>
                                    <div className={style.view_area + ' ' + style.scl} ref={scrollableRef}>
                                        <div className={style.ribbon}>
                                            <p className={style.day}>14 февраля</p>
                                            {[1, 2,].map(i =>
                                                <div className={(i === 1 ? style.left_message : style.right_message)
                                                    + ' ' + style.line_message}
                                                >
                                                    <div className={style.message}>
                                                        <p className={style.message_text}>Здравствуйте, сколько стоит
                                                            вот этот
                                                            бит?</p>
                                                        <div className={style.message_under_line}>
                                                            <div>
                                                                <svg
                                                                    className={style.viewed_svg + ' ' + style.viewed_left}
                                                                    viewBox="0 0 10 10"
                                                                    xmlns="http://www.w3.org/2000/svg">
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
                                                </div>)}
                                        </div>
                                    </div>
                                    <div className={style.under_line}>
                                        <div ref={inputMessageLineRef} className={style.ta_wrap}>
                                            <div style={{display: "flex", alignItems: "center", flex: "1 0 auto"}}>
                                                <textarea
                                                    ref={textAreaRef}
                                                    value={!showSelector ? message : ""}
                                                    onKeyPress={(e) => onKeyPressTextArea(e)}
                                                    onChange={(e) => handleTextAreaChange(e)}
                                                    rows="1"
                                                    className={style.content}
                                                    placeholder="Введите текст..."
                                                />
                                            </div>
                                        </div>
                                        {showSend ?
                                            <svg className={style.svg} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 96 960 960">
                                                <path
                                                    d="M120 851V301q0-16 13.5-24.5T162 274l652 274q18 8 18 28t-18 28L162 878q-15 6-28.5-2.5T120 851Zm60-48 544-227-544-230v168l242 62-242 60v167Zm0-227V346v457-227Z"/>
                                            </svg>
                                            :
                                            <svg
                                                onClick={openFileSelector}
                                                className={style.svg} viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.5 22.175C9.93328 22.175 8.59578 21.6376 7.48745 20.5625C6.37912 19.4875 5.82495 18.1667 5.82495 16.6V5.77505C5.82495 4.67505 6.21662 3.73755 6.99995 2.96255C7.78328 2.18755 8.73328 1.80005 9.84995 1.80005C10.9666 1.80005 11.9125 2.18755 12.6875 2.96255C13.4625 3.73755 13.85 4.68338 13.85 5.80005V15.7C13.85 16.35 13.625 16.9084 13.175 17.375C12.725 17.8417 12.1666 18.0751 11.5 18.0751C10.8333 18.0751 10.275 17.8251 9.82495 17.325C9.37495 16.825 9.14995 16.2417 9.14995 15.575V6.30005C9.14995 6.15005 9.20412 6.01672 9.31245 5.90005C9.42078 5.78338 9.55828 5.72505 9.72495 5.72505C9.87495 5.72505 10.0041 5.78338 10.1125 5.90005C10.2208 6.01672 10.275 6.15005 10.275 6.30005V15.65C10.275 16 10.3958 16.3 10.6375 16.55C10.8791 16.8 11.1666 16.925 11.5 16.925C11.8333 16.925 12.1208 16.8042 12.3625 16.5625C12.6041 16.3209 12.725 16.0334 12.725 15.7V5.77505C12.725 4.97505 12.4458 4.30005 11.8875 3.75005C11.3291 3.20005 10.65 2.92505 9.84995 2.92505C9.04995 2.92505 8.37078 3.20005 7.81245 3.75005C7.25412 4.30005 6.97495 4.97505 6.97495 5.77505V16.65C6.97495 17.8834 7.41662 18.9209 8.29995 19.7626C9.18328 20.6042 10.25 21.025 11.5 21.025C12.7666 21.025 13.8375 20.6 14.7125 19.75C15.5875 18.9 16.025 17.85 16.025 16.6V6.30005C16.025 6.15005 16.0833 6.01672 16.2 5.90005C16.3166 5.78338 16.45 5.72505 16.6 5.72505C16.75 5.72505 16.8833 5.78338 17 5.90005C17.1166 6.01672 17.175 6.15005 17.175 6.30005V16.575C17.175 18.1417 16.6208 19.4667 15.5125 20.55C14.4041 21.6334 13.0666 22.175 11.5 22.175Z"/>
                                            </svg>
                                        }
                                    </div>
                                </>
                                :
                                <div className={style.empty_area}>
                                    <p className={style.empty_list_p}>Выберите чат</p>
                                </div>
                            }
                        </motion.div>
                    </Col>
                </Grid>
            </HeightWrapper>
        </AuthorizationUser>
    );
};

export async function getServerSideProps({req, res}) {

    const validation = await serverSideValidationToken({req, res})

    if (validation) {
        const accessToken = getCookie('act', {req, res})
        const {user} = jwtDecode(accessToken)
        const chats = await getChats(user.id, accessToken)

        return {props: {validation, chatsSSR: chats}}
    }

    return {props: {validation}}
}