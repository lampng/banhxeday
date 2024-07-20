import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Typography } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import QuickTabs from '../../components/Layout/Content/QuickTabs';
import { BlockLevelBreadcrumbs } from '../../components/Layout/Content/Breadcrumbs ';
import { useParams, useNavigate } from 'react-router-dom';

//! TABS
import LightDutyCaster from './Light_Duty_Caster';
import MediumDutyCaster from './Medium_Duty_Caster';
import HeavyDutyCaster from './Heavy_Duty_Caster';
import SuperHeavyDutyCaster from './Super_Heavy_Duty_Caster';
import StainlessSteelCaster from './Stainless_Steel_Caster';
import HeatResistingLowTemperatureCaster from './Heat_Resisting_Low_Temperature_Caster';
import MedicalEquipmentCaster from './Medical_Equipment_Caster';
import LowNoiseCaster from './Low_Noise_Caster';
import SpecialCaster from './Special_Caster';
import LevelingCaster from './Leveling_Caster';
import LevelingFoot from './Leveling_Foot';
function Tab_Product() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const defaultTab = 'Light-Duty';
    const [activeTab, setActiveTab] = useState(productId || defaultTab);
    const [dataBody, setDataBody] = useState({});
    const site = '제품소개';
    const data = [
        {
            label: '경하중용캐스터',
            labelDesc: 'Light-Duty Caster',
            value: 'Light-Duty',
            content: <LightDutyCaster label="경하중용캐스터" labelDesc="Light-Duty Caster" />,
        },
        {
            label: '중간하중용 캐스터',
            labelDesc: 'Medium-Duty Caster',
            value: 'Medium-Duty',
            content: <MediumDutyCaster label="중간하중용 캐스터" labelDesc="Medium-Duty Caster" />,
        },
        {
            label: '중하중용 캐스터',
            labelDesc: 'Heavy-Duty Caster',
            value: 'Heavy-Duty',
            content: <HeavyDutyCaster label="중하중용 캐스터" labelDesc="Heavy-Duty Caster" />,
        },
        {
            label: '고하중용 캐스터',
            labelDesc: 'Super Heavy-Duty Caster',
            value: 'Super-Heavy-Duty',
            content: <SuperHeavyDutyCaster label="고하중용 캐스터" labelDesc="Super Heavy-Duty Caster" />,
        },
        {
            label: '스테인리스 캐스터',
            labelDesc: 'Stainless Steel Caster',
            value: 'StainlessiSteel',
            content: <StainlessSteelCaster label="스테인리스 캐스터" labelDesc="Stainless Steel Caster" />,
        },
        {
            label: '내열성/내한성 캐스터',
            labelDesc: 'Heat-Resisting/Low Temperature Caster',
            value: 'Heat-Resisting',
            content: (
                <HeatResistingLowTemperatureCaster
                    label="내열성/내한성 캐스터"
                    labelDesc="Heat-Resisting/Low Temperature Caster"
                />
            ),
        },
        {
            label: '의료용 캐스터',
            labelDesc: 'Medical Equipment Caster',
            value: 'Medical-Equipment',
            content: <MedicalEquipmentCaster label="의료용 캐스터" labelDesc="Medical Equipment Caster" />,
        },
        {
            label: '저소음 캐스터',
            labelDesc: 'Low Noise Caster',
            value: 'Low-Noise',
            content: <LowNoiseCaster label="저소음 캐스터" labelDesc="Low Noise Caster" />,
        },
        {
            label: '특수 목적용 캐스터',
            labelDesc: 'Special Caster',
            value: 'Special-Caster',
            content: <SpecialCaster label="특수 목적용 캐스터" labelDesc="Special Caster" />,
        },
        {
            label: '높낮이조절 캐스터',
            labelDesc: 'Leveling Caster',
            value: 'Leveling-Caster',
            content: <LevelingCaster label="높낮이조절 캐스터" labelDesc="Leveling Caster" />,
        },
        {
            label: '높낮이 조절자',
            labelDesc: 'Leveling Foot',
            value: 'Leveling-Foot',
            content: <LevelingFoot label="높낮이 조절자" labelDesc="Leveling Foot" />,
        },
    ];
    const handleTabChange = (value) => {
        setActiveTab(value);
        navigate(`/products/${value}`, { state: { value } });
    };

    useEffect(() => {
        if (productId) {
            setActiveTab(productId);
        }
    }, [productId]);

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
                                                        ? 'text-[11px] leading-none  tracking-[-0.05em] font-medium text-white'
                                                        : 'text-[11px] leading-none  tracking-[-0.05em] font-medium text-gray-500'
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

export default Tab_Product;
