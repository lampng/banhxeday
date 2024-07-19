import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
function Medium_Duty_Caster({ label, labelDesc }) {
    const DATA = [
        // ! 1
        {
            image: '/src/assets/content/products/MediumDutyCaster/DS30SERIES/160426103700_08.jpg',
            id: 'DS 30 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS30SERIES/160426103700_00.jpg',
                        type: 'Model: DS 3050 PUA-R',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS30SERIES/160426103700_01.jpg',
                        type: 'Model: DS 3050 PUP-BK',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS30SERIES/160426103700_02.jpg',
                        type: 'Model: DS 3060 LDP-R',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS30SERIES/160426103700_03.jpg',
                        type: 'Model: DS 3060 PUA-BK',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS30SERIES/160426103700_04.jpg',
                        type: 'Model: DS 3060 PUA-S',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS30SERIES/160426103700_05.jpg',
                        type: 'Model: DS 3060 PUB-R',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS30SERIES/160426103700_06.jpg',
                        type: 'Model: DS 3060 PUP-R',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS30SERIES/160426103700_07.jpg',
                        type: 'Model: DS 3060 PUP-S',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS30SERIES/160426103700_08.jpg',
                        type: 'Model: DS 3060 PVB-S',
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
                        ['DS 3040 PUB', 102, 40, 'Poly Urethane', '6902ZZ', 137, 81, 150, 16],
                        ['DS 3040 PUP', 102, 40, 'Poly Urethane', 'PIPE', 137, 81, 120, 16],
                        ['DS 3050 PUA', 125, 40, 'Poly Urethane', '6902ZZ', 166, 90, 180, 10],
                        ['DS 3050 PUB', 125, 40, 'Poly Urethane', '6902ZZ', 166, 90, 160, 10],
                        ['DS 3050 PUP', 125, 40, 'Poly Urethane', 'PIPE', 166, 90, 130, 10],
                        ['DS 3060 PUA', 150, 40, 'Poly Urethane', '6902ZZ', 187, 107, 200, 10],
                        ['DS 3060 PUB', 150, 40, 'Poly Urethane', '6902ZZ', 187, 107, 180, 10],
                        ['DS 3060 PUP', 150, 40, 'Poly Urethane', 'PIPE', 187, 107, 150, 10],
                        ['DS 3060 PVB', 150, 47, 'Poly Vinyl Chloride', 'ROLLER', 187, 107, 150, 10],
                        ['DS 3060 PVP', 150, 47, 'Poly Vinyl Chloride', 'PIPE', 187, 107, 120, 10],
                        ['DS 3060 LDP', 150, 47, 'Poly Propylene', 'PIPE', 187, 107, 200, 10],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/MediumDutyCaster/DS30SERIES/160517041243_10.PNG.jpg',
                }],
            },
        },
        // ! 2
        {
            image: '/src/assets/content/products/MediumDutyCaster/DS31SERIES/160426103742_04.jpg',
            id: 'DS 31 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS31SERIES/160426103742_00.jpg',
                        type: 'Model: DS 3140 PUP-BK',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS31SERIES/160426103742_01.jpg',
                        type: 'Model: DS 3140 PUP-S',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS31SERIES/160426103742_02.jpg',
                        type: 'Model: DS 3160 PUA-BK',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS31SERIES/160426103742_03.jpg',
                        type: 'Model: DS 3160 PUA-S',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS31SERIES/160426103742_04.jpg',
                        type: 'Model: DS 3160 PUB-BK',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS31SERIES/160426103742_05.jpg',
                        type: 'Model: DS 3160 PUB-S',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS31SERIES/160426103742_06.jpg',
                        type: 'Model: DS 3160 PUP(B)-BK',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS31SERIES/160426103742_07.jpg',
                        type: 'Model: DS 3160 PUP-BK',
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
                        ['DS 3140 PUB', 102, 40, 'Poly Urethane', '6902ZZ', 135, 89, 150, 16],
                        ['DS 3140 PUP', 102, 40, 'Poly Urethane', 'PIPE', 135, 89, 120, 16],
                        ['DS 3150 PUA', 125, 40, 'Poly Urethane', '6902ZZ', 160, 105, 180, 10],
                        ['DS 3150 PUB', 125, 40, 'Poly Urethane', '6902ZZ', 160, 105, 160, 10],
                        ['DS 3150 PUP', 125, 40, 'Poly Urethane', 'PIPE', 160, 105, 130, 10],
                        ['DS 3160 PUA', 150, 40, 'Poly Urethane', '6902ZZ', 182, 118, 200, 10],
                        ['DS 3160 PUB', 150, 40, 'Poly Urethane', '6902ZZ', 182, 118, 180, 10],
                        ['DS 3160 PUP', 150, 40, 'Poly Urethane', 'PIPE', 182, 118, 150, 10],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/MediumDutyCaster/DS31SERIES/160517041326_10.PNG.jpg',
                }],
            },
        },
        // ! 3
        {
            image: '/src/assets/content/products/MediumDutyCaster/DS32SERIES/160426103815_02.jpg',
            id: 'DS 32 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS32SERIES/160426103815_00.jpg',
                        type: 'Model: DS 3260 LDP-BK',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS32SERIES/160426103815_01.jpg',
                        type: 'Model: DS 3260 LDP-S',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS32SERIES/160426103815_02.jpg',
                        type: 'Model: DS 3260 PVP-BK',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS32SERIES/160426103815_03.jpg',
                        type: 'Model: DS 3260 PVP-S',
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
                        ['DS 3260 PVB', 150, 47, 'Poly Vinyl Chloride', 'ROLLER', 183, 116, 150, 10],
                        ['DS 3260 PVP', 150, 47, 'Poly Vinyl Chloride', 'PIPE', 183, 116, 120, 10],
                        ['DS 3260 LDP', 150, 47, 'Poly Propylene', 'PIPE', 183, 116, 150, 10],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec:[ {
                    image: '/src/assets/content/products/MediumDutyCaster/DS32SERIES/160517041423_10.PNG.jpg',
                }],
            },
        },
        // ! 4
        {
            image: '/src/assets/content/products/MediumDutyCaster/DS34SERIES/160426103850_04.jpg',
            id: 'DS 34 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS34SERIES/160426103850_00.jpg',
                        type: 'Model: DS 3450 PUB (I)-S',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS34SERIES/160426103850_01.jpg',
                        type: 'Model: DS 3460 PUB(G)-BK',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS34SERIES/160426103850_02.jpg',
                        type: 'Model: DS 3460 PUB(G)-R',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS34SERIES/160426103850_03.jpg',
                        type: 'Model: DS 3460 PUB(G)-S',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS34SERIES/160426103850_04.jpg',
                        type: 'Model: DS 3460 PUB-BK',
                    },
                    {
                        image: '/src/assets/content/products/MediumDutyCaster/DS34SERIES/160426103850_05.jpg',
                        type: 'Model: DS 3460 PUB-S',
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
                        ['DS 3440 PUB', 101, 38, 'Poly Urethane', '6003ZZ', 140, 78, 150, 16],
                        ['DS 3450 PUB', 126, 38, 'Poly Urethane', '6003ZZ', 164, 90, 170, 10],
                        ['DS 3460 PUB', 151, 38, 'Poly Urethane', '6003ZZ', 187, 110, 200, 10],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec:[ {
                    image: '/src/assets/content/products/MediumDutyCaster/DS34SERIES/160517041457_10.PNG.jpg',
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

export default Medium_Duty_Caster;
