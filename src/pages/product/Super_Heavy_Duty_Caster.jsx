import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
function Super_Heavy_Duty_Caster({ label, labelDesc }) {
    const DATA = [
        // ! 1
        {
            image: '/src/assets/content/products/SuperHeavyDutyCaster/DS43SERIES/160426104802_05.jpg',
            id: 'DS 43 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS43SERIES/160426104802_00.jpg',
                        type: 'Model: DS 4310 PUI-R',
                    },
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS43SERIES/160426104802_01.jpg',
                        type: 'Model: DS 4310 PUI-S',
                    },
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS43SERIES/160426104802_02.jpg',
                        type: 'Model: DS 4340 PUI-R',
                    },
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS43SERIES/160426104802_03.jpg',
                        type: 'Model: DS 4340 PUI-S',
                    },
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS43SERIES/160426104802_04.jpg',
                        type: 'Model: DS 4360 MCN-R',
                    },
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS43SERIES/160426104802_05.jpg',
                        type: 'Model: DS 4360 PUI-BK',
                    },
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS43SERIES/160426104802_06.jpg',
                        type: 'Model: DS 4360 PUI-R',
                    },
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS43SERIES/160426104802_07.jpg',
                        type: 'Model: DS 4360 PUI-S',
                    },
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS43SERIES/160426104802_08.jpg',
                        type: 'Model: DS 4380 MCN-S',
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
                        ['DS 4340 PUI', 100, 66, 'Poly Urethane', '6204ZZ', 147, 80, 680, 6],
                        ['DS 4340 MCN', 100, 66, 'Mc Nylon', '6204ZZ', 147, 80, 750, 6],
                        ['DS 4360 PUI', 150, 62, 'Poly Urethane', '6204ZZ', 190, 135, 680, 'S,R-6 BK-4'],
                        ['DS 4360 MCN', 150, 62, 'Mc Nylon', '6204ZZ', 190, 135, 750, 'S,R-6 BK-5'],
                        ['DS 4380 PUI', 203, 62, 'Poly Urethane', '6204ZZ', 257, 164, 720, 2],
                        ['DS 4380 MCN', 203, 62, 'Mc Nylon', '6204ZZ', 257, 164, 800, 2],
                        ['DS 4310 PUI', 253, 62, 'Poly Urethane', '6204ZZ', 301, 188, 900, 2],
                        ['DS 4310 MCN', 253, 62, 'Mc Nylon', '6204ZZ', 301, 188, 1000, 2],
                        ['DS 4312 PUI', 300, 62, 'Poly Urethane', '6204ZZ', 350, 223, 900, 1],
                        ['DS 4312 MCN', 300, 62, 'Mc Nylon', '6204ZZ', 350, 223, 1000, 1],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec:[ {
                    image: '/src/assets/content/products/SuperHeavyDutyCaster/DS43SERIES/160517041822_10.PNG.jpg',
                }],
            },
        },
        // ! 2
        {
            image: '/src/assets/content/products/SuperHeavyDutyCaster/DS46SERIESMCNylon/160426104828_00.jpg',
            id: 'DS 46 SERIES (MC Nylon)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS46SERIESMCNylon/160426104828_00.jpg',
                        type: 'Model: DS 4660 MCN-R',
                    },
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS46SERIESMCNylon/160426104828_01.jpg',
                        type: 'Model: DS 4660 MCN-S',
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
                        ['DS 4640 MCN', 100, 60, 'MC Nylon', '6204ZZ', 160, 90, 1000, 4],
                        ['DS 4650 MCN', 125, 60, 'MC Nylon', '6204ZZ', 185, 108, 1500, 4],
                        ['DS 4660 MCN', 150, 80, 'MC Nylon', '6205ZZ', 210, 125, 2000, 2],
                        ['DS 4680 MCN', 200, 80, 'MC Nylon', '6205ZZ', 260, 155, 2500, 2],
                        ['DS 4610 MCN', 250, 100, 'MC Nylon', '6206ZZ', 325, 185, 3000, 1],
                        ['DS 4612 MCN', 300, 100, 'MC Nylon', '6206ZZ', 375, 215, 3500, 1],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/SuperHeavyDutyCaster/DS46SERIESMCNylon/160517041917_10.PNG.jpg',
                }],
            },
        },
        // ! 3
        {
            image: '/src/assets/content/products/SuperHeavyDutyCaster/DS47SERIESMCNylonTwinWheel/160426104944_01.jpg',
            id: 'DS 47 SERIES (MC Nylon Twin Wheel)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS47SERIESMCNylonTwinWheel/160426104944_00.jpg',
                        type: 'Model: DS 4780 MCN-R',
                    },
                    {
                        image: '/src/assets/content/products/SuperHeavyDutyCaster/DS47SERIESMCNylonTwinWheel/160426104944_01.jpg',
                        type: 'Model: DS 4780 MCN-S',
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
                        ['DS 4740 MCN', 100, '38×2', 'MC Nylon', '6204ZZ', 160, 90, 2000, 4],
                        ['DS 4750 MCN', 125, '38×2', 'MC Nylon', '6204ZZ', 185, 108, 2500, 4],
                        ['DS 4760 MCN', 150, '53×2', 'MC Nylon', '6205ZZ', 220, 125, 4000, 2],
                        ['DS 4780 MCN', 200, '53×2', 'MC Nylon', '6205ZZ', 270, 155, 5000, 2],
                        ['DS 4710 MCN', 250, '68×2', 'MC Nylon', '6206ZZ', 340, 185, 6000, 1],
                        ['DS 4712 MCN', 300, '68×2', 'MC Nylon', '6206ZZ', 390, 215, 7000, 1],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/SuperHeavyDutyCaster/DS47SERIESMCNylonTwinWheel/160517042015_10.PNG.jpg',
                }],
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
                            <div className="bg-gray-100 py-5 px-4">{id}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Super_Heavy_Duty_Caster;
