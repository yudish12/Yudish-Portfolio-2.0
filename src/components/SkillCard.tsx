import { motion, Variants } from "framer-motion";
import React from "react";

const SkillCard = (props: { type: string, skills: string }) => {
    const { type, skills } = props
    const cardVariants: Variants = {
        offscreen: {
            y: 600,
        },
        onscreen: {
            y: 10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    // Array of random border colors
    const borderColors = ["gray", "#211C6A", "#9A031E", "#FD8D14"];

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div
                className="bg-[#191825] rounded-lg p-3 h-full shadow"
                variants={cardVariants}
            >
                <div className="text-primary font-medium text-lg tracking-wider">{type}</div>
                <div className="flex flex-wrap gap-4 mt-2">
                    {skills.split(',').map((e, i) => (
                        <span
                            key={i}
                            className="p-3 rounded-lg"
                            style={{ border: `1px ridge ${borderColors[Math.floor(Math.random() * borderColors.length)]}` }}
                        >
                            {e}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SkillCard;
