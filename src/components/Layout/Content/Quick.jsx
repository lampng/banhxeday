import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function Quick({image, text1, text2, text3}) {
    return (
        <li>
            <Link className='flex'>
                <img src={image} alt="" />
                <div>
                  <Typography>{text1}</Typography>
                  <Typography>{text2}</Typography>
                  <Typography>{text3}</Typography>
                </div>
            </Link>
        </li>
    );
}

export default Quick;
