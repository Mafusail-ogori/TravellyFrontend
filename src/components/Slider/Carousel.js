import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import styles from "./Carousel.module.css";
import { EffectCards } from "swiper";
import Maldives from '../../assets/photos/Maldives.jpg'
import Matterhorn from '../../assets/photos/Matterhorn.jpg'
import Switzerland from '../../assets/photos/Switzerland.jpg'
import Nature from '../../assets/photos/Nature.jpg'

const Carousel = () => {
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className={styles.swiper}
                loop={true}
            >
                <SwiperSlide className={styles.swiper_slide} style = {{backgroundImage: `url(${Maldives})`}}>
                    <p className={styles.swiper_title}>Matterhorn</p>
                    <p className={styles.swiper_description}>The Matterhorn is a mountain of the Alps, straddling the main watershed and border between
                        Switzerland and Italy. It is a large, near-symmetric pyramidal peak in the extended Monte Rosa
                        area of the Pennine Alps, whose summit is 4,478 metres high, making it one of the highest
                        summits in the Alps and Europe</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} style = {{backgroundImage: `url(${Matterhorn})`}}>
                    <p className={styles.swiper_title}>Matterhorn</p>
                    <p className={styles.swiper_description}>The Matterhorn is a mountain of the Alps, straddling the main watershed and border between
                        Switzerland and Italy. It is a large, near-symmetric pyramidal peak in the extended Monte Rosa
                        area of the Pennine Alps, whose summit is 4,478 metres high, making it one of the highest
                        summits in the Alps and Europe</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} style = {{backgroundImage: `url(${Switzerland})`}}>
                    <p className={styles.swiper_title}>Matterhorn</p>
                    <p className={styles.swiper_description}>The Matterhorn is a mountain of the Alps, straddling the main watershed and border between
                        Switzerland and Italy. It is a large, near-symmetric pyramidal peak in the extended Monte Rosa
                        area of the Pennine Alps, whose summit is 4,478 metres high, making it one of the highest
                        summits in the Alps and Europe</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} style = {{backgroundImage: `url(${Nature})`}}>
                    <p className={styles.swiper_title}>Matterhorn</p>
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
