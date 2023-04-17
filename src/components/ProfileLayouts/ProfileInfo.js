import style_tab from "@/styles/pages/profile.module.css"
import style from "@/styles/components/profile_info.module.css"
import Image from "next/image";
import {motion} from "framer-motion";

const ProfileInfo = () => {
    return (
        <motion.div
            className={style_tab.layout}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <div className={style.line}>
                <div className={style.wrapperPreview}>
                    <div className={style.filter}>
                        <div className={style.changePreview}>
                            <svg
                                className={style.changePreviewSvg}
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M82.7083 30.625L69.375 17.2917L73.75 12.9166C74.9306 11.7361 76.4063 11.1632 78.1771 11.1979C79.9479 11.2326 81.4236 11.8403 82.6042 13.0208L87.0833 17.5C88.2639 18.6805 88.8542 20.1389 88.8542 21.875C88.8542 23.6111 88.2639 25.0694 87.0833 26.25L82.7083 30.625ZM15.625 87.5C14.7222 87.5 13.9757 87.2048 13.3854 86.6146C12.7951 86.0243 12.5 85.2778 12.5 84.375V75.4167C12.5 75 12.5694 74.618 12.7083 74.2708C12.8472 73.9236 13.0903 73.5764 13.4375 73.2292L65 21.6666L78.3333 35L26.7708 86.5625C26.4236 86.9097 26.0764 87.1528 25.7292 87.2917C25.3819 87.4305 25 87.5 24.5833 87.5H15.625Z" />
                            </svg>
                        </div>
                    </div>
                    <Image src={require("@/img/preview.png")} alt="preview" className={style.preview} />
                </div>

            </div>
        </motion.div>
    );
};

export default ProfileInfo;