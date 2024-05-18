

import Link from 'next/link'

export default function FlatSearchHome3() {
    return (
        <>
            <section className="flat-search-home ">
                <div className="container3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Search for your dream home or increase your investment opportunity today</h2>
                                <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
                            </div>
                            <div className="box-icon flex align-center justify-center">
                                <div className="icon relative flex-none">
                                    <svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.4648 13.2812C26.4648 14.0902 27.1207 14.7461 27.9297 14.7461C28.7387 14.7461 29.3945 14.0902 29.3945 13.2812C29.3945 12.4723 28.7387 11.8164 27.9297 11.8164C27.1207 11.8164 26.4648 12.4723 26.4648 13.2812Z" fill="white" />
                                        <path d="M32.3242 13.2812C32.3242 14.0902 32.9801 14.7461 33.7891 14.7461C34.598 14.7461 35.2539 14.0902 35.2539 13.2812C35.2539 12.4723 34.598 11.8164 33.7891 11.8164C32.9801 11.8164 32.3242 12.4723 32.3242 13.2812Z" fill="white" />
                                        <path d="M38.1836 13.2812C38.1836 14.0902 38.8395 14.7461 39.6484 14.7461C40.4574 14.7461 41.1133 14.0902 41.1133 13.2812C41.1133 12.4723 40.4574 11.8164 39.6484 11.8164C38.8395 11.8164 38.1836 12.4723 38.1836 13.2812Z" fill="white" />
                                        <path d="M22.6771 36.7188L27.0716 33.7891L35.8398 36.7188V42.5781C35.8398 44.1961 34.549 45.5078 32.931 45.5078C16.7508 45.5078 1.46484 30.3195 1.46484 14.1394C1.46484 12.5214 2.77656 11.2305 4.39453 11.2305H10.2539L13.1836 19.9987L10.2539 24.3933C12.1247 29.0703 18 34.8479 22.6771 36.7188Z" stroke="white" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.1406 13.2812C19.1406 18.1354 23.0756 22.0703 27.9297 22.0703V27.9297L33.7891 22.0703H39.6484C44.5025 22.0703 48.5352 18.1354 48.5352 13.2812C48.5352 8.42715 44.5025 4.49219 39.6484 4.49219H27.9297C23.0756 4.49219 19.1406 8.42715 19.1406 13.2812Z" stroke="white" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="content">
                                    <p className=" fw-6">Request a call back</p>
                                    <Link href="/tel:0123456789"><div className="fs-30 fw-7">314-555-0123</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
