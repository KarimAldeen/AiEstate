import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Pagination, Navigation],
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    speed: 10000,
    observer: true,
    observeParents: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        868: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
};

export default function Carousel5() {

    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/images/home/brand-2.png" alt="images/home" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/images/home/brand-2.png" alt="images/home" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/images/home/brand-2.png" alt="images/home" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/images/home/brand-2.png" alt="images/home" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/images/home/brand-2.png" alt="images/home" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slogan-logo">
                        <Link href="#">
                            <img src="/images/home/brand-2.png" alt="images/home" />
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
