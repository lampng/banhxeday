import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
function Medical_Equipment_Caster({ label, labelDesc }) {
    const DATA = [
        // ! 1
        {
            image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160426105549_07.jpg',
            id: 'DS 21 SERIES 무소음 플라스틱 캐스터 (Low Noise Plastic Caster)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160426105549_00.jpg',
                        type: 'Model: DS 2140 ELA-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160426105549_01.jpg',
                        type: 'Model: DS 2140 MRB-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160426105549_02.jpg',
                        type: 'Model: DS 2140 MRB-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160426105549_03.jpg',
                        type: 'Model: DS 2140 MRB-S',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160426105549_04.jpg',
                        type: 'Model: DS 2150 ELA-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160426105549_05.jpg',
                        type: 'Model: DS 2150 ELA-S',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160426105549_06.jpg',
                        type: 'Model: DS 2150 MRB-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160426105549_07.jpg',
                        type: 'Model: DS 2150 MRB-BT BK(원주형)',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160426105549_08.jpg',
                        type: 'Model: DS 2150 MRB-BT',
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
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 2130 MRB', 77, 30, 'Mirage Rubber', '6202ZZ', 125, 125, 75, 70, 30],
                        ['DS 2130 ELA', 77, 30, 'Elastomer', '6202ZZ', 125, 125, 75, 70, 30],
                        ['DS 2140 MRB', 101, 30, 'Mirage Rubber', '6202ZZ', 150, 150, 86, 80, 22],
                        ['DS 2140 ELA', 101, 30, 'Elastomer', '6202ZZ', 150, 150, 86, 80, 22],
                        ['DS 2140 NSR', 101, 30, 'Natural Soft Rubber', '6202ZZ', 150, 150, 86, 80, 22],
                        ['DS 2150 MRB', 127, 32, 'Mirage Rubber', '6202ZZ', 175, 175, 99, 90, 16],
                        ['DS 2150 ELA', 127, 32, 'Elastomer', '6202ZZ', 175, 175, 99, 90, 16],
                        ['DS 2150 NSR', 127, 32, 'Natural Soft Rubber', '6202ZZ', 175, 175, 99, 90, 16],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160518113642_10.PNG.jpg',
                },]
            },
        },
        // ! 2
        {
            image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_2/180308044315_01.jpg',
            id: 'DS 21 SERIES 중량용 무소음 플라스틱 캐스터 (Low Noise Plastic Heavy Duty Caster)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_2/180308044315_00.jpg',
                        type: 'Model: DS 2151 MRB-S',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_2/180308044315_01.jpg',
                        type: 'Model: DS 2151 MRB-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_2/180308044315_02.jpg',
                        type: 'Model: DS 2161 MRB-BT',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_2/180308044315_03.jpg',
                        type: 'Model: DS 2161 MRB-BT BK',
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
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 2151 MRB', 127, 40, 'Mirage Rubber', '6203ZZ', 178, 102, 180, 16],
                        ['DS 2161 MRB', 152, 40, 'Mirage Rubber', '6203ZZ', 203, 114, 200, 14],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_2/180308042118_10.jpg',
                },]
            },
        },
        // ! 3
        {
            image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_00.jpg',
            id: 'DS 24 SERIES 원터치 제동용 (One-Touch Brake)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_00.jpg',
                        type: 'Model: DS 2425 MRB-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_01.jpg',
                        type: 'Model: DS 2430 EPU-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_02.jpg',
                        type: 'Model: DS 2430 MRB-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_03.jpg',
                        type: 'Model: DS 2430 PCB-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_04.jpg',
                        type: 'Model: DS 2430 PCB-R',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_05.jpg',
                        type: 'Model: DS 2440 ELA-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_06.jpg',
                        type: 'Model: DS 2440 EPU-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_07.jpg',
                        type: 'Model: DS 2440 EPU-S',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_08.jpg',
                        type: 'Model: DS 2440 PCB-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_09.jpg',
                        type: 'Model: DS 2440 PCB-S',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160426105652_010.jpg',
                        type: 'Model: DS 2460 MRB-BK',
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
                        // { text: 'Swivel Radius', unit: '(mm)', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'S', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'B/K', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 2425 MRB', 63, 30, 'Mirage Rubber', '608ZZ', 100, 106, '·', 96, 60, 40],
                        ['DS 2430 MRB', 77, 30, 'Mirage Rubber', '608ZZ', 114, 120, 70, 96, 70, 32],
                        ['DS 2430 ELA', 77, 30, 'Elastomer', '608ZZ', 114, 120, 70, 96, 70, 32],
                        ['DS 2430 EPU', 77, 30, 'Elastic Poly Urethane', '608ZZ', 114, 120, 70, 96, 80, 32],
                        ['DS 2430 PCB', 77, 30, 'Poly Vinyl Chloride', '6202ZZ', 114, 120, 70, 96, 70, 32],
                        ['DS 2440 MRB', 101, 30, 'Mirage Rubber', '608ZZ', 138, 144, 82, 96, 80, 24],
                        ['DS 2440 ELA', 101, 30, 'Elastomer', '608ZZ', 138, 144, 82, 96, 80, 24],
                        ['DS 2440 EPU', 101, 30, 'Elastic Poly Urethane', '608ZZ', 138, 144, 82, 96, 90, 24],
                        ['DS 2440 PCB', 101, 30, 'Poly Vinyl Chloride', '6202ZZ', 138, 144, 82, 96, 80, 24],
                        ['DS 2450 MRB', 127, 32, 'Mirage Rubber', '608ZZ', 163, 169, 95, 96, 90, 20],
                        ['DS 2450 ELA', 127, 32, 'Elastomer', '608ZZ', 163, 169, 95, 96, 90, 20],
                        ['DS 2450 EPU', 127, 32, 'Elastic Poly Urethane', '608ZZ', 163, 169, 95, 96, 100, 20],
                        ['DS 2450 PCB', 127, 32, 'Poly Vinyl Chloride', '6202ZZ', 163, 169, 95, 96, 90, 20],
                        ['DS 2460 MRB', 152, 32, 'Mirage Rubber', '608ZZ', 191, 197, '·', 103, 100, 12],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/MedicalEquipmentCaster/DS24SERIES/160517042748_10.PNG.jpg',
                },]
            },
        },
        // ! 4
        {
            image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_06.jpg',
            id: 'DS 21 SERIES 중량용 무소음 플라스틱 캐스터 (Low Noise Plastic Heavy Duty Caster)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_00.jpg',
                        type: 'Model: DS 2530 EPU-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_01.jpg',
                        type: 'Model: DS 2530 EPU-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_02.jpg',
                        type: 'Model: DS 2530 PCB-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_03.jpg',
                        type: 'Model: DS 2530 PCB-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_04.jpg',
                        type: 'Model: DS 2540 ELA-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_05.jpg',
                        type: 'Model: DS 2540 EPU-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_06.jpg',
                        type: 'Model: DS 2540 MRB-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_07.jpg',
                        type: 'Model: DS 2540 MRB-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_08.jpg',
                        type: 'Model: DS 2550 EPU-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_09.jpg',
                        type: 'Model: DS 2550 MRB(P)-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160426105727_010.jpg',
                        type: 'Model: DS 2550 MRB-BT BK',
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
                        // { text: 'Swivel Radius', unit: '(mm)', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'S', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'B/K', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 2530 MRB', 77, 30, 'Mirage Rubber', '608ZZ', 114, 120, 70, 98, 70, 32],
                        ['DS 2530 ELA', 77, 30, 'Elastomer', '608ZZ', 114, 120, 70, 98, 70, 32],
                        ['DS 2530 EPU', 77, 30, 'Elastic Poly Urethane', '608ZZ', 114, 120, 70, 98, 70, 32],
                        ['DS 2530 PCB', 77, 30, 'Poly Vinyl Chloride', '6202ZZ', 114, 120, 70, 98, 70, 32],
                        ['DS 2540 MRB', 101, 30, 'Mirage Rubber', '608ZZ', 138, 144, 82, 98, 80, 24],
                        ['DS 2540 ELA', 101, 30, 'Elastomer', '608ZZ', 138, 144, 82, 98, 80, 24],
                        ['DS 2540 EPU', 101, 30, 'Elastic Poly Urethane', '608ZZ', 138, 144, 82, 98, 80, 24],
                        ['DS 2540 PCB', 101, 30, 'Poly Vinyl Chloride', '6202ZZ', 138, 144, 82, 98, 80, 24],
                        ['DS 2550 MRB', 127, 32, 'Mirage Rubber', '608ZZ', 163, 169, 95, 98, 90, 20],
                        ['DS 2550 ELA', 127, 32, 'Elastomer', '608ZZ', 163, 169, 95, 98, 90, 20],
                        ['DS 2550 EPU', 127, 32, 'Elastic Poly Urethane', '608ZZ', 163, 169, 95, 98, 100, 20],
                        ['DS 2550 PCB', 127, 32, 'Poly Vinyl Chloride', '6202ZZ', 163, 169, 95, 98, 90, 20],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/MedicalEquipmentCaster/DS25SERIES/160517042824_10.PNG.jpg',
                },]
            },
        },
        // ! 5
        {
            image: '/src/assets/content/products/MedicalEquipmentCaster/DS28SERIES/160426105754_03.jpg',
            id: 'DS 28 SERIES 보급형',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS28SERIES/160426105754_00.jpg',
                        type: 'Model: DS 2840 EPU-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS28SERIES/160426105754_01.jpg',
                        type: 'Model: DS 2840 EPU-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS28SERIES/160426105754_02.jpg',
                        type: 'Model: DS 2840 EPU-S',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS28SERIES/160426105754_03.jpg',
                        type: 'Model: DS 2840 MRB-BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS28SERIES/160426105754_04.jpg',
                        type: 'Model: DS 2840 MRB-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS28SERIES/160426105754_05.jpg',
                        type: 'Model: DS 2840 MRB-S',
                    },
                    {
                        image: '/src/assets/content/products/MedicalEquipmentCaster/DS28SERIES/160426105754_06.jpg',
                        type: 'Model: DS 2840 MRP-BK',
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
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 2840 MRB', 101, 25, 'Mirage Rubber', '6202ZZ', 132, 138, 79, 60, 30],
                        ['DS 2840 MRP', 101, 25, 'Mirage Rubber', 'Plain', 132, 138, 79, 40, 30],
                        ['DS 2840 EPU', 103, 25, 'Elastic Poly Urethane', '608ZZ', 133, 139, 80, 60, 30]
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_2/180308042118_10.jpg',
                },]
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

export default Medical_Equipment_Caster;
