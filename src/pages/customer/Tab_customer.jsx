import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Typography } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import QuickTabs from '../../components/Layout/Content/QuickTabs';
import { BlockLevelBreadcrumbs } from '../../components/Layout/Content/Breadcrumbs ';
import Inquiry from './Inquiry';
import { useParams, useNavigate } from 'react-router-dom';
function Tab_customer() {
    const navigate = useNavigate();
    const { customerId } = useParams();
    const defaultTab = 'inquiry';
    const [activeTab, setActiveTab] = useState(customerId || defaultTab);
    const [dataBody, setDataBody] = useState({});('inquiry');
    const site = '고객센터';
    const data = [
        {
            label: '온라인견적문의',
            labelDesc: 'inquiry',
            value: 'inquiry',
            content: <Inquiry />,
        },
    ];
    const handleTabChange = (value) => {
        setActiveTab(value);
        navigate(`/customer-center/${value}`, { state: { value } });
    };

    useEffect(() => {
        if (customerId) {
            setActiveTab(customerId);
        }
    }, [customerId]);

    useEffect(() => {
        const activeItem = data.find((item) => item.value === activeTab);
        if (activeItem) {
            setDataBody(activeItem);
        }
    }, [activeTab]);
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

                <div className="bg-[url('/src/assets/content/subVisual_1.jpg')] bg-auto bg-center bg-no-repeat p-0 w-[1200px]  border-b-2 border-[gray] mx-auto">
                    {data.map(({ label, labelDesc, value }) => (
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
                    {data.map(({ label, labelDesc, value }) => (
                        <Tab key={value} value={value} className="md:pl-0 p-0 m-0">
                            <a>
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
                            image={'/src/assets/content/quick04.png'}
                            text1={'카달로그 다운'}
                            text3={'바로가기'}
                        />
                        <QuickTabs
                            image={'/src/assets/content/quick02.png'}
                            text1={'온라인 견적문의'}
                            text3={'바로가기'}
                        />
                        <QuickTabs
                            image={'/src/assets/content/quick03.png'}
                            text1={'찾아오시는길'}
                            text3={'바로가기'}
                        />
                    </ul>
                </TabsHeader>
                {activeTab === dataBody?.value && (
                    <TabPanel value={dataBody?.value} className="p-0 px-16 py-6">
                        {activeTab === dataBody?.value && dataBody?.content}
                    </TabPanel>
                )}
            </Tabs>
        </div>
    );
}

export default Tab_customer;
