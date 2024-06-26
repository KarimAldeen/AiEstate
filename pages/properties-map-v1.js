import TopFilters from "@/components/elements/TopFilters";
import Layout from "@/components/layout/Layout";
import Carousel2 from "@/components/slider/Carousel2";
import WhatsApp from "@/ui/WhatsApp";
import dynamic from "next/dynamic";
import Link from 'next/link';
import { useState } from "react";
const MapCluster = dynamic(() => import("@/components/elements/MapCluster"), { ssr: false })
export default function PropertyMap1() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <TopFilters />
                <div className=" wrap-map flat-featured  flat-property style flex">
                    <div className="content-left wg-dream">
                        <div className="category-filter flex justify-space">
                            <div className="box-1 ">
                                <div className="heading-listing fs-30 lh-45 fw-7">Property Listing</div><div className>There are currently 164,814 properties.</div>
                            </div>
                            <div className="box-2 flex">
                                <Link href="#" className="btn-view grid active">
                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.04883 6.40508C5.04883 5.6222 5.67272 5 6.41981 5C7.16686 5 7.7908 5.62221 7.7908 6.40508C7.7908 7.18801 7.16722 7.8101 6.41981 7.8101C5.67241 7.8101 5.04883 7.18801 5.04883 6.40508Z" stroke="#8E8E93" />
                                        <path d="M11.1045 6.40508C11.1045 5.62221 11.7284 5 12.4755 5C13.2229 5 13.8466 5.6222 13.8466 6.40508C13.8466 7.18789 13.2227 7.8101 12.4755 7.8101C11.7284 7.8101 11.1045 7.18794 11.1045 6.40508Z" stroke="#8E8E93" />
                                        <path d="M19.9998 6.40514C19.9998 7.18797 19.3757 7.81016 18.6288 7.81016C17.8818 7.81016 17.2578 7.18794 17.2578 6.40508C17.2578 5.62211 17.8813 5 18.6288 5C19.3763 5 19.9998 5.62215 19.9998 6.40514Z" stroke="#8E8E93" />
                                        <path d="M7.74249 12.5097C7.74249 13.2926 7.11849 13.9147 6.37133 13.9147C5.62411 13.9147 5 13.2926 5 12.5097C5 11.7267 5.62419 11.1044 6.37133 11.1044C7.11842 11.1044 7.74249 11.7266 7.74249 12.5097Z" stroke="#8E8E93" />
                                        <path d="M13.7976 12.5097C13.7976 13.2927 13.1736 13.9147 12.4266 13.9147C11.6795 13.9147 11.0557 13.2927 11.0557 12.5097C11.0557 11.7265 11.6793 11.1044 12.4266 11.1044C13.1741 11.1044 13.7976 11.7265 13.7976 12.5097Z" stroke="#8E8E93" />
                                        <path d="M19.9516 12.5097C19.9516 13.2927 19.328 13.9147 18.5807 13.9147C17.8329 13.9147 17.209 13.2925 17.209 12.5097C17.209 11.7268 17.8332 11.1044 18.5807 11.1044C19.3279 11.1044 19.9516 11.7265 19.9516 12.5097Z" stroke="#8E8E93" />
                                        <path d="M5.04297 18.5947C5.04297 17.8118 5.66709 17.1896 6.4143 17.1896C7.16137 17.1896 7.78523 17.8116 7.78523 18.5947C7.78523 19.3778 7.16139 19.9997 6.4143 19.9997C5.66714 19.9997 5.04297 19.3773 5.04297 18.5947Z" stroke="#8E8E93" />
                                        <path d="M11.0986 18.5947C11.0986 17.8118 11.7227 17.1896 12.47 17.1896C13.2169 17.1896 13.8409 17.8117 13.8409 18.5947C13.8409 19.3778 13.2169 19.9997 12.47 19.9997C11.7225 19.9997 11.0986 19.3774 11.0986 18.5947Z" stroke="#8E8E93" />
                                        <path d="M17.252 18.5947C17.252 17.8117 17.876 17.1896 18.6229 17.1896C19.3699 17.1896 19.9939 17.8117 19.9939 18.5947C19.9939 19.3778 19.3702 19.9997 18.6229 19.9997C17.876 19.9997 17.252 19.3774 17.252 18.5947Z" stroke="#8E8E93" />
                                    </svg>
                                </Link>
                                <Link href="#" className="btn-view list">
                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.7016 18.3317H9.00246C8.5615 18.3317 8.2041 17.9743 8.2041 17.5333C8.2041 17.0923 8.5615 16.7349 9.00246 16.7349H19.7013C20.1423 16.7349 20.4997 17.0923 20.4997 17.5333C20.4997 17.9743 20.1426 18.3317 19.7016 18.3317Z" fill="#8E8E93" />
                                        <path d="M19.7016 13.3203H9.00246C8.5615 13.3203 8.2041 12.9629 8.2041 12.5219C8.2041 12.081 8.5615 11.7236 9.00246 11.7236H19.7013C20.1423 11.7236 20.4997 12.081 20.4997 12.5219C20.5 12.9629 20.1426 13.3203 19.7016 13.3203Z" fill="#8E8E93" />
                                        <path d="M19.7016 8.30919H9.00246C8.5615 8.30919 8.2041 7.95179 8.2041 7.51083C8.2041 7.06986 8.5615 6.71246 9.00246 6.71246H19.7013C20.1423 6.71246 20.4997 7.06986 20.4997 7.51083C20.4997 7.95179 20.1426 8.30919 19.7016 8.30919Z" fill="#8E8E93" />
                                        <path d="M5.5722 8.64465C6.16436 8.64465 6.6444 8.16461 6.6444 7.57245C6.6444 6.98029 6.16436 6.50024 5.5722 6.50024C4.98004 6.50024 4.5 6.98029 4.5 7.57245C4.5 8.16461 4.98004 8.64465 5.5722 8.64465Z" fill="#8E8E93" />
                                        <path d="M5.5722 13.5942C6.16436 13.5942 6.6444 13.1141 6.6444 12.522C6.6444 11.9298 6.16436 11.4498 5.5722 11.4498C4.98004 11.4498 4.5 11.9298 4.5 12.522C4.5 13.1141 4.98004 13.5942 5.5722 13.5942Z" fill="#8E8E93" />
                                        <path d="M5.5722 18.5438C6.16436 18.5438 6.6444 18.0637 6.6444 17.4716C6.6444 16.8794 6.16436 16.3994 5.5722 16.3994C4.98004 16.3994 4.5 16.8794 4.5 17.4716C4.5 18.0637 4.98004 18.5438 5.5722 18.5438Z" fill="#8E8E93" />
                                    </svg>
                                </Link>
                                <div className="wd-find-select flex">
                                    <div className="group-select select-wrapper">
                                        <select className="nice-select" tabIndex={0}><span className="current">Default order</span>

                                            <option value className="option">Default order</option>
                                            <option value="by-latest" className="option">All </option>
                                            <option value="low-to-high" className="option">Low to high</option>
                                            <option value="high-to-low" className="option">High to low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrap-item form-wg flex-wrap flex ">
                            <div className="box box-dream hv-one style-dream wg-box">
                                <div className="image-group relative ">
                                    <span className="featured fs-12 fw-6">Featured</span>
                                    <span className="featured style fs-12 fw-6">For sale</span>
                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                    <div className="swiper-container noo carousel-2 img-style h-100">
                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                        <Carousel2 start={1} end={5} />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                    <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                    <div className="icon-box flex">
                                        <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                        <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                        <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                    </div>
                                    <div className="days-box flex justify-space align-center">
                                        <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-20.jpg" alt="images" /></div>
                                        <div className="days">3 years ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-dream hv-one style-dream wg-box">
                                <div className="image-group relative ">
                                    <span className="featured fs-12 fw-6">Featured</span>
                                    <span className="featured style fs-12 fw-6">For sale</span>
                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                    <div className="swiper-container noo carousel-2 img-style h-100">
                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                        <Carousel2 start={2} end={6} />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                    <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                    <div className="icon-box flex">
                                        <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                        <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                        <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                    </div>
                                    <div className="days-box flex justify-space align-center">
                                        <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-21.jpg" alt="images" /></div>
                                        <div className="days">3 years ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-dream hv-one style-dream wg-box">
                                <div className="image-group relative ">
                                    <span className="featured fs-12 fw-6">Featured</span>
                                    <span className="featured style fs-12 fw-6">For sale</span>
                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                    <div className="swiper-container noo carousel-2 img-style h-100">
                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                        <Carousel2 start={3} end={7} />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                    <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                    <div className="icon-box flex">
                                        <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                        <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                        <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                    </div>
                                    <div className="days-box flex justify-space align-center">
                                        <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-22.jpg" alt="images" /></div>
                                        <div className="days">3 years ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-dream hv-one style-dream wg-box">
                                <div className="image-group relative ">
                                    <span className="featured fs-12 fw-6">Featured</span>
                                    <span className="featured style fs-12 fw-6">For sale</span>
                                    <span className="icon-bookmark"><i className="far fa-bookmark" /></span>
                                    <div className="swiper-container noo carousel-2 img-style h-100">
                                        <Link href="/property-detail-v1" className="icon-plus"><img src="/assets/images/icon/plus.svg" alt="images" /></Link>
                                        <Carousel2 start={4} end={8} />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3 className="link-style-1"><Link href="/property-detail-v1">Gorgeous Apartment Building</Link> </h3>
                                    <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
                                    <div className="money fs-18 fw-6 text-color-3"><Link href="/property-detail-v1">$7,500</Link></div>
                                    <div className="icon-box flex">
                                        <div className="icons icon-1 flex"><span>Beds: </span><span className="fw-6">4</span></div>
                                        <div className="icons icon-2 flex"><span>Baths: </span><span className="fw-6">2</span></div>
                                        <div className="icons icon-3 flex"><span>Sqft: </span><span className="fw-6">1150</span></div>
                                    </div>
                                    <div className="days-box flex justify-space align-center">
                                        <Link className="compare flex align-center fw-6" href="#">Compare</Link>
                                        <div className="img-author hv-tool" data-tooltip="Kathryn Murphy"><img src="/assets/images/author/author-23.jpg" alt="images" /></div>
                                        <div className="days">3 years ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="themesflat-pagination clearfix center">
                            <ul>
                                <li><a className="page-numbers style"><i className="far fa-angle-left" /></a></li>
                                <li><Link href="#" className="page-numbers">1</Link></li>
                                <li><Link href="#" className="page-numbers">2</Link></li>
                                <li><Link href="#" className="page-numbers current">3</Link></li>
                                <li><Link href="#" className="page-numbers">4</Link></li>
                                <li><Link href="#" className="page-numbers">...</Link></li>
                                <li><Link href="#" className="page-numbers style"><i className="far fa-angle-right" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-right fixed-space po-sticky">
                        {/* <div id="map" className="row-height" data-map-zoom={16} data-map-scroll="true" /> */}
                        <MapCluster />
                    </div>
                </div >
                <section className="flat-contact2 relative style">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-section">
                                    <h2>Find for your dream home and increase your investment opportunities</h2>
                                    <p className="text-color-2 font-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
                                    <div className="button-footer">
                                    <WhatsApp/>
                                    </div>
                                </div>
                                <div className="mark-img">
                                    <img src="/images/home/contact.png" alt="images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout >
        </>
    )
}