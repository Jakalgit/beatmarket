import style from "@/styles/components/send_file.module.css";
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
const FileList = ({ closeFileSelector, inputText = "", setInputText, fileList, isVisible}) => {

    const inputMessageLineRef = useRef(null)
    const textAreaRef = useRef(null)
    const [inputLineHeight, setInputLineHeight] = useState(0)

    const [opacity, setOpacity] = useState(0)

    const handleChange = (event) => {
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
        setInputText(event.target.value)
    };

    const isImage = (file) => {
        const images = ["jpg", "png", "jpeg", "bmp"]
        const extension = file.name.split(".").pop()
        return images.includes(extension)
    }

    const onKeyPressTextArea = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }

    useEffect(() => {
        if (inputLineHeight !== 0) {
            const inputLine = inputMessageLineRef.current
            inputLine.style.height = `${inputLineHeight}px`
        }
    }, [inputLineHeight]);

    useEffect(() => {
        if (isVisible) {
            setOpacity(1)
        } else {
            setOpacity(0)
        }
    }, [isVisible])


    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: opacity,
                display: opacity === 0 ? "none" : "flex"
            }}
            className={style.file_list}
        >
            <div className={style.head}>
                <p className={style.file_list_text}>Файлов к отправке: {fileList.files.length} шт.</p>
                <svg
                    onClick={closeFileSelector}
                    className={style.close_x}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 10.875L5.625 15.25C5.5 15.375 5.35417 15.4375 5.1875 15.4375C5.02083 15.4375 4.875 15.375 4.75 15.25C4.625 15.125 4.5625 14.9792 4.5625 14.8125C4.5625 14.6458 4.625 14.5 4.75 14.375L9.125 10L4.75 5.625C4.625 5.5 4.5625 5.35417 4.5625 5.1875C4.5625 5.02083 4.625 4.875 4.75 4.75C4.875 4.625 5.02083 4.5625 5.1875 4.5625C5.35417 4.5625 5.5 4.625 5.625 4.75L10 9.125L14.375 4.75C14.5 4.625 14.6458 4.5625 14.8125 4.5625C14.9792 4.5625 15.125 4.625 15.25 4.75C15.375 4.875 15.4375 5.02083 15.4375 5.1875C15.4375 5.35417 15.375 5.5 15.25 5.625L10.875 10L15.25 14.375C15.375 14.5 15.4375 14.6458 15.4375 14.8125C15.4375 14.9792 15.375 15.125 15.25 15.25C15.125 15.375 14.9792 15.4375 14.8125 15.4375C14.6458 15.4375 14.5 15.375 14.375 15.25L10 10.875Z"
                    />
                </svg>
            </div>
            <div style={{width: "100%"}}>
                {fileList.files.map(
                    file => {

                        const visLen = 30

                        const truncatedFileName = file.name.length > visLen
                            ? file.name.substring(0, visLen/2 - 3) + "..." + file.name.substring(file.name.length - visLen/2,  file.name.length)
                            : file.name;

                        return (
                            <div className={style.item}>
                                {isImage(file) ?
                                    <svg className={style.item_svg}
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                        <path
                                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0 0v-560 560Zm80-80h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Z"/>
                                    </svg>
                                    :
                                    <svg
                                        className={style.item_svg}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.5 27.5C6.8125 27.5 6.22396 27.2552 5.73438 26.7656C5.24479 26.276 5 25.6875 5 25V5C5 4.3125 5.24479 3.72396 5.73438 3.23438C6.22396 2.74479 6.8125 2.5 7.5 2.5H16.4688C16.8021 2.5 17.1198 2.5625 17.4219 2.6875C17.724 2.8125 17.9896 2.98958 18.2188 3.21875L24.2812 9.28125C24.5104 9.51042 24.6875 9.77604 24.8125 10.0781C24.9375 10.3802 25 10.6979 25 11.0312V25C25 25.6875 24.7552 26.276 24.2656 26.7656C23.776 27.2552 23.1875 27.5 22.5 27.5H7.5ZM16.25 10V5H7.5V25H22.5V11.25H17.5C17.1458 11.25 16.849 11.1302 16.6094 10.8906C16.3698 10.651 16.25 10.3542 16.25 10Z"
                                        />
                                    </svg>
                                }
                                <p className={style.file_list_text}>{truncatedFileName}</p>
                            </div>
                        )
                    }
                )}
            </div>
            <div
                className={style.u_line}
                ref={inputMessageLineRef}
            >
                <div style={{display: "flex", flexGrow: 1}}>
                    <textarea
                        ref={textAreaRef}
                        value={inputText}
                        onKeyPress={(e) => onKeyPressTextArea(e)}
                        onChange={(e) => handleChange(e)}
                        rows="1"
                        className={style.textarea}
                        placeholder="Введите подпись..."
                    />
                </div>
                <button
                    className={style.send_btn}
                >
                    Отправить
                </button>
            </div>
        </motion.div>
    );
};

export default FileList;