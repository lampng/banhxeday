import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Typography } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import Casternomenclature from './Casternomenclature';
import Platenomenclature from './Platenomenclature';
import Loadcapacity from './Loadcapacity';
import Casternumberingsystem from './Casternumberingsystem';
import Usage from './Usage';
import QuickTabs from '../../components/Layout/Content/QuickTabs';
import quick04 from '/src/assets/content/quick04.png'
import quick02 from '/src/assets/content/quick02.png'
import quick03 from '/src/assets/content/quick03.png'
import { BlockLevelBreadcrumbs } from '../../components/Layout/Content/Breadcrumbs ';
import { useLocation, useNavigate } from 'react-router-dom';

function TabCompany() {
    const location = useLocation();
    const navigate = useNavigate();
    const initialTab = location.state && location.state.value ? location.state.value : 'Casternomenclature';
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        if (location.state && location.state.value) {
            setActiveTab(location.state.value);
        }
    }, [location.state]);
    const site = '캐스터자료실';
    const data = [
        {
            label: '캐스터용어',
            labelDesc: 'Caster Nomenclature',
            value: 'Casternomenclature',
            content: <Casternomenclature />,
            href: '#Caster-Nomenclature',
        },
        {
            label: '플레이트용어',
            labelDesc: 'Plate Nomenclature',
            value: 'Platenomenclature',
            content: <Platenomenclature />,
            href: '#Plate-Nomenclature',
        },
        {
            label: '품질인증',
            labelDesc: 'Load Capacity',
            value: 'Loadcapacity',
            content: <Loadcapacity />,
            href: '#Load-Capacity',
        },
        {
            label: '표기방법및용어',
            labelDesc: 'Caster Numbering System',
            value: 'Casternumberingsystem',
            content: <Casternumberingsystem />,
            href: '#Caster-Numbering-System',
        },
        {
            label: '주의사항',
            labelDesc: 'Usage',
            value: 'Usage',
            content: <Usage />,
            href: '#Usage',
        },
    ];
    const handleTabChange = (value) => {
        setActiveTab(value);
        navigate('/caster-data#', { state: { value } });
    };
    return (
        <div className="w-full">
            {/* //! Top Body */}
            <div className="flex w-full justify-between">
                <div className="w-[13rem] block bg-[#4A4F5A] text-center">
                    <div className="w-full my-[49px]">
                        <Typography variant="h4" color="white">
                            캐스터자료실
                        </Typography>
                        <Typography className="text-[11px] tracking-tighter text-gray-500">Caster Data</Typography>
                    </div>
                </div>

                <div className="bg-[url('/src/assets/content/subVisual_1.jpg')] bg-auto bg-center bg-no-repeat p-0 w-[49rem]  border-b-2 border-[gray] mx-auto">
                    {data.map(({ label, value }) => (
                        <Tabs
                            key={value}
                            value={value}
                            className={activeTab === value ? 'justify-start mt-16' : 'hidden'}
                        >
                            <Typography variant="h2">캐스터자료실</Typography>

                            <BlockLevelBreadcrumbs Site={site} Item={label} />
                        </Tabs>
                    ))}
                </div>
            </div>
            {/* //! Middle Body */}
            <Tabs value={activeTab} orientation="vertical">
                <TabsHeader
                    className="rounded-none bg-transparent p-0 shadow-none h-max bg-gray-900 bg-opacity-5"
                    indicatorProps={{
                        className: 'bg-transparent shadow-none rounded-none',
                    }}
                >
                    {data.map(({ label, labelDesc, href, value }) => (
                        <Tab key={value} value={value} className="md:pl-0 p-0 m-0">
                            <a href={href}>
                                <div className="w-[13rem] relative">
                                    <Tab
                                        onClick={() => handleTabChange(value)}
                                        className={
                                            activeTab === value
                                                ? 'bg-red-900 text-white justify-start text-start w-full h-[3rem]  px-4'
                                                : 'justify-start text-start w-full h-[3rem] px-4'
                                        }
                                    >
                                        <div className="w-max">
                                            <div className="text-[15px] leading-none font-bold">{label}</div>
                                            <div
                                                className={
                                                    activeTab === value
                                                        ? 'text-[11px] leading-none font-medium text-white'
                                                        : 'text-[11px] leading-none font-medium text-gray-500'
                                                }
                                            >
                                                {labelDesc}
                                            </div>
                                        </div>
                                    </Tab>
                                    {activeTab === value && (
                                        <div className="absolute top-[0.44rem] end-[-1.05rem] w-[2.12rem] h-[2.12rem] bg-red-900 transform rotate-45"></div>
                                    )}
                                </div>
                            </a>
                        </Tab>
                    ))}
                    {/* //! DOWNLOAD - SEARCH - COMPANY */}
                    <ul className="w-[13rem] px-3 *:py-1 py-14">
                        <QuickTabs
                            image={{quick04}}
                            text1={'카달로그 다운'}
                            text3={'바로가기'}
                        />
                        <QuickTabs
                            image={{quick02}}
                            text1={'온라인 견적문의'}
                            text3={'바로가기'}
                        />
                        <QuickTabs
                            image={{quick03}}
                            text1={'찾아오시는길'}
                            text3={'바로가기'}
                        />
                    </ul>
                </TabsHeader>
                <TabsBody className="">
                    {data.map(({ value, content }) => (
                        <TabPanel key={value} value={value} className="p-0 px-16 py-6">
                            {content}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
}

export default TabCompany;
