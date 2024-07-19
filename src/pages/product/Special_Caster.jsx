import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
function Special_Caster({ label, labelDesc }) {
    const DATA = [
        // ! 1
        {
            image: '/src/assets/content/products/SpecialCaster/ShockAbsorberCaster/160426105930_02.jpg',
            id: '완충용캐스터 Shock Absorber Caster',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/SpecialCaster/ShockAbsorberCaster/160426105930_00.jpg',
                        type: 'Model: DS 4560 PUI-R',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/ShockAbsorberCaster/160426105930_01.jpg',
                        type: 'Model: DS 4560 PUI-S',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/ShockAbsorberCaster/160426105930_02.jpg',
                        type: 'Model: DS 4580 PUI-R',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/ShockAbsorberCaster/160426105930_03.jpg',
                        type: 'Model: DS 4580 PUI-S',
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
                        ['DS 4560 PUI', 152, 48, 'Poly Propylene', '6203ZZ', 200, 127, 380, 4],
                        ['DS 4580 PUI', 202, 49, 'Poly Propylene', '6203ZZ', 245, 179, 600, 2],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/SpecialCaster/ShockAbsorberCaster/160426105930_10.jpg',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/ShockAbsorberCaster/160517043121_10.PNG.jpg',
                    },
                ],
            },
        },
        // ! 2
        {
            image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_06.jpg',
            id: '건축장비용 캐스터 Ladder Scaffold Caster',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_00.jpg',
                        type: 'Model: DS 5040 LDP-BK',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_01.jpg',
                        type: 'Model: DS 5040 PVP-BK',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_02.jpg',
                        type: 'Model: DS 5040 SR-BK',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_03.jpg',
                        type: 'Model: DS 5050 LDP-BK',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_04.jpg',
                        type: 'Model: DS 5050 PUI-BK',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_05.jpg',
                        type: 'Model: DS 5050 PVP-BK',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_06.jpg',
                        type: 'Model: DS 5050 SR-BK',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_07.jpg',
                        type: 'Model: DS 5060 LDP-BK',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_08.jpg',
                        type: 'Model: DS 5060 PUI-BK',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_09.jpg',
                        type: 'Model: DS 5060 PVP-BK',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160426110010_010.jpg',
                        type: 'Model: DS 5080 PUI-BK',
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
                        ['DS 5040 S R', 102, 32, 'Soft Rubber', 'Plain', 127, 85, 70, 25],
                        ['DS 5040 LDP', 102, 32, 'Poly Propylene', 'Plain', 127, 85, 100, 25],
                        ['DS 5040 PUI', 100, 33, 'Poly Urethane', 'Roller', 137, 81, 200, 16],
                        ['DS 5050 S R', 127, 32, 'Soft Rubber', 'Plain', 157, 100, 80, 20],
                        ['DS 5050 LDP', 127, 32, 'Poly Propylene', 'Plain', 157, 100, 110, 20],
                        ['DS 5050 PUI', 126, 40, 'Poly Urethane', 'Roller', 166, 110, 280, 10],
                        ['DS 5060 LDP', 150, 47, 'Poly Urethane', 'Pipe', 182, 118, 150, 12],
                        ['DS 5060 PVP', 150, 47, 'Poly Vinyl Chloride', 'Pipe', 182, 118, 120, 12],
                        ['DS 5060 PUI', 151, 43, 'Poly Urethane', 'Roller', 187, 114, 300, 8],
                        ['DS 5080 PUI', 202, 47, 'Poly Urethane', 'Roller', 241, 149, 350, 5],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/SpecialCaster/LadderScaffoldCaster/160517043147_10.PNG.jpg',
                    },
                ],
            },
        },
        // ! 3
        {
            image: '/src/assets/content/products/SpecialCaster/BusinessMachineCaster/160426110029_03.jpg',
            id: '전산기기용 캐스터 Business Machine Caster',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/SpecialCaster/BusinessMachineCaster/160426110029_00.jpg',
                        type: 'Model: DS 6025 HDP-S',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/BusinessMachineCaster/160426110029_01.jpg',
                        type: 'Model: DS 6030 HDP-BK',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/BusinessMachineCaster/160426110029_02.jpg',
                        type: 'Model: DS 6030 HDP-BT',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/BusinessMachineCaster/160426110029_03.jpg',
                        type: 'Model: DS 6030 HDP-S',
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
                        ['DS 6025 HDP', 63, 46, 'Poly Propylene', '6003ZZ', 92, 99, 44, 250, 30],
                        ['DS 6030 HDP', 76, 47, 'Poly Propylene', '6004ZZ', 105, 112, 51, 300, 30],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/SpecialCaster/BusinessMachineCaster/160517043223_10.PNG.jpg',
                    },
                ],
            },
        },
        // ! 4
        {
            image: '/src/assets/content/products/SpecialCaster/PneumaticTireFoamCaster/160426110049_02.jpg',
            id: '에어용/발포우레탄 캐스터 Pneumatic Tire / Foam Caster',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/SpecialCaster/PneumaticTireFoamCaster/160426110049_00.jpg',
                        type: 'Model: DS 7010 YOKE-S',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/PneumaticTireFoamCaster/160426110049_01.jpg',
                        type: 'Model: DS 7012 FP-S',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/PneumaticTireFoamCaster/160426110049_02.jpg',
                        type: 'Model: DS 7080 PT',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: '제품명', unit: '(Model)' },
                        { text: 'Wheel Dia', unit: '(mm)', image: '/src/assets/content/WheelDia.jpg' },
                        // { text: 'Tread Width', unit: '(mm)', image: '/src/assets/content/TreadWidth.jpg' },
                        { text: 'Wheel Material', image: '/src/assets/content/WheelMaterial.jpg' },
                        { text: 'Bearing', image: '/src/assets/content/Bearing.jpg' },
                        { text: 'Load Height', unit: '(mm)', image: '/src/assets/content/LoadHeight1.jpg' },
                        // { text: 'Load Height', unit: '(mm)', image: '/src/assets/content/LoadHeight2.jpg' },
                        // { text: 'Swivel Radius', unit: '(mm)', image: '/src/assets/content/SwivelRadius.jpg' },
                        // { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 7080 P T', 215, 'Pneumatic Tire', '6204', 259, 4],
                        ['DS 7080 S T', 215, 'Solid Rubber Tire', '6204', 259, 4],
                        ['DS 7080 F P', 215, 'Foam Poly Urethan', '6204', 259, 4],
                        ['DS 7010 P T', 260, 'Pneumatic Tire', '6204', 299, 4],
                        ['DS 7010 S T', 260, 'Solid Rubber Tire', '6204', 299, 4],
                        ['DS 7010 F P', 260, 'Foam Poly Urethan', '6204', 299, 4],
                        ['DS 7012 P T', 300, 'Pneumatic Tire', '6204', 334, 2],
                        ['DS 7012 S T', 300, 'Solid Rubber Tire', '6204', 334, 2],
                        ['DS 7012 F P', 300, 'Foam Poly Urethan', '6204', 334, 2],
                        ['DS 7013 P T', 360, 'Pneumatic Tire', '6204', null, null],
                        ['DS 7013 F P', 360, 'Foam Poly Urethan', '6204', null, null],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/SpecialCaster/PneumaticTireFoamCaster/160517043248_10.PNG.jpg',
                    },
                ],
            },
        },
        // ! 5
        {
            image: '/src/assets/content/products/SpecialCaster/TripleCaster/160426110138_00.jpg',
            id: '트리플 캐스터 Triple Caster',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/SpecialCaster/TripleCaster/160426110138_00.jpg',
                        type: 'Model: DS 9025 HDP',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/TripleCaster/160426110138_01.jpg',
                        type: 'Model: DS 9025 PUB',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/TripleCaster/160426110138_02.jpg',
                        type: 'Model: DS 9030 HDP',
                    },
                    {
                        image: '/src/assets/content/products/SpecialCaster/TripleCaster/160426110138_03.jpg',
                        type: 'Model: DS 9030 PUB',
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
                        // { text: 'Swivel Radius', unit: '(mm)', image: '/src/assets/content/SwivelRadius.jpg' },
                        { text: 'Load Capacity', unit: '(kg)', image: '/src/assets/content/LoadCapacity.jpg' },
                        { text: '박스당수량', unit: 'PCS' },
                    ],
                    rows: [
                        ['DS 9025 PUB', 61, 25, 'Poly Urethane', '628ZZ', 116, 120, 1],
                        ['DS 9025 HDP', 63, 46, 'Poly Propylene', '6003ZZ', 121, 500, 1],
                        ['DS 9030 PUB', 75, 32, 'Poly Urethane', '6200', 138, 180, 1],
                        ['DS 9030 HDP', 76, 46, 'Poly Propylene', '6003ZZ', 138, 700, 1],
                    ],
                    // commonPCS: 'S-150 R-150 B/K-130',
                },
                spec: [
                    {
                        image: '/src/assets/content/products/SpecialCaster/TripleCaster/160517043349_10.PNG.jpg',
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

export default Special_Caster;
