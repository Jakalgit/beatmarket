import style from "@/styles/components/send_file.module.css";
import {useEffect, useRef, useState} from "react";

const SelectFiles = ({ fileList, closeFileSelector, handleFileChange, visible }) => {

    const [opacity, setOpacity] = useState(1)
    const [display, setDisplay] = useState("flex")

    const fileRef = useRef(null)
    const imageRef = useRef(null)

    const handleButtonFileClick = () => {
        fileRef.current.click()
    };

    const handleButtonImageClick = () => {
        imageRef.current.click()
    };

    useEffect(() => {
        if (!visible) {
            setOpacity(0)
            setTimeout(() => {
                setDisplay("none")
            }, 250)
        } else {
            setDisplay("flex")
            setOpacity(1)
        }
    }, [visible]);

    useEffect(() => {
        if (!fileList.type) {
            fileRef.current.value = null
            imageRef.current.value = null
        }
    }, [fileList])

    return (
        <>
            <div
                className={style.file_selector}
                style={{opacity: opacity, display: display}}
            >
                <div
                    onClick={handleButtonFileClick}
                    className={style.variant_sel}
                >
                    <input
                        type="file"
                        ref={fileRef}
                        onChange={(e) => handleFileChange(e, "file")}
                        style={{display: "none"}}
                        multiple
                    />
                    <svg className={style.variant_svg}
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                            d="M440-367v127q0 17 11.5 28.5T480-200q17 0 28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5q7.5-.5 14.5-3.5t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5q-8 0-15 2.5t-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5l35-35ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560v-160H240v640h480v-440H560q-17 0-28.5-11.5T520-640ZM240-800v200-200 640-640Z"/>
                    </svg>
                    <p className={style.variant_text}>Файл</p>
                </div>
                <div
                    onClick={handleButtonImageClick}
                    className={style.variant_sel}
                    style={{marginTop: "auto"}}
                >
                    <input
                        accept=".jpg, .png, .jpeg, .bmp"
                        type="file"
                        ref={imageRef}
                        onChange={(e) => handleFileChange(e, "image")}
                        style={{display: "none"}}
                        multiple
                    />
                    <svg className={style.variant_svg}
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0 0v-560 560Zm80-80h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Z"/>
                    </svg>
                    <p className={style.variant_text}>Изображение</p>
                </div>
            </div>
            <button
                style={{opacity: opacity, display: display}}
                onClick={closeFileSelector}
                className={style.close_selector}
            >
                <svg className={style.variant_svg}
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/>
                </svg>
            </button>
        </>
    );
};

export default SelectFiles;