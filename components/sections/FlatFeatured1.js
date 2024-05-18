

import Link from 'next/link';
import { useState } from 'react';
import Carousel2 from '../slider/Carousel2';
import Card from '@/ui/Card';
import TabMenu from '@/ui/TabMenu';

export default function FlatFeatured1() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    console.log(activeIndex,"activeIndex");
    const Data = [
        {
            id:1,
            isFeatured: true,
            title: "Gorgeous Apartment Building",
            address: "58 Hullbrook Road, Billesley, B13 0LA",
            price: "$7,500",
            beds: 4,
            baths: 2,
            sqft: 1150,
            author: "Kathryn Murphy",
            authorAvatar: "/assets/images/icon/plus.svg",
            postedDate: "3 years ago"
        }
    ]
    const TabMenuData = [
        { title: "Houses", propertyCount: 8 },
        { title: "Smart home", propertyCount: 6 },
        { title: "Apartments", propertyCount: 5 },
        { title: "Office", propertyCount: 7 },
        { title: "Villa", propertyCount: 6 },
        { title: "Bungalow", propertyCount: 3 }
    ]
    return (
        <>
            <section className="flat-featured wg-dream home">
                <div className="container3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Featured properties</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                            </div>
                            <div className="flat-tabs themesflat-tabs">
                                <TabMenu
                                    activeIndex={activeIndex}
                                    handleOnClick={handleOnClick}
                                    tabData={TabMenuData}
                                />
                                <div className="content-tab">
                                    {Data?.map((item) => {
                                        return (
                                            <Card
                                                key={item?.id}
                                                activeIndex={activeIndex}
                                                propertyData={item}
                                            />
                                        )
                                    })}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
