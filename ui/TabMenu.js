import React from 'react';

const TabMenu = ({ activeIndex, handleOnClick, tabData }) => {
    return (
        <div className="box-tab center">
            <ul className="menu-tab tab-title flex justify-center">
                {tabData.map((tab, index) => (
                    <li key={index} className={activeIndex === index + 1 ? "item-title hv-tool active" : "item-title hv-tool"} data-tooltip={`${tab.propertyCount} Property`} onClick={() => handleOnClick(index + 1)}>
                        <h5 className="inner">{tab.title}</h5>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TabMenu;
