import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import styles from "./Carousel.module.css";
import { EffectCards } from "swiper";

const Carousel = () => {
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className={styles.swiper}
            >
                <SwiperSlide className={styles.swiper_slide}>
                    <p className={styles.swiper_title}>Matterhorn</p>
                    <p className={styles.swiper_description}>The Matterhorn is a mountain of the Alps, straddling the main watershed and border between
                        Switzerland and Italy. It is a large, near-symmetric pyramidal peak in the extended Monte Rosa
                        area of the Pennine Alps, whose summit is 4,478 metres high, making it one of the highest
                        summits in the Alps and Europe</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>   <p className={styles.swiper_title}>Matterhorn</p>
                    <p className={styles.swiper_description}>The Matterhorn is a mountain of the Alps, straddling the main watershed and border between
                        Switzerland and Italy. It is a large, near-symmetric pyramidal peak in the extended Monte Rosa
                        area of the Pennine Alps, whose summit is 4,478 metres high, making it one of the highest
                        summits in the Alps and Europe</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>   <p className={styles.swiper_title}>Matterhorn</p>
                    <p className={styles.swiper_description}>The Matterhorn is a mountain of the Alps, straddling the main watershed and border between
                        Switzerland and Italy. It is a large, near-symmetric pyramidal peak in the extended Monte Rosa
                        area of the Pennine Alps, whose summit is 4,478 metres high, making it one of the highest
                        summits in the Alps and Europe</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>   <p className={styles.swiper_title}>Matterhorn</p>
                    <p className={styles.swiper_description}>The Matterhorn is a mountain of the Alps, straddling the main watershed and border between
                        Switzerland and Italy. It is a large, near-symmetric pyramidal peak in the extended Monte Rosa
                        area of the Pennine Alps, whose summit is 4,478 metres high, making it one of the highest
                        summits in the Alps and Europe</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Carousel
