import {motion} from "framer-motion";

const HeightWrapper = ({dir, JSX}) => {
    return (
        <motion.div
            className="height"
            style={{display: 'flex', flexDirection: dir}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            {JSX}
        </motion.div>
    );
};

export default HeightWrapper;