import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import MessageCom from './MessageCom';
import HistoryCom from './HistoryCom';
import CertificationCom from './CertificationCom';
import LocationCom from './LocationCom';
import { BlockLevelBreadcrumbs } from '../../components/Layout/Content/Breadcrumbs ';

function TabCompany() {
    const [activeTab, setActiveTab] = useState('Message');
    const site = '회사소개';
    const data = [
        {
            label: '회사개요',
            labelDesc: 'Message',
            value: 'Message',
            content: <MessageCom />,
            href: '#message',
        },
        {
            label: '회사연혁',
            labelDesc: 'History',
            value: 'History',
            content: <HistoryCom />,
            href: '#history',
        },
        {
            label: '품질인증',
            labelDesc: 'Quality Certification',
            value: 'Certification',
            content: <CertificationCom />,
            href: '#quality-certification',
        },
        {
            label: '찾아오시는길',
            labelDesc: 'Location',
            value: 'Location',
            content: <LocationCom />,
            href: '#location',
        },
    ];

    return (
        <div className="w-full">
            {/* //! Top Body */}
            <div className="flex w-full">
                <div className="w-[13rem] block bg-[#4A4F5A] text-center">
                    <div className="w-full my-[49px]">
                        <Typography variant="h4" color="white">
                            회사소개
                        </Typography>
                        <Typography className="text-[11px] tracking-tighter text-gray-500">
                            Company Introduction
                        </Typography>
                    </div>
                </div>

                <div className="bg-[url('/src/assets/content/subVisual_1.jpg')] bg-auto bg-center bg-no-repeat p-0 mx-[48px] w-[49.9rem]  border-b-2 border-[gray]">
                    {data.map(({ label, value }) => (
                        <Tabs
                            key={value}
                            value={value}
                            className={activeTab === value ? 'justify-start mt-20' : 'hidden'}
                        >
                            <Typography>회사소개</Typography>

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
                                        onClick={() => setActiveTab(value)}
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
                    <ul>
                        <li>1</li>
                        <li>1</li>
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
