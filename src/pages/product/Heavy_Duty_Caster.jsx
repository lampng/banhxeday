import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
function Medium_Duty_Caster({ label, labelDesc }) {
    const DATA = [
        // ! 1
        {
            image: '/src/assets/content/products/HeavyDutyCaster/DS40SERIES/160426104409_05.jpg',
            id: 'DS 40 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS40SERIES/160426104409_00.jpg',
                        type: 'Model: DS 4030 PUI-BK',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS40SERIES/160426104409_01.jpg',
                        type: 'Model: DS 4030 PUI-R',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS40SERIES/160426104409_02.jpg',
                        type: 'Model: DS 4030 PUI-S',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS40SERIES/160426104409_03.jpg',
                        type: 'Model: DS 4060 PUI-BK',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS40SERIES/160426104409_04.jpg',
                        type: 'Model: DS 4060 PUI-R',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS40SERIES/160426104409_05.jpg',
                        type: 'Model: DS 4060 PUI-S',
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
                        ['DS 4030 PUI', 76, 33, 'Poly Urethane', 'Roller', 107, 56, 180, 25],
                        ['DS 4040 PUI', 100, 33, 'Poly Urethane', 'Roller', 137, 81, 200, 20],
                        ['DS 4041 PUI', 100, 46, 'Poly Urethane', 'Roller', 142, 87, 250, 'S,R-12 BK-8'],
                        ['DS 4050 PUI', 126, 40, 'Poly Urethane', 'Roller', 166, 110, 280, 10],
                        ['DS 4060 PUI', 151, 43, 'Poly Urethane', 'Roller', 187, 114, 300, 8],
                        ['DS 4080 PUI', 202, 47, 'Poly Urethane', 'Roller', 241, 149, 350, 'S,R-5 BK-4'],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec:[ {
                    image: '/src/assets/content/products/HeavyDutyCaster/DS40SERIES/160517041536_10.PNG.jpg',
                }],
            },
        },
        // ! 2
        {
            image: '/src/assets/content/products/HeavyDutyCaster/DS41SERIES/160426104507_01.jpg',
            id: 'DS 41 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS41SERIES/160426104507_00.jpg',
                        type: 'Model: DS 4140 MRB(B)-S',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS41SERIES/160426104507_01.jpg',
                        type: 'Model: DS 4150 MRB-BK',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS41SERIES/160426104507_02.jpg',
                        type: 'Model: DS 4150 MRB-S',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS41SERIES/160426104507_03.jpg',
                        type: 'Model: DS 4150 PUB-BK',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS41SERIES/160426104507_04.jpg',
                        type: 'Model: DS 4160 MRB-R',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS41SERIES/160426104507_05.jpg',
                        type: 'Model: DS 4160 PUB-R',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS41SERIES/160426104507_06.jpg',
                        type: 'Model: DS 4160 PUB-S',
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
                        ['DS 4140 PUB', 101, 50, 'Poly Urethane', '6003ZZ', 141, 74, 150, 15],
                        ['DS 4140 MRB', 101, 50, 'Mirage Rubber', '6003ZZ', 141, 74, 130, 15],
                        ['DS 4150 PUB', 127, 50, 'Poly Urethane', '6003ZZ', 164, 94, 180, 10],
                        ['DS 4150 MRB', 127, 50, 'Mirage Rubber', '6003ZZ', 164, 94, 150, 10],
                        ['DS 4160 PUB', 152, 50, 'Poly Urethane', '6003ZZ', 189, 111, 210, 10],
                        ['DS 4160 MRB', 152, 50, 'Mirage Rubber', '6003ZZ', 189, 111, 180, 10],
                        ['DS 4180 PUB', 200, 50, 'Poly Urethane', '6003ZZ', 241, 145, 250, 5],
                        ['DS 4180 MRB', 200, 50, 'Mirage Rubber', '6003ZZ', 241, 145, 220, 5],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec:[ {
                    image: '/src/assets/content/products/HeavyDutyCaster/DS41SERIES/160517041630_10.PNG.jpg',
                }],
            },
        },
        // ! 3
        {
            image: '/src/assets/content/products/HeavyDutyCaster/DS42SERIES/160426104526_00.jpg',
            id: 'DS 42 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS42SERIES/160426104526_00.jpg',
                        type: 'Model: DS 4260 PUI-S',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS42SERIES/160426104526_01.jpg',
                        type: 'Model: DS 4280 PUI-R',
                    },
                    {
                        image: '/src/assets/content/products/HeavyDutyCaster/DS42SERIES/160426104526_02.jpg',
                        type: 'Model: DS 4280 PUI-S',
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
                        ['DS 4260 PUI', 152, 58, 'Poly Urethane', '6204ZZ', 190, 111, 500, 5],
                        ['DS 4280 PUI', 203, 58, 'Poly Urethane', '6204ZZ', 237, 144, 600, 4],
                        ['DS 4210 PUI', 253, 64, 'Poly Urethane', '6204ZZ', 292, 184, 750, 2],
                        ['DS 4212 PUI', 300, 64, 'Poly Urethane', '6204ZZ', 356, 224, 800, 1],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/HeavyDutyCaster/DS42SERIES/160517041727_10.PNG.jpg',
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
