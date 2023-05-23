import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCreative} from "swiper";
import styles from './Review.module.css'
import firstReviewer from '../../assets/photos/BillGates.jpeg'
import secondReviewer from '../../assets/photos/Sundar.jpg'
import thirdReviewer from '../../assets/photos/Bjorn.jpg'
import classes from './Carousel.module.css'

const Reviews = () => {
    return <Swiper
        grabCursor={true}
        effect={"creative"}
        loop={true}
        autoplay={true}
        className={styles.swiper}
        creativeEffect={{
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        }}
        modules={[EffectCreative]}
    >
        <SwiperSlide className={styles.swiper_slide}>
            <img src = {firstReviewer} alt="Not found" className={styles.swiper_slide_image}/>
            <div>
                <p className={classes.swiper_title} style={{color: "black"}}>Білл Гейтс ★★★★★</p>
                <p className={styles.review_description}>Чудова подорож до Кападокії змусила моє серце щебетати як ніколи. Ми з сім'єю просто в захваті</p>
            </div>
        </SwiperSlide >
        <SwiperSlide className={styles.swiper_slide}>
            <img src = {secondReviewer} alt="Not found" className={styles.swiper_slide_image}/>
            <div>
                <p className={classes.swiper_title} style={{color: "black"}}>Сундар Пічай ★★★★★</p>
                <p className={styles.review_description}>Справді захоплююча поїздка до Карпат змусила мене закохатись у всю красу української природи</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <img src = {thirdReviewer} alt="Not found" className={styles.swiper_slide_image}/>
            <div>
                <p className={classes.swiper_title} style={{color: "black"}}>Бйорн Страуструп ★★★★☆</p>
                <p className={styles.review_description}>Так люблю той Львів, що бракує ми слів. Я просто в захваті, однак побувавши
                    на Левандівці враження трішки зіпсувались</p>
            </div>
        </SwiperSlide>
    </Swiper>
}

export default Reviews