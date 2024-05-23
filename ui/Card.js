import Carousel2 from '@/components/slider/Carousel2';
import Link from 'next/link';
import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import WhatsApp from './WhatsApp';

const Card = ({ activeIndex, propertyData }) => {
    return (
        <div key={activeIndex} className="content-inner tab-content" style={{ display: `${activeIndex === 1 ? "block" : "none"}` }}>
            <div className="wrap-item flex">
                <div className="box box-dream hv-one">
                    <div className="image-group relative">
                        {propertyData.isFeatured && <span className="featured fs-12 fw-6">Featured</span>}
                        <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                        <div className="swiper-container carousel-2 img-style">
                            <Link href="/property-detail-v1" className="icon-plus">
                                <img src="/assets/images/icon/plus.svg" alt="images" />
                                </Link>
                            <Carousel2 start={0} end={4} />
                        </div>
                    </div>
                    <div className="content">
                        <h3 className="link-style-1"><a href="/property-detail-v1">{propertyData.title}</a></h3>
                        <div className="text-address"><p className="p-12">{propertyData.address}</p></div>
                        <div className="money fs-18 fw-6 text-color-3"><a href="/property-detail-v1">{propertyData.price}</a></div>
                        <div className="icon-box flex">
                            <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">{propertyData.beds}</span></div>
                            <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">{propertyData.baths}</span></div>
                            <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">{propertyData.sqft}</span></div>
                        </div>
                        <div className="card_bottom">
                            {/* <a className="compare flex align-center fw-6" href="#">Compare</a>
                            <div className="img-author hv-tool" data-tooltip={propertyData.author}><img src={propertyData.authorAvatar} alt="images" /></div>
                            <div className="days">{propertyData.postedDate}</div> */}
                            <WhatsApp/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
