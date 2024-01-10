import React from 'react';
import { motion } from "framer-motion"

const Section = ({ h3, text, hasBtn = true, btnTxt, imgSrc, imgSize = "70%", backgroundColor, headingColor, textColor, btnBgColor, btnColor }) => {

    const headingOption = {
        initial: {
            y: "-100%",
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        }
    }

    const textOption = {
        ...headingOption,
        transition: {
            delay: 0.3,
        }
    }

    const buttonOption = {
        initial: {
            y: "100%",
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
        transition: {
            delay: 0.3,
            ease: "easeIn"
        }
    }
    const ImgOption = {
        initial: {
            scale: 0.1,
            opacity: 0,
        },
        whileInView: {
            scale: 1,
            opacity: 1,
        },
        transition: {
            delay: 0.3,
        }
    }



    return (
        <section className="section"
            style={{
                backgroundColor,
            }}
        >
            <div>
                <motion.h3 style={{
                    color: headingColor,
                }}
                    data-cursorpointer={true}
                    {...headingOption}
                >{h3}</motion.h3>

                <motion.p
                    style={{
                        color: textColor,
                    }}
                    data-cursorpointer={true}
                    {...textOption}
                >{text} </motion.p>
                {
                    hasBtn && <motion.button
                        style={{
                            color: btnColor,
                            backgroundColor: btnBgColor,
                        }}
                        data-cursorpointer={true}
                        {...buttonOption}
                    >{btnTxt}</motion.button>
                }

                <motion.div  {...ImgOption}>
                    <img src={imgSrc} alt="ImgSrc" style={{
                        width: imgSize,
                    }} />
                </motion.div>

            </div>

        </section>
    );
};

export default Section