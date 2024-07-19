import { Typography } from '@material-tailwind/react';
import footer_logo from '/src/assets/footers/footer_logo.png'
export default function DSCasterFooter() {
    return (
        <div className="sm:px-20 2xl:px-52 flex py-12 bg-gray-900 bg-opacity-10">
            <div className="flex w-72 items-center">
                <img src={footer_logo} alt="" className='select-none'/>
                <Typography variant="h5" className="opacity-60 font-bold pl-2">
                    (주)대신캐스터
                </Typography>
            </div>
            <div className="flex flex-wrap gap-1 px-28">
                <Typography className="text-xs font-bold opacity-55 select-none">주소</Typography>
                <Typography className="text-xs opacity-65 select-none">
                    경기도 파주시 법원읍 법원2산단로 38(법원읍 대능리 482)
                </Typography>
                <Typography className="text-xs font-bold opacity-55 select-none">전화_</Typography>
                <Typography className="text-xs opacity-65">031.943.4388~9</Typography>
                <Typography className="text-xs font-bold opacity-55 select-none">팩스_</Typography>
                <Typography className="text-xs opacity-65">031.946.4390</Typography>
                <Typography className="text-xs opacity-65 select-none">COPYRIGHT(C) 2016</Typography>
                <Typography className="text-xs font-bold select-none">Daesin Caster</Typography>
                <Typography className="text-xs opacity-65 select-none">ALL RIGHTS RESERVED.</Typography>
            </div>
            <div></div>
        </div>
    );
}
