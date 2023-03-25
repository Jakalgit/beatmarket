import style from "@/styles/components/filters.module.css"
import {CSSTransition} from "react-transition-group";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";

// анимация появления списка
const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

// Прототип фильтра, bpm и type могут быть пустыми
const _fl = {
    type: "beats",
    bpm: "",
    sort: {
        name: "Популярности",
        type: "popular",
    },
    time: "",
}

// доступные сортировки битов
const sortBeatTypes = [
    {name: "Новизне", type: "news"},
    {name: "Популярности", type: "popular"},
    {name: "Цене (по убыванию)", type: "price_desc"},
    {name: "Цене (по возрастанию)", type: "price_asc"},
]

// доступные сортировкм создателей
const sortCreatorTypes = [
    {name: "Новизне", type: "news"},
    {name: "Популярности", type: "popular"},
    {name: "Продаваемости", type: "sales"},
]

const Filters = ({visible, setVisible, save, setSaveFilters}) => {

    const [isOpen, setIsOpen] = useState(false)

    const [tempFilters, setTempFilters] = useState(_fl)
    const [filters, setFilters] = useState(_fl)
    const [sortList, setSortList] = useState([])

    const [saveClick, setSaveClick] = useState(false)
    const [doneDisplay, setDoneDisplay] = useState(0)

    useEffect(() => {
        if (save) {
            setTempFilters(save)
            setFilters(save)
        }
    }, [save])

    useEffect(() => {
        if (tempFilters.type === "beats") {
            setSortList(sortBeatTypes)
        } else {
            setSortList(sortCreatorTypes)
        }
        setTempFilters({...tempFilters, sort: {
                name: "Популярности",
                type: "popular",
            }
        })
        setIsOpen(false)
    }, [tempFilters.type])

    useEffect(() => {
        setIsOpen(false)
    }, [tempFilters.sort])

    const resetFilters = () => {
        setTempFilters(_fl)
        setFilters(_fl)
        setDoneDisplay(0)
    }

    const saveTempFilters = () => {
        setFilters(tempFilters)
        if (!saveClick) {
            setSaveClick(true)
            setDoneDisplay(1)
            setTimeout(() => {
                setSaveClick(false)
                setDoneDisplay(0)
            }, 2500)
        }
    }

    const closePopup = () => {
        setVisible(false);
        setSaveFilters(filters);
    }

    const setTypeObject = (value) => {
        switch (value) {
            case "creators":
                setTempFilters({...tempFilters, type: value})
                break
            default:
                setTempFilters({...tempFilters, type: "beats"})
        }
    }

    const setBPM = (value) => {
        if (value) {
            value.replaceAll('.', '')
            if (value < 0) value = -value
            setTempFilters({...tempFilters, bpm: String(value)})
        } else {
            setTempFilters({...tempFilters, bpm: ""})
        }
    }

    const setTypeSort = (type, name) => {
        if (tempFilters.type === "beats") {
            switch (type) {
                case "popular":
                case "news":
                case "price_asc":
                case "price_desc":
                    setTempFilters({...tempFilters, sort: {type, name}})
                    break
                default:
                    setTempFilters({...tempFilters, sort: {type: "popular", name: "Популярности"}})
            }
        } else if (tempFilters.type === "creators") {
            switch (type) {
                case "popular":
                case "news":
                case "sales":
                    setTempFilters({...tempFilters, sort: {type, name}})
                    break
                default:
                    setTempFilters({...tempFilters, sort: {type: "popular", name: "Популярности"}})
            }
        }
    }

    const setBeatTime = (value) => {
        if (value) {
            value.replaceAll('.', '')
            if (value < 0) value = -value
            setTempFilters({...tempFilters, time: String(value)})
        } else {
            setTempFilters({...tempFilters, time: ""})
        }
    }

    return (
        <CSSTransition
            in={visible}
            timeout={580}
            classNames="filters-back"
            mountOnEnter
            unmountOnExit
        >
            <div className={style.back + ' filters-back'}>
                <div className={style.window}>
                    <div className={style.up_line}>
                        <h1 className={style.head}>Фильтры</h1>
                        <svg onClick={closePopup} className={style.close} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 17.4L9.00005 24.4C8.80005 24.6 8.56672 24.7 8.30005 24.7C8.03338 24.7 7.80005 24.6 7.60005 24.4C7.40005 24.2 7.30005 23.9667 7.30005 23.7C7.30005 23.4333 7.40005 23.2 7.60005 23L14.6 16L7.60005 9C7.40005 8.8 7.30005 8.56667 7.30005 8.3C7.30005 8.03334 7.40005 7.8 7.60005 7.6C7.80005 7.4 8.03338 7.3 8.30005 7.3C8.56672 7.3 8.80005 7.4 9.00005 7.6L16 14.6L23 7.6C23.2 7.4 23.4334 7.3 23.7 7.3C23.9667 7.3 24.2 7.4 24.4 7.6C24.6 7.8 24.7 8.03334 24.7 8.3C24.7 8.56667 24.6 8.8 24.4 9L17.4 16L24.4 23C24.6 23.2 24.7 23.4333 24.7 23.7C24.7 23.9667 24.6 24.2 24.4 24.4C24.2 24.6 23.9667 24.7 23.7 24.7C23.4334 24.7 23.2 24.6 23 24.4L16 17.4Z" fill="#82B1FF"/>
                        </svg>
                    </div>
                    <div className={style.first_line}>
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            className={style.current_type + ' ' + (tempFilters.type === "beats" ? style.checked : '')}
                            onClick={() => setTypeObject("beats")}
                        >
                            Биты
                        </motion.button>
                        <div className={style.separator}/>
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            className={style.current_type + ' ' + (tempFilters.type === "creators" ? style.checked : '')}
                            onClick={() => setTypeObject("creators")}
                        >
                            Создатели
                        </motion.button>
                        <div className={style.bpm} style={{opacity: (tempFilters.type === "beats" ? 1 : 0)}}>
                            <div className={style.input_wrapper}>
                                <input
                                    type="number"
                                    placeholder="Пусто"
                                    className={style.input}
                                    value={tempFilters.bpm}
                                    onChange={(e) => setBPM(e.target.value)}
                                />
                            </div>
                            <p className={style.text + ' ' + style.bpm_text}>bpm</p>
                        </div>
                        <div className={style.sort}>
                            <p className={style.text + ' ' + style.sort_text}>Сортировка по</p>
                            <motion.nav
                                initial={false}
                                animate={isOpen ? "open" : "closed"}
                            >
                                <motion.button
                                    className={style.menu_button}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {tempFilters.sort.name}
                                    <motion.div
                                        variants={{
                                            open: { rotate: 180 },
                                            closed: { rotate: 0 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                        style={{ originY: 0.55 }}
                                    >
                                        <svg className={style.svg} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.99999 11.3062C8.92499 11.3062 8.85624 11.2937 8.79374 11.2687C8.73124 11.2437 8.66874 11.2 8.60624 11.1375L4.89374 7.425C4.79374 7.325 4.74686 7.19062 4.75311 7.02187C4.75936 6.85312 4.81249 6.71875 4.91249 6.61875C5.03749 6.49375 5.17186 6.44062 5.31561 6.45937C5.45936 6.47812 5.58749 6.5375 5.69999 6.6375L8.99999 9.9375L12.3 6.6375C12.4 6.5375 12.5344 6.48125 12.7031 6.46875C12.8719 6.45625 13.0062 6.5125 13.1062 6.6375C13.2312 6.7375 13.2844 6.86875 13.2656 7.03125C13.2469 7.19375 13.1875 7.33125 13.0875 7.44375L9.39374 11.1375C9.33124 11.2 9.26874 11.2437 9.20624 11.2687C9.14374 11.2937 9.07499 11.3062 8.99999 11.3062Z" fill="#82B1FF"/>
                                        </svg>
                                    </motion.div>
                                </motion.button>
                                <motion.div
                                    className={style.list}
                                    variants={{
                                        open: {
                                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                                            transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.7,
                                                delayChildren: 0.3,
                                                staggerChildren: 0.05
                                            }
                                        },
                                        closed: {
                                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                                            transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.3
                                            }
                                        }
                                    }}
                                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                                >
                                    {sortList.map(type =>
                                        <div>
                                            {type.type !== tempFilters.sort.type &&
                                                <motion.li
                                                    className={style.list_item}
                                                    variants={itemVariants}
                                                    onClick={() => setTypeSort(type.type, type.name)}
                                                >
                                                    {type.name}
                                                </motion.li>
                                            }
                                        </div>
                                    )}
                                </motion.div>
                            </motion.nav>
                        </div>
                    </div>
                    <div className={style.second_line} style={{opacity: (tempFilters.type === "beats" ? 1 : 0)}}>
                        <p className={style.text + ' ' + style.track_time}>Время бита</p>
                        <input
                            type="number"
                            className={style.input}
                            placeholder="Пусто"
                            value={tempFilters.time}
                            onChange={(e) => setBeatTime(e.target.value)}
                        />
                        <p className={style.text + ' ' + style.seconds}>с.</p>
                    </div>
                    <div className={style.last_line}>
                        <svg className={style.done} style={{opacity: doneDisplay}} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M378 798q-6 0-11-2t-10-7L176 608q-9-9-9-22t9-22q9-9 21-9t21 9l160 160 363-363q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L399 789q-5 5-10 7t-11 2Z"/></svg>
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            className={style.down_btn + ' ' + style.clean}
                            onClick={resetFilters}
                        >
                            Сбросить
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            className={style.down_btn + ' ' + style.save}
                            onClick={saveTempFilters}
                        >
                            Сохранить
                        </motion.button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Filters;