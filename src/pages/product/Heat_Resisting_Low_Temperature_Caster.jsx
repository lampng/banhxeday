import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
function Heat_Resisting_Low_Temperature_Caster({ label, labelDesc }) {
    const DATA = [
        // ! 1
        {
            image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_02.jpg',
            id: 'DS 23 SERIES 경량용 (Light-Duty)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_00.jpg',
                        type: 'Model: DS 2340 NGM-BK',
                    },
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_01.jpg',
                        type: 'Model: DS 2340 NGM-R',
                    },
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_02.jpg',
                        type: 'Model: DS 2340 NGM-S',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: 'Wheel Dia', unit: '(mm)', image: '/src/assets/content/WheelDia.jpg' },
                        { text: 'Tread Width', unit: '(mm)', image: '/src/assets/content/TreadWidth.jpg' },
                        { text: 'Wheel Material', image: '/src/assets/content/WheelMaterial.jpg' },
                        { text: 'Bearing', image: '/src/assets/content/Bearing.jpg' },
                        { text: 'Load Height', unit: '(mm)', image: '/src/assets/content/LoadHeight1.jpg' },
                        { text: 'Load Height', unit: '(mm)', image: '/src/assets/content/LoadHeight2.jpg' },
                        { text: 'Swivel Radius', unit: '(mm)', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '허용온도' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 2330 NGM', 75, 32, 'Nylon Glass Mineral', 'Plain', 105, 111, 73, 50, '-35°C ~ +220°C', 40],
                        [
                            'DS 2340 NGM',
                            102,
                            32,
                            'Nylon Glass Mineral',
                            'Plain',
                            127,
                            133,
                            85,
                            60,
                            '-35°C ~ +220°C',
                            30,
                        ],
                        [
                            'DS 2350 NGM',
                            127,
                            32,
                            'Nylon Glass Mineral',
                            'Plain',
                            157,
                            163,
                            100,
                            70,
                            '-35°C ~ +220°C',
                            20,
                        ],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160517042243_10.PNG.jpg',
                    },
                ],
                testReport: [
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_20.jpg',
                    },
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_21.jpg',
                    },
                ],
            },
        },
        // ! 2
        {
            image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESHeavyDuty/160426105424_00.jpg',
            id: 'DS 23 SERIES 중량용 (Heavy-Duty)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESHeavyDuty/160426105424_00.jpg',
                        type: 'Model: DS 2351 PHN-BK',
                    },
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESHeavyDuty/160426105424_01.jpg',
                        type: 'Model: DS PHN-R',
                    },
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESHeavyDuty/160426105424_02.jpg',
                        type: 'Model: DS PHN-S',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: 'Wheel Dia', unit: '(mm)', image: '/src/assets/content/WheelDia.jpg' },
                        { text: 'Tread Width', unit: '(mm)', image: '/src/assets/content/TreadWidth.jpg' },
                        { text: 'Wheel Material', image: '/src/assets/content/WheelMaterial.jpg' },
                        { text: 'Bearing', image: '/src/assets/content/Bearing.jpg' },
                        { text: 'Load Height', unit: '(mm)', image: '/src/assets/content/LoadHeight1.jpg' },
                        // { text: 'Load Height', unit: '(mm)', image: '/src/assets/content/LoadHeight2.jpg' },
                        { text: 'Swivel Radius', unit: '(mm)', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '허용온도' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 2341 PHN', 101, 50, 'Phenolic', 'Roller', 141, 74, 150, '-35°C ~ +150°C', 16],
                        ['DS 2351 PHN', 127, 50, 'Phenolic', 'Roller', 164, 94, 180, '-35°C ~ +150°C', 10],
                        ['DS 2361 PHN', 152, 50, 'Phenolic', 'Roller', 189, 111, 200, '-35°C ~ +150°C', 10],
                        ['DS 2381 PHN', 200, 50, 'Phenolic', 'Roller', 241, 145, 220, '-35°C ~ +150°C', 5],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS23SERIESHeavyDuty/160517042434_10.PNG.jpg',
                    },
                ],
            },
        },
        // ! 3
        {
            image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160426105447_02.jpg',
            id: 'DS 27 SERIES 스테인리스 경량용 (Stainless Light-Duty)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160426105447_00.jpg',
                        type: 'Model: DS 2730 NGM-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160426105447_01.jpg',
                        type: 'Model: DS 2730 NGM-BT',
                    },
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160426105447_02.jpg',
                        type: 'Model: DS 2740 NGM-BK',
                    },
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160426105447_03.jpg',
                        type: 'Model: DS 2740 NGM-S',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: 'Wheel Dia', unit: '(mm)', image: '/src/assets/content/WheelDia.jpg' },
                        { text: 'Tread Width', unit: '(mm)', image: '/src/assets/content/TreadWidth.jpg' },
                        { text: 'Wheel Material', image: '/src/assets/content/WheelMaterial.jpg' },
                        { text: 'Bearing', image: '/src/assets/content/Bearing.jpg' },
                        { text: 'Load Height', unit: '(mm)', image: '/src/assets/content/LoadHeight1.jpg' },
                        { text: 'Load Height', unit: '(mm)', image: '/src/assets/content/LoadHeight2.jpg' },
                        { text: 'Swivel Radius', unit: '(mm)', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '허용온도' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 2730 NGM', 75, 32, 'Nylon Glass Mineral', 'Plain', 105, 111, 73, 50, '-35°C ~ +220°C', 40],
                        [
                            'DS 2740 NGM',
                            102,
                            32,
                            'Nylon Glass Mineral',
                            'Plain',
                            127,
                            133,
                            85,
                            60,
                            '-35°C ~ +220°C',
                            30,
                        ],
                        [
                            'DS 2750 NGM',
                            127,
                            32,
                            'Nylon Glass Mineral',
                            'Plain',
                            157,
                            163,
                            100,
                            70,
                            '-35°C ~ +220°C',
                            20,
                        ],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160517042509_10.PNG.jpg',
                    },
                ],
            },
        },
        // ! 4
        {
            image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS27SERIESHeavyDuty/160426105511_01.jpg',
            id: 'DS 27 SERIES 스테인리스 중량용 (Stainless Heavy-Duty)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS27SERIESHeavyDuty/160426105511_00.jpg',
                        type: 'Model: DS 2751 PHN-BK',
                    },
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS27SERIESHeavyDuty/160426105511_01.jpg',
                        type: 'Model: DS 2751 PHN-R',
                    },
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS27SERIESHeavyDuty/160426105511_02.jpg',
                        type: 'Model: DS 2751 PHN-S',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: 'Wheel Dia', unit: '(mm)', image: '/src/assets/content/WheelDia.jpg' },
                        { text: 'Tread Width', unit: '(mm)', image: '/src/assets/content/TreadWidth.jpg' },
                        { text: 'Wheel Material', image: '/src/assets/content/WheelMaterial.jpg' },
                        { text: 'Bearing', image: '/src/assets/content/Bearing.jpg' },
                        { text: 'Load Height', unit: '(mm)', image: '/src/assets/content/LoadHeight1.jpg' },
                        // { text: 'Load Height', unit: '(mm)', image: '/src/assets/content/LoadHeight2.jpg' },
                        { text: 'Swivel Radius', unit: '(mm)', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '허용온도' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 2741 PHN', 101, 50, 'Phenolic', 'Roller', 141, 74, 150, '-35°C ~ +150°C', 16],
                        ['DS 2751 PHN', 127, 50, 'Phenolic', 'Roller', 164, 94, 180, '-35°C ~ +150°C', 10],
                        ['DS 2761 PHN', 150, 50, 'Phenolic', 'Roller', 189, 111, 200, '-35°C ~ +150°C', 10],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/HeatResistingLowTemperatureCaster/DS27SERIESHeavyDuty/160517042538_10.PNG.jpg',
                    },
                ],
            },
        },
    ];
    return (
        <div>
            <div className="flex items-center gap-1 my-2">
                <div className="w-5 h-5 rounded-full bg-white border-4 border-red-900" />
                <Typography variant="h6" className="text-black">
                    {label} <span className="font-black text-xs text-gray-600">{labelDesc}</span>
                </Typography>
            </div>
            <div className="w-full flex flex-wrap justify-start">
                {DATA.map(({ image, id, des }) => {
                    return (
                        <div className="w-1/3 p-4">
                            <div className="w-full border">
                                <DrawerProduct image={image} id={id} des={des} label={label} labelDesc={labelDesc} />
                            </div>
                            <div className="bg-gray-100 py-5 px-4 text-[12px] h-[100px]  font-bold">{id}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Heat_Resisting_Low_Temperature_Caster;
