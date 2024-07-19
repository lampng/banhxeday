import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
function Trolley({ label, labelDesc }) {
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
                spec: {
                    image: '/src/assets/content/products/MedicalEquipmentCaster/DS21SERIES_1/160518113642_10.PNG.jpg',
                },
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

export default Trolley;
