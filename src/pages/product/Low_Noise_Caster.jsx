import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
function Low_Noise_Caster({ label, labelDesc }) {
    const DATA = [
        // ! 1
        {
            image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESLD/160426105824_02.jpg',
            id: 'DS 26 SERIES 경량용 (Light-Duty)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESLD/160426105824_00.jpg',
                        type: 'Model: DS 2630 EPU-BK',
                    },
                    {
                        image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESLD/160426105824_01.jpg',
                        type: 'Model: DS 2630 EPU-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESLD/160426105824_02.jpg',
                        type: 'Model: DS 2640 ELA-BK',
                    },
                    {
                        image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESLD/160426105824_03.jpg',
                        type: 'Model: DS 2640 ELA-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESLD/160426105824_04.jpg',
                        type: 'Model: DS 2640 ELA-R',
                    },
                    {
                        image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESLD/160426105824_05.jpg',
                        type: 'Model: DS 2640 ELA-S',
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
                        ['DS 2630 ELA', 76, 25, 'Elastomer', '608ZZ', 113, 119, 68, 97, 60, 32],
                        ['DS 2630 EPU', 76, 25, 'Elastic Poly Urethane', '608ZZ', 113, 119, 68, 97, 70, 32],
                        ['DS 2640 ELA', 101, 25, 'Elastomer', '608ZZ', 138, 144, 81, 97, 70, 24],
                        ['DS 2640 EPU', 101, 25, 'Elastic Poly Urethane', '608ZZ', 138, 144, 81, 97, 80, 24],
                        ['DS 2650 ELA', 127, 25, 'Elastomer', '608ZZ', 163, 169, 97, 97, 80, 20],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESLD/160517042922_10.PNG.jpg',
                },]
            },
        },
        // ! 2
        {
            image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESHD/160426105841_00.jpg',
            id: 'DS 26 SERIES 중량용 (Heavy-Duty)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESHD/160426105841_00.jpg',
                        type: 'Model: DS 2651 ELA-BK',
                    },
                    {
                        image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESHD/160426105841_00.jpg',
                        type: 'Model: DS 2651 ELA-R',
                    },
                    {
                        image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESHD/160426105841_00.jpg',
                        type: 'Model: DS 2651 ELA-S',
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
                        // { text: 'S', image: '/src/assets/content/SwivelRadius.jpg' },
                        // { text: 'B/K', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 2641 ELA', 101, 50, 'Elastomer', '6003ZZ', 141, 74, 150, 16],
                        ['DS 2651 ELA', 124, 51, 'Elastomer', '6003ZZ', 163, 92, 200, 10],
                        ['DS 2661 ELA', 152, 52, 'Elastomer', '6003ZZ', 190, 109, 250, 10]
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec:[ {
                    image: '/src/assets/content/products/LowNoiseCaster/DS26SERIESHD/160517042958_10.PNG.jpg',
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
                            <div className="bg-gray-100 py-5 px-4">{id}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Low_Noise_Caster;
