import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
import { Link } from 'react-router-dom';
function Light_Duty_Caster({ label, labelDesc }) {
    const DATA = [
        // ! 1
        {
            image: '/src/assets/content/products/LightDutyCaster/DS1010SERIES/160425105427_01.jpg',
            id: 'DS 1010 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1010SERIES/160425105427_01.jpg',
                        type: 'Model: DS 1010 LDP-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1010SERIES/160425105427_00.jpg',
                        type: 'Model: DS 1010 LDP-R',
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
                        { text: 'Swivel Radius', unit: '(mm)', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [['DS 1010 LDP', 25, 16, 'Poly Propylene', 'Plain', 37, 26, 10, 600]],
                },
                spec: [{
                    image: '/src/assets/content/products/LightDutyCaster/DS1010SERIES/160517020717_10.png',
                }],
            },
        },
        // ! 2
        {
            image: '/src/assets/content/products/LightDutyCaster/DS1015SERIES/160425112145_02.jpg',
            id: 'DS 1015 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1015SERIES/160425112145_00.jpg',
                        type: 'Model: DS 1015 EPU-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1015SERIES/160425112145_01.jpg',
                        type: 'Model: DS 1015 EPU-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1015SERIES/160425112145_02.jpg',
                        type: 'Model: DS 1015 PVP(B)-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1015SERIES/160425112145_03.jpg',
                        type: 'Model: DS 1015 PVP(R)-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1015SERIES/160425112145_04.jpg',
                        type: 'Model: DS 1015 PVP(R)-S',
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
                        { text: 'Swivel Radius', unit: '(mm)', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 1015 PVP', 38, 20, 'Poly Vinyl Chloride', 'Plain', 50, 36, 20, 300],
                        ['DS 1015 EPU', 40, 17, 'Elastic Poly Urethane', '688ZZ', 50, 36, 20, 300],
                    ],
                },
                spec: [{
                    image: '/src/assets/content/products/LightDutyCaster/DS1015SERIES/160517030901_10.PNG',
                }],
            },
        },
        // ! 3
        {
            image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160425030039_07.jpg',
            id: 'DS 1020 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160425030039_00.jpg',
                        type: 'Model: DS 1020 LDP(B)-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160425030039_01.jpg',
                        type: 'Model: DS 1020 LDP(B)-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160425030039_02.jpg',
                        type: 'Model: DS 1020 LDP(R)-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160425030039_03.jpg',
                        type: 'Model: DS 1020 LDP(R)-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160425030039_04.jpg',
                        type: 'Model: DS 1020 MRP-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160425030039_05.jpg',
                        type: 'Model: DS 1020 PUP(B)-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160425030039_06.jpg',
                        type: 'Model: DS 1020 PUP(B)-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160425030039_07.jpg',
                        type: 'Model: DS 1020 PUP(R)-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160425030039_08.jpg',
                        type: 'Model: DS 1020 PUP(R)-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160425030039_09.jpg',
                        type: 'Model: DS 1020 PUP(R)-S',
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
                        { text: 'Swivel Radius', unit: '(mm)', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 1020 PUP', 50, 23, 'Poly Urethane', 'Plain', 68, 45, 35],
                        ['DS 1020 LDP', 50, 23, 'Poly Propylene', 'Plain', 68, 45, 40],
                        ['DS 1020 LDP', 50, 23, 'Mirage Rubber', 'Plain', 68, 45, 30],
                    ],
                    commonPCS: 'S-150 R-150 B/K-130',
                },
                spec:[ {
                    image: '/src/assets/content/products/LightDutyCaster/DS1020SERIES/160517031010_10.PNG',
                }],
            },
        },
        // ! 4
        {
            image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_06.jpg',
            id: 'DS 1120 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_00.jpg',
                        type: 'Model: DS 1120 EPU-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_01.jpg',
                        type: 'Model: DS 1120 EPU-BT',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_02.jpg',
                        type: 'Model: DS 1120 LDP(B)-BT(1／2)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_03.jpg',
                        type: 'Model: DS 1120 LDP(R)-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_04.jpg',
                        type: 'Model: DS 1120 LDP(R)-BT(3／8)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_05.jpg',
                        type: 'Model: DS 1120 MRP-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_06.jpg',
                        type: 'Model: DS 1120 PUP(B)-BT BK(1／2)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_07.jpg',
                        type: 'Model: DS 1120 PUP(B)-BT BK(3／8)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_08.jpg',
                        type: 'Model: DS 1120 PUP(B)-BT(1／2)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_09.jpg',
                        type: 'Model:DS 1120 PUP(B)-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_010.jpg',
                        type: 'Model: DS 1120 PUP(G)-BT BK(3／8)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_011.jpg',
                        type: 'Model: DS 1120 PUP(G)-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_012.jpg',
                        type: 'Model:DS 1120 PUP(R)-BT BK(3／8)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160425030809_013.jpg',
                        type: 'Model:DS 1120 PUP(R)-S',
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
                        ['DS 1120 PUP', 50, 21, 'Poly Urethane', 'Plain', 64, 77, 45, 40, 200],
                        // DS 1120 MRP	50	21	Mirage Rubber
                        ['DS 1120 PUP', 50, 21, 'Mirage Rubber', 'Plain', 64, 77, 45, 40, 200],
                        ['DS 1120 PUP', 50, 21, 'Poly Urethane', 'Plain', 64, 77, 45, 45, 200],
                        ['DS 1120 PUP', 50, 17, 'Elastic Poly Urethane', '688ZZ', 64, 77, 45, 40, 200],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec:[ {
                    image: '/src/assets/content/products/LightDutyCaster/DS1120SERIES/160518113832_10.PNG.jpg',
                }],
            },
        },
        // ! 5
        {
            image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160425032837_06.jpg',
            id: 'DS 1225 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160425032837_00.jpg',
                        type: 'Model: DS 1225 LDP-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160425032837_01.jpg',
                        type: 'Model: DS 1225 MRB-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160425032837_02.jpg',
                        type: 'Model: DS 1225 PUB(B)-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160425032837_03.jpg',
                        type: 'Model: DS 1225 PUB-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160425032837_04.jpg',
                        type: 'Model: DS 1225 PUP-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160425032837_05.jpg',
                        type: 'Model: DS 1225 PVB(G)-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160425032837_06.jpg',
                        type: 'Model: DS 1225 PVB-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160425032837_07.jpg',
                        type: 'Model: DS 1225 PVP(Pipe)-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160425032837_08.jpg',
                        type: 'Model: DS 1225 PVP(Plain)-BT',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160425032837_09.jpg',
                        type: 'Model: DS 1225 SR-R',
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
                        ['DS 1225 PUB', 63, 30, 'Poly Urethane', '608ZZ', 83, 88, 55, 60, 80],
                        ['DS 1225 PUP', 63, 30, 'Poly Urethane', 'Plain', 83, 88, 55, 50, 80],
                        ['DS 1225 PVB', 63, 30, 'Poly Vinyl Chloride', '608ZZ', 83, 88, 55, 55, 80],
                        ['DS 1225 PVP(P)', 63, 30, 'Poly Vinyl Chloride', 'Pipe', 83, 88, 55, 50, 80],
                        ['DS 1225 PVP', 63, 30, 'Poly Vinyl Chloride', 'Plain', 83, 88, 55, 45, 80],
                        ['DS 1225 S R', 63, 27, 'Soft Rubber', 'Plain', 83, 88, 55, 45, 80],
                        ['DS 1225 LDP', 63, 30, 'Poly Propylene', 'Plain', 83, 88, 55, 60, 80],
                        ['DS 1225 MRB', 63, 30, 'Mirage Rubber', '608ZZ', 83, 88, 55, 50, 80],
                        ['DS 1225 EPU', 63, 24, 'Elastic Poly Urethane', '608ZZ', 83, 88, 55, 60, 80],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/LightDutyCaster/DS1225SERIES/160517040840_10.PNG.jpg',
                }],
            },
        },
        // ! 6
        {
            image: '/src/assets/content/products/LightDutyCaster/DS1325SERIES/160425033324_04.jpg',
            id: 'DS 1325 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1325SERIES/160425033324_00.jpg',
                        type: 'Model: DS 1325 EPU-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1325SERIES/160425033324_01.jpg',
                        type: 'Model: DS 1325 EPU-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1325SERIES/160425033324_02.jpg',
                        type: 'Model: DS 1325 MRB-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1325SERIES/160425033324_03.jpg',
                        type: 'Model: DS 1325 MRB-BT',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1325SERIES/160425033324_04.jpg',
                        type: 'Model: DS 1325 MRB-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1325SERIES/160425033324_05.jpg',
                        type: 'Model: DS 1325 PUB-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1325SERIES/160425033324_06.jpg',
                        type: 'Model: DS 1325 PUB-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS1325SERIES/160425033324_07.jpg',
                        type: 'Model: DS 1325 PUB-S',
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
                        ['DS 1325 PUB', 61, 25, 'Poly Urethane', '628ZZ', 85, 92, 59, 70, 80],
                        ['DS 1325 MRB', 61, 25, 'Mirage Rubber', '628ZZ', 85, 92, 59, 60, 80],
                        ['DS 1325 EPU', 64, 24, 'Elastic Poly Urethane', '608ZZ', 87, 94, 61, 60, 80],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/LightDutyCaster/DS1325SERIES/160517040923_10.PNG.jpg',
                }],
            },
        },
        // ! 7
        {
            image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_03.jpg',
            id: 'DS 2030 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_00.jpg',
                        type: 'Model: DS 2030 EPU-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_01.jpg',
                        type: 'Model: DS 2030 LDP(B)-BT',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_02.jpg',
                        type: 'Model: DS 2030 LDP(R)-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_03.jpg',
                        type: 'Model: DS 2030 MRB-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_04.jpg',
                        type: 'Model: DS 2030 MRB-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_05.jpg',
                        type: 'Model: DS 2030 NYL-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_06.jpg',
                        type: 'Model: DS 2030 PCB-BT',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_07.jpg',
                        type: 'Model: DS 2030 PUB(B)-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_08.jpg',
                        type: 'Model: DS 2030 PUB-BT',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_09.jpg',
                        type: 'Model: DS 2030 PUP-BT BK(링형)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_010.jpg',
                        type: 'Model: DS 2030 PUP-BT',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_011.jpg',
                        type: 'Model: DS 2030 PVP-BT',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_012.jpg',
                        type: 'Model: DS 2030 SRB-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160425033715_013.jpg',
                        type: 'Model: DS 2030 SR-R',
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
                        ['DS 2030 PUB', 75, 32, 'Poly Urethane', '6202ZZ', 105, 111, 73, 90, 40],
                        ['DS 2030 PUP', 75, 32, 'Poly Urethane', 'Plain', 105, 111, 73, 70, 40],
                        ['DS 2030 PVB', 75, 32, 'Poly Vinyl Chloride', '6202ZZ', 105, 111, 73, 80, 40],
                        ['DS 2030 ESR', 75, 32, 'Electrical Conductivity Rubber', '6200', 105, 111, 73, 70, 40],
                        ['DS 2030 PVP', 75, 32, 'Poly Vinyl Chloride', 'Plain', 105, 111, 73, 60, 40],
                        ['DS 2030 LDP', 75, 32, 'Poly Propylene', 'Plain', 105, 111, 73, 90, 40],
                        ['DS 2030 SR', 75, 32, 'Soft Rubber', 'Plain', 105, 111, 73, 60, 40],
                        ['DS 2030 SRB', 75, 32, 'Soft Rubber', '6200', 105, 111, 73, 70, 40],
                        ['DS 2030 MRB', 75, 32, 'Mirage Rubber', '6202ZZ', 105, 111, 73, 70, 40],
                        ['DS 2030 MRP', 75, 32, 'Mirage Rubber', 'Plain', 105, 111, 73, 50, 40],
                        ['DS 2030 ELP', 75, 32, 'Elastomer', 'Plain', 105, 111, 73, 50, 40],
                        ['DS 2030 NYL', 75, 32, 'Nylon', 'Plain', 105, 111, 73, 90, 40],
                        ['DS 2030 EPU', 75, 32, 'Elastic Poly Urethane', '6000ZZ', 105, 111, 73, 80, 40],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec:[ {
                    image: '/src/assets/content/products/LightDutyCaster/DS2030SERIES/160517041019_10.PNG.jpg',
                }],
            },
        },
        // ! 8
        {
            image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_012.jpg',
            id: 'DS 2040 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_00.jpg',
                        type: 'Model: DS 2040 EPU-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_01.jpg',
                        type: 'Model: DS 2040 LDP-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_02.jpg',
                        type: 'Model: DS 2040 MRB-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_03.jpg',
                        type: 'Model: DS 2040 MRB-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_04.jpg',
                        type: 'Model: DS 2040 NYL-BT',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_05.jpg',
                        type: 'Model: DS 2040 PCB-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_06.jpg',
                        type: 'Model: DS 2040 PUB-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_07.jpg',
                        type: 'Model: DS 2040 PUP-BT BK(링형)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_08.jpg',
                        type: 'Model: DS 2040 PUP-BT(링형)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_09.jpg',
                        type: 'Model: DS 2040 PVB(G)-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_010.jpg',
                        type: 'Model: DS 2040 PVBB-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_011.jpg',
                        type: 'Model: DS 2040 PVBB-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_012.jpg',
                        type: 'Model: DS 2040 PVB-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160425034212_013.jpg',
                        type: 'Model: DS 2040 PVP-R',
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
                        ['DS 2040 PUB', 102, 32, 'Poly Urethane', '6200ZZ', 131, 137, 85, 100, 30],
                        ['DS 2040 PUP', 102, 32, 'Poly Urethane', 'Plain', 131, 137, 85, 80, 30],
                        ['DS 2040 PVB', 102, 32, 'Poly Vinyl Chloride', '6202ZZ', 131, 137, 85, 90, 30],
                        ['DS 2040 ESR', 102, 32, 'Electrical Conductivity Rubber', '6200', 131, 137, 85, 80, 30],
                        ['DS 2040 PVP', 102, 32, 'Poly Vinyl Chloride', 'Plain', 131, 137, 85, 70, 30],
                        ['DS 2040 LDP', 102, 32, 'Poly Propylene', 'Plain', 131, 137, 85, 100, 30],
                        ['DS 2040 SR', 102, 32, 'Soft Rubber', 'Plain', 131, 137, 85, 70, 30],
                        ['DS 2040 SRB', 102, 32, 'Soft Rubber', '6200', 131, 137, 85, 80, 30],
                        ['DS 2040 MRB', 102, 32, 'Mirage Rubber', '6202ZZ', 131, 137, 85, 80, 30],
                        ['DS 2040 MRP', 102, 32, 'Mirage Rubber', 'Plain', 131, 137, 85, 60, 30],
                        ['DS 2040 ELP', 102, 32, 'Elastomer', 'Plain', 131, 137, 85, 60, 30],
                        ['DS 2040 NYL', 102, 32, 'Nylon', 'Plain', 131, 137, 85, 100, 30],
                        ['DS 2040 EPU', 102, 32, 'Elastic Poly Urethane', '6000ZZ', 131, 137, 85, 90, 30],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [{
                    image: '/src/assets/content/products/LightDutyCaster/DS2040SERIES/160517041100_10.PNG.jpg',
                }],
            },
        },
        // ! 9
        {
            image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_00.jpg',
            id: 'DS 2050 SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_00.jpg',
                        type: 'Model: DS 2050 EPU-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_01.jpg',
                        type: 'Model: DS 2050 EPU-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_02.jpg',
                        type: 'Model: DS 2050 LDP-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_03.jpg',
                        type: 'Model: DS 2050 MRB-R',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_04.jpg',
                        type: 'Model: DS 2050 NYL-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_05.jpg',
                        type: 'Model: DS 2050 PCB-BT BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_06.jpg',
                        type: 'Model: DS 2050 PUP-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_07.jpg',
                        type: 'Model: DS 2050 PUP-BT BK(링형)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_08.jpg',
                        type: 'Model: DS 2050 PUP-BT(링형)',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_09.jpg',
                        type: 'Model: DS 2050 PVB-S',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_010.jpg',
                        type: 'Model: DS 2050 PVP-BK',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_011.jpg',
                        type: 'Model: DS 2050 SRB-BT',
                    },
                    {
                        image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160425034531_012.jpg',
                        type: 'Model: DS 2050 SR-R',
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
                        ['DS 2050 PUB', 127, 32, 'Poly Urethane', '6202ZZ', 157, 163, 100, 110, 20],
                        ['DS 2050 PUP', 127, 32, 'Poly Urethane', 'Plain', 157, 163, 100, 90, 20],
                        ['DS 2050 PVB', 127, 32, 'Poly Vinyl Chloride', '6202ZZ', 157, 163, 100, 100, 20],
                        ['DS 2050 ESR', 127, 32, 'Electrical Conductivity Rubber', '6200', 157, 163, 100, 90, 20],
                        ['DS 2050 PVP', 127, 32, 'Poly Vinyl Chloride', 'Plain', 157, 163, 100, 80, 20],
                        ['DS 2050 LDP', 127, 32, 'Poly Propylene', 'Plain', 157, 163, 100, 110, 20],
                        ['DS 2050 SR', 127, 32, 'Soft Rubber', 'Plain', 157, 163, 100, 80, 20],
                        ['DS 2050 SRB', 127, 32, 'Soft Rubber', '6200', 157, 163, 100, 90, 20],
                        ['DS 2050 MRB', 127, 32, 'Mirage Rubber', '6202ZZ', 157, 163, 100, 90, 20],
                        ['DS 2050 MRP', 127, 32, 'Mirage Rubber', 'Plain', 157, 163, 100, 70, 20],
                        ['DS 2050 ELP', 127, 32, 'Elastomer', 'Plain', 157, 163, 100, 70, 20],
                        ['DS 2050 NYL', 127, 32, 'Nylon', 'Plain', 157, 163, 100, 110, 20],
                        ['DS 2050 EPU', 127, 32, 'Elastic Poly Urethane', '6000ZZ', 157, 163, 100, 100, 20],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec:[ {
                    image: '/src/assets/content/products/LightDutyCaster/DS2050SERIES/160517041147_10.PNG.jpg',
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
                                {/* <Link to={`/products/${id}`}>
                                <img className="h-[230px] object-contain cursor-pointer" src={image} alt="" />
                                </Link> */}
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

export default Light_Duty_Caster;
