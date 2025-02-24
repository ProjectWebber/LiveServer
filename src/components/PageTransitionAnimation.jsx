import { motion } from "motion/react";
import PropTypes from "prop-types";

function PageTransitionAnimation({children}) {
    return (
        <motion.section
            className="w-full h-full"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}

            transition={{duration:0.3}}
        >
            {children}
        </motion.section>
    );
}

PageTransitionAnimation.propTypes = {
    children: PropTypes.node
}

export default PageTransitionAnimation;