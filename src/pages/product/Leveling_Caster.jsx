import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
function Leveling_Caster({ label, labelDesc }) {
    const DATA = [
        // ! 1
        {
            image: '/src/assets/content/products/LevelingCaster/QM40_50/160426110209_00.jpg',
            id: 'Q-MASTER(QM40/50)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/QM40_50/160426110209_00.jpg',
                        type: 'Model: QM40 S QM40 F 우레탄 패드',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: '개당허용중량', unit: '(LOAD/PC)' },
                        { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                        { text: '자중', unit: '(NET WEIGHT)' },
                    ],
                    rows: [['QM40', '35KG', '100KG', '0.4KG']],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/QM40_50/160517043416_10.PNG',
                    },
                ],
            },
        },
        // ! 2
        {
            image: '/src/assets/content/products/LevelingCaster/QM60_300/160426110229_00.jpg',
            id: 'Q-MASTER(QM60/300)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/QM60_300/160426110229_00.jpg',
                        type: 'Model: 스테인레스 QM60S QM60F QM60B 우레탄패드',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: '개당허용중량', unit: '(LOAD/PC)' },
                        { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                        { text: '자중', unit: '(NET WEIGHT)' },
                    ],
                    rows: [
                        ['QM60 S', '170KG', '500KG', '0.63KG'],
                        ['QM60 F', '170KG', '500KG', '0.75KG'],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/QM60_300/160517043454_10.PNG',
                    },
                ],
            },
        },
        // ! 3
        {
            image: '/src/assets/content/products/LevelingCaster/QM80_600/160426110428_00.jpg',
            id: 'Q-MASTER(QM80/600)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/QM80_600/160426110428_00.jpg',
                        type: 'Model: 스테인레스 QM80S QM80F QM80B 우레탄패드img_-513',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: '개당허용중량', unit: '(LOAD/PC)' },
                        { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                        { text: '자중', unit: '(NET WEIGHT)' },
                    ],
                    rows: [
                        ['QM80 S', '330KG', '1,000KG', '1.3KG'],
                        ['QM80 F', '330KG', '1,000KG', '1.52KG'],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/QM80_600/160517043522_10.PNG',
                    },
                ],
            },
        },
        // ! 4
        {
            image: '/src/assets/content/products/LevelingCaster/QM100_1000/160426110518_00.jpg',
            id: 'Q-MASTER(QM100/1000)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/QM100_1000/160426110518_00.jpg',
                        type: 'Model: 스테인레스 QM100S QM100F QM100B 우레탄패드img_-517',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: '개당허용중량', unit: '(LOAD/PC)' },
                        { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                        { text: '자중', unit: '(NET WEIGHT)' },
                    ],
                    rows: [
                        ['QM100 S', '540KG', '1,600KG', '1.64KG'],
                        ['QM100 F', '540KG', '1,600KG', '1.89KG'],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/QM100_1000/160517043554_10.PNG',
                    },
                ],
            },
        },
        // ! 5
        {
            image: '/src/assets/content/products/LevelingCaster/QM120_1300/160426110541_00.jpg',
            id: 'Q-MASTER (QM120/1300) / (QM150/1800)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/QM120_1300/160426110541_00.jpg',
                        type: 'Model: QM120S QM120F 스테인레스',
                    },
                    {
                        image: '/src/assets/content/products/LevelingCaster/QM120_1300/160426110541_01.jpg',
                        type: 'Model: QM150F',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: '개당허용중량', unit: '(LOAD/PC)' },
                        { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                        { text: '자중', unit: '(NET WEIGHT)' },
                    ],
                    rows: [
                        ['QM120 S', '700KG', '2,000KG', '1.666KG'],
                        ['QM120 F', '700KG', '2,000KG', '2.026KG'],
                        ['QM150 F', '1,000KG', '3,000KG', '3.58KG'],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/QM120_1300/160517043631_10.PNG',
                    },
                ],
            },
        },
        // ! 6
        {
            image: '/src/assets/content/products/LevelingCaster/INCH_MASTER1/160426110607_00.jpg',
            id: 'INCH-MASTER(IM1.5˝/2.5˝)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/INCH_MASTER1/160426110607_00.jpg',
                        type: 'Model: IM1',
                    },
                    {
                        image: '/src/assets/content/products/LevelingCaster/INCH_MASTER1/160426110607_01.jpg',
                        type: 'Model: IM2',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: '개당허용중량', unit: '(LOAD/PC)' },
                        { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                    ],
                    rows: [
                        ['IM 1.5˝', '30KG', '90KG'],
                        ['IM 2.5˝', '70KG', '210KG'],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/INCH_MASTER1/160517043707_10.PNG',
                    },
                ],
            },
        },
        // ! 7
        {
            image: '/src/assets/content/products/LevelingCaster/INCH_MASTER2/160426110628_02.jpg',
            id: 'INCH-MASTER(IM3˝/4˝)',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/INCH_MASTER2/160426110628_00.jpg',
                        type: 'Model: IM3 F',
                    },
                    {
                        image: '/src/assets/content/products/LevelingCaster/INCH_MASTER1/160426110607_01.jpg',
                        type: 'Model: IM3 S',
                    },
                    {
                        image: '/src/assets/content/products/LevelingCaster/INCH_MASTER2/160426110628_02.jpg',
                        type: 'Model: IM4 F',
                    },
                    {
                        image: '/src/assets/content/products/LevelingCaster/INCH_MASTER2/160426110628_03.jpg',
                        type: 'Model: IM4 S',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: '개당허용중량', unit: '(LOAD/PC)' },
                        { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                    ],
                    rows: [
                        ['IM 3˝', '80KG', '240KG'],
                        ['IM 4˝', '100KG', '300KG'],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/LevelingCaster/INCH_MASTER2/160517043737_10.PNG',
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
                            <div className="bg-gray-100 py-5 px-4">{id}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Leveling_Caster;
