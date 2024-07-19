import { Typography } from '@material-tailwind/react';
function ImgWithCaption({ image, caption }) {
    return (
        <div className='select-none'>
            <figure className="h-auto w-full shadow-xl">
                <img
                    className=" w-full object-cover object-center bg-center bg-cover select-none"
                    src={image}
                    alt="nature image"
                />
            </figure>
            <Typography as="caption" variant="small" className="mt-2 text-center font-normal select-none">
                {caption}
            </Typography>
        </div>
    );
}

export default ImgWithCaption;
