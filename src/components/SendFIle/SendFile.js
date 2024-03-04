import style from "@/styles/components/send_file.module.css";
import style_messages from "@/styles/pages/messages.module.css"
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import SelectFiles from "@/components/SendFIle/SelectFiles";
import FileList from "@/components/SendFIle/FileList";
import {useActions} from "@/hooks/useActions";
import ImageList from "@/components/SendFIle/ImageList";

const SendFile = ({ selectorWrapDisplay, opacitySelectorWrap, closeFileSelector, inputText, setInputText }) => {

    const [files, setFiles] = useState({type: undefined, files: []})

    const [selectVisible, setSelectVisible] = useState(true)
    const [fileListVisible, setFileListVisible] = useState(false)
    const [imageListVisible, setImageListVisible] = useState(false)

    const {addNotification} = useActions()

    useEffect(() => {
        if (files.files.length > 10) {
            Date.now()
            addNotification({
                id: Date.now(),
                head: "Ошибка",
                text: "Возмжно загружать не больше 10 файлов за раз",
                type: 1,
            })
            setFiles({type: undefined, files: []})
        } else if (files.type && files.files.length !== 0) {
            setSelectVisible(false)
            setTimeout(() => {
                if (files.type === "file") {
                    setFileListVisible(true)
                } else {
                    setImageListVisible(true)
                }
            }, 300)
        }
    }, [files]);

    const handleFileChange = (event, type) => {
        setFiles({type: type, files: [...event.target.files]})
    }

    const closeSelector = () => {
        setTimeout(() => {
            setFiles({type: undefined, files: []})
            setFileListVisible(false)
            setImageListVisible(false)
            setSelectVisible(true)
        }, 300)
        closeFileSelector()
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                display: selectorWrapDisplay,
                opacity: opacitySelectorWrap
            }}
            className={style.selector_wrap + ' ' + style_messages.area}
        >
            <SelectFiles
                fileList={files}
                closeFileSelector={closeSelector}
                handleFileChange={(e, type) => handleFileChange(e, type)}
                visible={selectVisible}
            />
            <FileList
                isVisible={fileListVisible}
                fileList={files}
                inputText={inputText}
                setInputText={setInputText}
                closeFileSelector={closeSelector}
            />
            <ImageList
                isVisible={imageListVisible}
                fileList={files}
                inputText={inputText}
                setInputText={setInputText}
                closeFileSelector={closeSelector}
            />
        </motion.div>
    );
};

export default SendFile;