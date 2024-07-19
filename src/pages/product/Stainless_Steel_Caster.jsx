import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
function Stainless_Steel_Caster({ label, labelDesc }) {
    const DATA = [
        // ! 1
        {
            image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_02.jpg',
            id: 'DS 22 SERIES 경량용 (Light-Duty)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_00.jpg',
                        type: 'Model: DS 2230 ELP-BT',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_01.jpg',
                        type: 'Model: DS 2230 NYL-R',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_02.jpg',
                        type: 'Model: DS 2230 PUP-S',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_03.jpg',
                        type: 'Model: DS 2240 ELP-BK',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_04.jpg',
                        type: 'Model: DS 2240 ELP-S',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_05.jpg',
                        type: 'Model: DS 2240 NYL-R',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_06.jpg',
                        type: 'Model: DS 2240 PUP-BK',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_07.jpg',
                        type: 'Model: DS 2250 ELP-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_08.jpg',
                        type: 'Model: DS 2250 ELP-BT',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_09.jpg',
                        type: 'Model: DS 2250 NYL-BT',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_010.jpg',
                        type: 'Model: DS 2250 NYL-S',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_011.jpg',
                        type: 'Model: DS 2250 PUP-S',
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
                        ['DS 2230 NYL', 76, 32, 'Nylon', 'Plain', 104, 110, 71, 90, 40],
                        ['DS 2230 PUP', 76, 32, 'Poly Urethane', 'Plain', 104, 110, 71, 70, 40],
                        ['DS 2230 ELP', 76, 32, 'Elastomer', 'Plain', 104, 110, 71, 50, 40],
                        ['DS 2230 MRP', 76, 32, 'Mirage Rubber', 'Plain', 104, 110, 71, 50, 40],
                        ['DS 2240 NYL', 102, 32, 'Nylon', 'Plain', 126, 132, 86, 100, 30],
                        ['DS 2240 PUP', 102, 32, 'Poly Urethane', 'Plain', 126, 132, 86, 80, 30],
                        ['DS 2240 ELP', 102, 32, 'Elastomer', 'Plain', 126, 132, 86, 60, 30],
                        ['DS 2240 MRP', 102, 32, 'Mirage Rubber', 'Plain', 126, 132, 86, 60, 30],
                        ['DS 2250 NYL', 127, 32, 'Nylon', 'Plain', 157, 163, 101, 110, 20],
                        ['DS 2250 PUP', 127, 32, 'Poly Urethane', 'Plain', 157, 163, 101, 90, 20],
                        ['DS 2250 ELP', 127, 32, 'Elastomer', 'Plain', 157, 163, 101, 70, 20],
                        ['DS 2250 MRP', 127, 32, 'Mirage Rubber', 'Plain', 157, 163, 101, 70, 20],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/StainlessSteelCaster/DS22SERIESLightDuty/160517042112_10.PNG.jpg',
                }],
            },
        },
        // ! 2
        {
            image: '/src/assets/content/products/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_04.jpg',
            id: 'DS 33 SERIES 중량용 (Heavy-Duty)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_00.jpg',
                        type: 'Model: DS 3340 MRB(B)-R',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_01.jpg',
                        type: 'Model: DS 3350 ELA-S',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_02.jpg',
                        type: 'Model: DS 3350 MRB-BK',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_03.jpg',
                        type: 'Model: DS 3350 MRB-S',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_04.jpg',
                        type: 'Model: DS 3350 NYL-S',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_05.jpg',
                        type: 'Model: DS 3350 PUB(G)-BK',
                    },
                    {
                        image: '/src/assets/content/products/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_06.jpg',
                        type: 'Model: DS 3350 PUB-BK',
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
                        ['DS 3340 NYL', 101, 50, 'Nylon', 'S6003ZZ', 140, 73, 230, 16],
                        ['DS 3340 PUB', 101, 50, 'Poly Urethane', 'S6003ZZ', 140, 73, 200, 16],
                        ['DS 3340 PUP', 101, 50, 'Poly Urethane', 'Plain', 140, 73, 170, 16],
                        ['DS 3340 MRB', 101, 50, 'Mirage Rubber', 'S6003ZZ', 140, 73, 150, 16],
                        ['DS 3340 MRP', 101, 50, 'Mirage Rubber', 'Plain', 140, 73, 120, 16],
                        ['DS 3340 ELA', 101, 50, 'Elastomer', 'S6003ZZ', 140, 73, 150, 16],
                        ['DS 3340 ELP', 101, 50, 'Elastomer', 'Plain', 140, 73, 120, 16],
                        ['DS 3350 NYL', 127, 50, 'Nylon', 'S6003ZZ', 164, 90, 250, 10],
                        ['DS 3350 PUB', 127, 50, 'Poly Urethane', 'S6003ZZ', 164, 90, 230, 10],
                        ['DS 3350 PUP', 127, 50, 'Poly Urethane', 'Plain', 164, 90, 200, 10],
                        ['DS 3350 MRB', 127, 50, 'Mirage Rubber', 'S6003ZZ', 164, 90, 180, 10],
                        ['DS 3350 MRP', 127, 50, 'Mirage Rubber', 'Plain', 164, 90, 150, 10],
                        ['DS 3350 ELA', 127, 50, 'Elastomer', 'S6003ZZ', 164, 90, 180, 10],
                        ['DS 3350 ELP', 127, 50, 'Elastomer', 'Plain', 164, 90, 150, 10],
                        ['DS 3360 NYL', 152, 50, 'Nylon', 'S6003ZZ', 189, 106, 280, 10],
                        ['DS 3360 PUB', 152, 50, 'Poly Urethane', 'S6003ZZ', 189, 106, 250, 10],
                        ['DS 3360 PUP', 152, 50, 'Poly Urethane', 'Plain', 189, 106, 220, 10],
                        ['DS 3360 MRB', 152, 50, 'Mirage Rubber', 'S6003ZZ', 189, 106, 200, 10],
                        ['DS 3360 MRP', 152, 50, 'Mirage Rubber', 'Plain', 189, 106, 170, 10],
                        ['DS 3360 ELA', 152, 50, 'Elastomer', 'S6003ZZ', 189, 106, 200, 10],
                        ['DS 3360 ELP', 152, 50, 'Elastomer', 'Plain', 189, 106, 170, 10],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/StainlessSteelCaster/DS33SERIESHeavyDuty/160517042148_10.PNG.jpg',
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

export default Stainless_Steel_Caster;
