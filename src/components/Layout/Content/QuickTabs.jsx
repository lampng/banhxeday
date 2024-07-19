import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function QuickTabs({ image, text1, text3 }) {
    return (
        <li className="">
            <Link className="flex items-center">
                <img src={image} alt="" className="rounded-full sm:w-[60px] h-[60px] select-none bg-white" />
                <div className='px-2'>
                    <Typography className="opacity-70 text-[14px] font-bold">
                        {text1}
                    </Typography>
                    <div className='flex items-center'>
                        <Typography className=" text-[12px] !text-gray-700 font-bold text-sm">
                            {text3}
                        </Typography>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3">
                            <path
                                fill-rule="evenodd"
                                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default QuickTabs;
