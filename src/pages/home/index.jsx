import { Carousel } from '@material-tailwind/react';

import ProductIntroduction from './ProductIntroduction';

import carousel_img1 from '/src/assets/carousel/carousel_img-1.jpg';
import carousel_img2 from '/src/assets/carousel/carousel_img-2.jpg';
import carousel_img3 from '/src/assets/carousel/carousel_img-3.jpg';
import Quick from '../../components/Layout/Content/Quick';

function home() {
    return (
        <div>
            <Carousel
                className="h-96 w-screen"
                loop={true}
                prevArrow={false}
                nextArrow={false}
                transition={{
                    type: 'tween',
                    duration: '0.5',
                }}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill('').map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? 'w-8 bg-red-800' : 'w-4 bg-white/50'
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <img src={carousel_img1} alt="image 1" className="h-full w-full object-cover" />
                <img src={carousel_img3} alt="image 3" className="h-full w-full object-cover" />
                <img src={carousel_img2} alt="image 2" className="h-full w-full object-cover" />
            </Carousel>
            <ProductIntroduction />
            <ul className="flex 2xl:px-52 md:px-52">
                <Quick
                    image={'/src/assets/content/quick01.png'}
                    text1={'공지사항'}
                    text2={'대신캐스터 공지사항을 확인해보세요.'}
                    text3={'바로가기 >'}
                />
                <Quick
                    image={'/src/assets/content/quick02.png'}
                    text1={'공지사항'}
                    text2={'대신캐스터 공지사항을 확인해보세요.'}
                    text3={'바로가기 >'}
                />
                <Quick
                    image={'/src/assets/content/quick03.png'}
                    text1={'공지사항'}
                    text2={'대신캐스터 공지사항을 확인해보세요.'}
                    text3={'바로가기 >'}
                />
                <Quick
                    image={'/src/assets/content/quick04.png'}
                    text1={'공지사항'}
                    text2={'대신캐스터 공지사항을 확인해보세요.'}
                    text3={'바로가기 >'}
                />
            </ul>
        </div>
    );
}
export default home;