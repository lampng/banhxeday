import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '../../components/Layout/Content/DrawerProduct';
function Leveling_Foot({ label, labelDesc }) {
    const DATA = [
        // ! 1
        {
            image: '/src/assets/content/products/LevelingFoot/PSERIES/160426110656_00.jpg',
            id: 'P SERIES',
            des: {
                imageProduct: [
                    {
                        image: '/src/assets/content/products/LevelingFoot/PSERIES/160426110656_00.jpg',
                        type: 'Model: QM40 S QM40 F 우레탄 패드',
                    },
                ],
                CasterSpecification: {
                    headers: [
                        { text: 'MODEL'},
                        { text: 'L1'},
                        { text: 'L2'},
                        { text: 'H'},
                        { text: 'G'},
                        { text: 'Ф'},
                        { text: 'M', unit: '(m/m)'},
                        { text: '허용하중', unit: '(KG/4EA)'},
                        { text: 'BOLT&NUT'},
                        { text: '하부'},
                        { text: '하부패드'},
                        { text: '표면처리'},
                    ],
                    rows: [ 
                        ['P-6 PS-6', '40', '51', '4', '7', 'Ф27', 'M61.0', '100 100', 'SM10C SUS304', 'SPC(2T) SUS304(2T)', '니켈도금', '포리싱(PL)'],
                        ['P-6 PS-6', '40', '53', '4', '9', 'Ф37', 'M61.0', '100 100', 'SM10C SUS304', 'SPC(2.5T) SUS304(2.5T)', '니켈도금', '포리싱(PL)'],
                        ['P-8 PS-8', '40', '54', '5', '9', 'Ф37', 'M81.25', '200 300', 'SM10C SUS304', 'SPC(2.5T) SUS304(2.5T)', '니켈도금', '포리싱(PL)'],
                        ['P-8 PS-8', '80', '94', '5', '9', 'Ф37', 'M81.25', '200 300', 'SM10C SUS304', 'SPC(2.5T) SUS304(2.5T)', '니켈도금', '포리싱(PL)'],
                        ['P-10 PS-10', '60', '80', '7', '13', 'Ф55', 'M101.5', '300 600', 'SM10C SUS304', 'SPC(2.5T) SUS304(2.5T)', '니켈도금', '포리싱(PL)'],
                        ['P-10 PS-10', '100', '120', '7', '13', 'Ф55', 'M101.5', '300 600', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                        ['P-12 PS-12', '60', '81', '8', '13', 'Ф55', 'M121.75', '500 800', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                        ['P-12 PS-12', '90', '111', '8', '13', 'Ф55', 'M121.75', '500 800', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                        ['P-12 PS-12', '120', '141', '8', '13', 'Ф55', 'M121.75', '500 800', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                        ['P-12 PS-12', '150', '171', '8', '13', 'Ф55', 'M121.75', '500 800', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                        ['P-12 PS-12', '200', '221', '8', '13', 'Ф55', 'M121.75', '500 800', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                        ['P-14 PS-14', '110', '132', '9', '13', 'Ф55', 'M142.0', '800 1100', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                        ['P-14 PS-14', '110', '137', '9', '18', 'Ф75', 'M142.0', '800 1100', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                        ['P-16 PS-16', '30', '53', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                        ['P-16 PS-16', '30', '58', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                        ['P-16 PS-16', '50', '73', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '50', '78', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '70', '93', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '70', '98', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '80', '103', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '80', '108', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '100', '128', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '120', '143', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '100', '123', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '130', '153', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '130', '158', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '120', '148', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '150', '173', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '150', '178', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '180', '203', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '180', '208', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '200', '223', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '200', '228', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '250', '273', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '250', '278', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '300', '323', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                        ['P-16 PS-16', '300', '328', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ],
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
                            <div className="bg-gray-100 py-5 px-4">{id}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Leveling_Foot;
