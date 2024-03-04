import React, {useEffect, useRef, useState} from 'react';
import style from "@/styles/components/send_file.module.css";
import {motion} from "framer-motion";
import Image from "next/image";

const ImageList = ({ closeFileSelector, inputText = "", setInputText, fileList, isVisible = true }) => {

    const inputMessageLineRef = useRef(null)
    const textAreaRef = useRef(null)

    const [inputLineHeight, setInputLineHeight] = useState(0)
    const [opacity, setOpacity] = useState(0)

    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([])

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

    const goToPrevSlide = () => {
        const newIndex = (currentIndex === 0) ? fileList.files.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentIndex === fileList.files.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

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

        // useEffect(() => {
    //     if (fileList.type === "image") {
    //         fileList.files.forEach(file => {
    //             console.log(typeof file)
                        //             const reader = new FileReader();
    //             reader.onload = () => {
    //                 setImages([...reader.result]);
    //             };
    //             reader.readAsDataURL(file);
    //         })
                    //     }
    // }, [fileList]);

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
                <p className={style.file_list_text}>Изображений к отправке: {1} шт.</p>
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
            <div className={style.slider_area}>
                <svg
                    className={style.chevron}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                >
                    <path
                        d="m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z"/>
                </svg>
                {fileList.files.length !== 0 &&
                    <Image
                        src={URL.createObjectURL(fileList.files[0])}
                        className={style.image}
                        alt=""
                        width={0}
                        height={0}
                        layout="responsive"
                    />
                }
                <svg
                    className={style.chevron}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                >
                    <path
                        d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/>
                </svg>
            </div>
            <div
                className={style.u_line}
                ref={inputMessageLineRef}
            >
                <div style={{display: "flex", alignItems: "center", flex: "1 0 auto"}}>
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

export default ImageList;