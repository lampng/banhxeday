import React from 'react';
import { Typography } from '@material-tailwind/react';
import wheels_01 from '/src/assets/content/caster/wheels_01.jpg';
import wheels_02 from '/src/assets/content/caster/wheels_02.jpg';
import wheels_03 from '/src/assets/content/caster/wheels_03.jpg';
import wheels_04 from '/src/assets/content/caster/wheels_04.jpg';
import wheels_05 from '/src/assets/content/caster/wheels_05.jpg';
import wheels_06 from '/src/assets/content/caster/wheels_06.jpg';
import wheels_07 from '/src/assets/content/caster/wheels_07.jpg';
import wheels_08 from '/src/assets/content/caster/wheels_08.jpg';
import wheels_09 from '/src/assets/content/caster/wheels_09.jpg';
import wheels_10 from '/src/assets/content/caster/wheels_10.jpg';
import wheels_11 from '/src/assets/content/caster/wheels_11.jpg';
import wheels_12 from '/src/assets/content/caster/wheels_12.jpg';
import wheels_13 from '/src/assets/content/caster/wheels_13.jpg';
import wheels_14 from '/src/assets/content/caster/wheels_14.jpg';
import wheels_15 from '/src/assets/content/caster/wheels_15.jpg';
import wheels_16 from '/src/assets/content/caster/wheels_16.jpg';
import wheels_17 from '/src/assets/content/caster/wheels_17.jpg';
import wheels_18 from '/src/assets/content/caster/wheels_18.jpg';
import wheels_19 from '/src/assets/content/caster/wheels_19.jpg';
import wheels_20 from '/src/assets/content/caster/wheels_20.jpg';
import wheels_21 from '/src/assets/content/caster/wheels_21.jpg';
import wheels_22 from '/src/assets/content/caster/wheels_22.jpg';
import wheels_23 from '/src/assets/content/caster/wheels_23.jpg';
import wheels_24 from '/src/assets/content/caster/wheels_24.jpg';
import wheels_25 from '/src/assets/content/caster/wheels_25.jpg';
import wheels_26 from '/src/assets/content/caster/wheels_26.jpg';
import wheels_27 from '/src/assets/content/caster/wheels_27.jpg';
function Casternumberingsystem() {
    const TABLE_ROWS = [
        {
            image: wheels_01,
            CS: 'S R',
            CS_des_eng: 'Soft Rubber',
            CS_des_kor: '연질고무',
        },
        {
            image: wheels_02,
            CS: 'EPU',
            CS_des_eng: 'Elastic Poly Urethane',
            CS_des_kor: '액상우레탄 휠+볼베어링',
        },
        {
            image: wheels_03,
            CS: 'SRB',
            CS_des_eng: 'Soft Rubber with Ball bearing',
            CS_des_kor: '연질고무+베어링',
        },
        {
            image: wheels_04,
            CS: 'PCB',
            CS_des_eng: 'Poly Vinyl Chloride insert',
            CS_des_kor: 'PVC-베어링타입',
        },
        {
            image: wheels_05,
            CS: 'LDP',
            CS_des_eng: 'Light Duty Plastic',
            CS_des_kor: '경량용 플라스틱',
        },
        {
            image: wheels_06,
            CS: 'PUA',
            CS_des_eng: 'Poly Urethane tread Alum core',
            CS_des_kor: '우레탄휠 알루미늄 코어',
        },
        {
            image: wheels_07,
            CS: 'HDP',
            CS_des_eng: 'Heavy Duty Plastic',
            CS_des_kor: '중량용 플라스틱',
        },
        {
            image: wheels_08,
            CS: 'PUF',
            CS_des_eng: 'Poly Urethane tread Plastic core',
            CS_des_kor: '폴리우레탄 플라스틱 타입',
        },
        {
            image: wheels_09,
            CS: 'PUB',
            CS_des_eng: 'Poly Urethane with Ball bearing',
            CS_des_kor: '폴리우레탄+볼베어링',
        },
        {
            image: wheels_10,
            CS: 'PUI',
            CS_des_eng: 'Poly Urethane tread Iron core',
            CS_des_kor: '주물 고무타입',
        },
        {
            image: wheels_11,
            CS: 'PUN',
            CS_des_eng: 'Poly Urethane with Nylon bearing',
            CS_des_kor: '폴리우레탄+나일론베어링',
        },
        {
            image: wheels_12,
            CS: 'NYL',
            CS_des_eng: 'Nylon',
            CS_des_kor: '나일론',
        },
        {
            image: wheels_13,
            CS: 'PVB',
            CS_des_eng: 'Poly Vinyl chloride with Ball bearing',
            CS_des_kor: 'PVC+볼베어링',
        },
        {
            image: wheels_14,
            CS: 'NGM',
            CS_des_eng: 'Nylon Glass Mineral',
            CS_des_kor: '경량용 내열성',
        },
        {
            image: wheels_15,
            CS: 'PVN',
            CS_des_eng: 'Poly Vinyl chloride with Nylon bearing',
            CS_des_kor: 'PVC+나일론베어링',
        },
        {
            image: wheels_16,
            CS: 'PHN',
            CS_des_eng: 'Phenolic Caster',
            CS_des_kor: '중량용 내열성',
        },
        {
            image: wheels_17,
            CS: 'PVP',
            CS_des_eng: 'Poly Vinyl chloride tread PI',
            CS_des_kor: 'PVC+적용',
        },
        {
            image: wheels_18,
            CS: 'VGC',
            CS_des_eng: 'V Grooved Caster',
            CS_des_kor: 'V형 윤활',
        },
        {
            image: wheels_19,
            CS: 'MRB',
            CS_des_eng: 'Thermoplastic Rubber with Ball bearing',
            CS_des_kor: '열가소성 고무 타일',
        },
        {
            image: wheels_20,
            CS: 'UGC',
            CS_des_eng: 'U Grooved Caster',
            CS_des_kor: 'U형 윤활',
        },
        {
            image: wheels_21,
            CS: 'MRP',
            CS_des_eng: 'Thermoplastic Rubber tread',
            CS_des_kor: '열가소성 고무 타일',
        },
        {
            image: wheels_22,
            CS: 'P T',
            CS_des_eng: 'Pneumatic Tire',
            CS_des_kor: '에어 내기',
        },
        {
            image: wheels_23,
            CS: 'ELA',
            CS_des_eng: 'Elastomer tread Plastic core',
            CS_des_kor: '쿠션용 플라스틱 코어',
        },
        {
            image: wheels_24,
            CS: 'F P',
            CS_des_eng: 'Foam Poly urethane',
            CS_des_kor: '발포우레탄 타이어',
        },
        {
            image: wheels_25,
            CS: 'ELP',
            CS_des_eng: 'Elastomer tread Plastic core',
            CS_des_kor: '쿠션용 플라스틱 코어',
        },
        {
            image: wheels_26,
            CS: 'MCN',
            CS_des_eng: 'Monocore Cast Nylon',
            CS_des_kor: 'MCL캐스터',
        },
        {
            image: wheels_27,
            CS: 'NSR',
            CS_des_eng: 'Natural Soft Rubber tread',
            CS_des_kor: '천연 연질고무 트레드',
        },
    ];
    return (
        <div className="select-none">
            <div
                alt=""
                className="bg-[url('/src/assets/content/caster/sub02_img04.png')] bg-no-repeat bg-auto bg-center w-[750px] h-[160px]  border-4 rounded-lg"
            />
            <div className="flex items-center gap-1 my-2">
                <div className="w-5 h-5 rounded-full bg-white border-4 border-red-900" />
                <Typography variant="h6" className="text-black">
                    캐스터 휠 종류_Caster Wheels
                </Typography>
            </div>
            <div className="w-full flex">
                <table className="">
                    <tbody className="flex flex-wrap row-auto border-t-2 border-t-red-900">
                        {TABLE_ROWS.map(({ image, CS, CS_des_eng, CS_des_kor }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const isEven = index % 2 === 0;
                            let classes = 'p-2';

                            if (isLast) {
                                if (isEven) {
                                    classes = 'p-2 border-l border-b border-r'; // Even (last item)
                                } else {
                                    classes = 'p-2 border-r border-b'; // Odd (last item)
                                }
                            } else {
                                if (isEven) {
                                    classes = 'p-2 border-l border-b border-r'; // Even
                                } else {
                                    classes = 'p-2 border-r border-b'; // Odd
                                }
                            }

                            return (
                                <tr className="w-1/2">
                                    <td className={`${classes} w-2/5 `}>
                                        <img src={image} alt="" className="" />
                                    </td>
                                    <td className={`${classes} w-1/5 bg-blue-gray-50/50`}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            {CS}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} w-2/5`}>
                                        <Typography color="blue-gray" className="font-normal text-[12px] w-full">
                                            {CS_des_eng}
                                        </Typography>
                                        <Typography color="blue-gray" className="font-normal text-[12px] w-full">
                                            {CS_des_kor}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Casternumberingsystem;
