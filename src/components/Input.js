import style from "@/styles/components/input.module.css"
import {useEffect, useState} from "react";

const Input = ({placeholder = '', styles = '', wrapperStyles = '', value = '', setValue, type = 'text'}) => {

    const [text, setText] = useState(value)
    const [currentType, setCurrentType] = useState(type)
    const [svgPush, setSvgPush] = useState(false)

    useEffect(() => {
        setValue(text)
    }, [text])

    useEffect(() => {
        if (type === "password") {
            if (svgPush) {
                setCurrentType("text")
            } else {
                setCurrentType("password")
            }
        }
    }, [svgPush])

    const onClickSVG = () => {
        setSvgPush(!svgPush)
    }

    return (
        <div className={wrapperStyles + ' ' + style.wrapper}>
            <input
                type={currentType}
                className={style.input + ' ' + styles}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={placeholder}
            />
            {type === "password" && text.length !== 0 &&
                <svg onClick={onClickSVG} className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                    {svgPush ?
                        <path d="m629 637-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650 556q0 22-5.5 43.5T629 637Zm129 129-40-40q49-36 85.5-80.5T857 556q-50-111-150-175.5T490 316q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485 256q135 0 249 74t174 199q3 5 4 12t1 15q0 8-1 15.5t-4 12.5q-26 55-64 101t-86 81Zm36 204L648 827q-35 14-79 21.5t-89 7.5q-138 0-253-74T52 583q-3-6-4-12.5T47 556q0-8 1.5-15.5T52 528q21-45 53.5-87.5T182 360L77 255q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l716 716q8 8 8 19.5t-8 20.5q-8 10-20.5 10t-21.5-9ZM223 402q-37 27-71.5 71T102 556q51 111 153.5 175.5T488 796q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z"/>
                        :
                        <path d="M480.118 726Q551 726 600.5 676.382q49.5-49.617 49.5-120.5Q650 485 600.382 435.5q-49.617-49.5-120.5-49.5Q409 386 359.5 435.618q-49.5 49.617-49.5 120.5Q310 627 359.618 676.5q49.617 49.5 120.5 49.5Zm-.353-58Q433 668 400.5 635.265q-32.5-32.736-32.5-79.5Q368 509 400.735 476.5q32.736-32.5 79.5-32.5Q527 444 559.5 476.735q32.5 32.736 32.5 79.5Q592 603 559.265 635.5q-32.736 32.5-79.5 32.5ZM480 856q-138 0-251.5-75T53.145 582.923Q50 578 48.5 570.826 47 563.652 47 556t1.5-14.826Q50 534 53.145 529.077 115 406 228.5 331T480 256q138 0 251.5 75t175.355 198.077Q910 534 911.5 541.174 913 548.348 913 556t-1.5 14.826q-1.5 7.174-4.645 12.097Q845 706 731.5 781T480 856Zm0-300Zm-.169 240Q601 796 702.5 730.5 804 665 857 556q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359 316 257.5 381.5 156 447 102 556q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z"/>
                    }
                </svg>
            }
        </div>
    )
};

export default Input;