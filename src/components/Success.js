import style_pass from "@/styles/pages/change_password.module.css";
import style_in from "@/styles/pages/signin.module.css";
import {motion} from "framer-motion";
import style_forgot from "@/styles/pages/forgot-password.module.css";
import Link from "next/link";
import {PROFILE} from "@/utils/routes";

const Success = ({text}) => {
    return (
        <motion.div
            style={{textAlign: 'center'}}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            className={style_forgot.transform}
        >
            <svg
                className={style_pass.svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
            >
                <path d="m421 667-98-98q-9-9-22-9t-23 10q-9 9-9 22t9 22l122 123q9 9 21 9t21-9l239-239q10-10 10-23t-10-23q-10-9-23.5-8.5T635 453L421 667Zm59 309q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z"/>
            </svg>
            <p className={style_in.head}>{text}</p>
            <Link href={PROFILE + '/info'} className={style_in.href}>Профиль</Link>
        </motion.div>
    );
};

export default Success;