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
                <SwiperSlide className={styles.swiper_slide} style = {{backgroundImage: `url(${Switzerland})`}}>
                    <p className={styles.swiper_title}>Швейцарія ★★★★★</p>
                    <p className={styles.swiper_description}>Неймовірна країна з не менш неймовірної природою. Відчуй історію незайману сторіччями,
                        доторкнись до мальовничих Фьйордів. Досутпно за знижкою у 5%*</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} style = {{backgroundImage: `url(${Maldives})`}}>
                    <p className={styles.swiper_title}>Мальдіви ★★★★★</p>
                    <p className={styles.swiper_description}>Казкові острови прямо у серці Індійського океану не залишать байдужим нікого. Відчуй райський дотик смарагдової води,
                        а також ніжний бриз. Улюблена путівка наших клієнтів!</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} style = {{backgroundImage: `url(${Matterhorn})`}}>
                    <p className={styles.swiper_title}>Матергорн ★★★★★</p>
                    <p className={styles.swiper_description}>Матергорн це гора, що знаходиться на кордоні між Францією та Швейцарією, та є найижчою
                        вершиною Швейцарських Альп. Неймовірна біла вершина, вируши на пошуки прекрасного вже зараз.</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Carousel
