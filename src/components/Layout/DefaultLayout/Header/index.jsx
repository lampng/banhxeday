import React, { useState, useEffect } from 'react';
import { Collapse, Typography, IconButton, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import top2m1_01 from '/src/assets/headers/top2m1_01.png';
import top2m1_02 from '/src/assets/headers/top2m1_02.png';
import top2m1_03 from '/src/assets/headers/top2m1_03.png';
import top2m1_04 from '/src/assets/headers/top2m1_04.png';
import { HashLink as Link } from 'react-router-hash-link';

const CompanyListMenuItems = [
    {
        image: top2m1_01,
        title: '회사개요',
        description: 'Message',
        to: '/company-introduction/Message',
        value: 'Message',
    },
    {
        image: top2m1_02,
        title: '회사연혁',
        description: 'History',
        to: '/company-introduction/History',
        value: 'History',
    },
    {
        image: top2m1_03,
        title: '품질인증',
        description: 'Quality Certification',
        to: '/company-introduction/Certification',
        value: 'Certification',
    },
    {
        image: top2m1_04,
        title: '찾아오시는길',
        description: 'Location',
        to: '/company-introduction/Location',
        value: 'Location',
    },
];
const CasterDataListMenuItems = [
    {
        title: '캐스터용어',
        description: 'Caster Nomenclature',
        to: '/caster-data/Casternomenclature',
        value: 'Casternomenclature',
    },
    {
        title: '플레이트용어',
        description: 'Plate Nomenclature',
        to: '/caster-data/Platenomenclature',
        value: 'Platenomenclature',
    },
    {
        title: '허용하중계산법 ',
        description: 'Load Capacity',
        to: '/caster-data/Loadcapacity',
        value: 'Loadcapacity',
    },
    {
        title: '표기방법및용어',
        description: 'Caster Numbering System',
        to: '/caster-data/Casternumberingsystem',
        value: 'Casternumberingsystem',
    },
    {
        title: '주의사항',
        description: 'Usage',
        to: '/caster-data/Usage',
        value: 'Usage',
    },
];
const ProductListMenuItems = [
    {
        title: '경하중용캐스터',
        description: 'Light-Duty Caster',
        value: 'Light-Duty',
        to: '/products/Light-Duty',
    },
    {
        title: '중간하중용 캐스터',
        description: 'Medium-Duty Caster',
        value: 'Medium-Duty',
        to: '/products/Medium-Duty',
    },
    {
        title: '중하중용 캐스터',
        description: 'Heavy-Duty Caster',
        value: 'Heavy-Duty',
        to: '/products/Heavy-Duty',
    },
    {
        title: '스테인리스 캐스터',
        description: 'Super Heavy-Duty Caster',
        value: 'Super-Heavy-Duty',
        to: '/products/Super-Heavy-Duty',
    },
    {
        title: '고하중용 캐스터',
        description: 'Stainless Steel Caster',
        value: 'StainlessiSteel',
        to: '/products/StainlessiSteel',
    },
    {
        title: '내열성/내한성 캐스터',
        description: 'Heat-Resisting/Low Temperature Caster',
        value: 'Heat-Resisting',
        to: '/products/Heat-Resisting',
    },
    {
        title: '의료용 캐스터',
        description: 'Medical Equipment Caster',
        value: 'Medical-Equipment',
        to: '/products/Medical-Equipment',
    },
    {
        title: '저소음 캐스터',
        description: 'Low Noise Caster',
        value: 'Low-Noise',
        to: '/products/Low-Noise',
    },
    {
        title: '특수 목적용 캐스터',
        description: 'Special Caster',
        value: 'Special-Caster',
        to: '/products/Special-Caster',
    },
    {
        title: '높낮이조절 캐스터',
        description: 'Leveling Caster',
        value: 'Leveling-Caster',
        to: '/products/Leveling-Caster',
    },
    {
        title: '높낮이 조절자',
        description: 'Leveling Foot',
        value: 'Leveling-Foot',
        to: '/products/Leveling-Foot',
    },
    {
        title: '운반 기구',
        description: 'Trolley',
        to: '/products/Trolley',
        value: 'Trolley',

    },
    {
        title: '기타',
        description: 'etc',
        to: '/products/etc',
        value: 'etc',
    },
];
const CustomerCenterListMenuItems = [
    {
        title: '온라인견적문의',
        description: 'Inquiry',
        value: 'inquiry',
        to: '/customer-center/inquiry',
    },
    {
        title: '공지사항',
        description: 'notice',
        value: 'notice',
        to: '/customer-center/notice',
    },
    {
        title: 'News',
        description: 'News',
        value: 'News',
        to: '/customer-center/News',
    },
    {
        title: 'Q&A',
        description: 'Q&A',
        value: 'Q&A',
        to: '/customer-center/Q&A',
    },
];
function CompanyDataCenterListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = CompanyListMenuItems.map(({ image, title, description, to, value }, key) => (
        <Link to={to} state={{ value }} key={key} className="">
            <MenuItem className="hover:bg-white rounded-none p-0">
                <div className="h-16">
                    <img src={image} alt="" className="m-auto  select-none" />
                </div>

                <div className="text-center font-bold">
                    <Typography variant="h6" className="">
                        {title}
                    </Typography>
                    <Typography variant="paragraph" className="text-xs !font-medium !text-blue-gray-500">
                        {description}
                    </Typography>
                </div>
            </MenuItem>
        </Link>
    ));

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                animate={{
                    mount: { x: 0, y: 0 },
                    unmount: { x: 0, y: 0 },
                }}
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <a
                            href="/company-introduction"
                            className="items-center text-center text-black hover:text-red-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <Typography className=" opacity-80" variant="h5">
                                회사소개
                            </Typography>
                            <Typography
                                variant="paragraph"
                                className="text-xs capitalize text-black opacity-40 font-bold"
                            >
                                Company Introduction
                            </Typography>
                        </a>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden rounded-none w-screen lg:block  sm:px-20 2xl:px-52 mt-3.5 select-none  border-y border-red-900">
                    <div className="flex 2xl:h-32">
                        <div className="2xl:w-80 m-auto">
                            <Typography variant="h4" className="text-black opacity-80">
                                회사소개
                            </Typography>
                            <Typography className="!font-bold text-xs">캐스터의 해결책을 제시하는 기업</Typography>
                        </div>
                        <div class="md:h-16 my-auto border-l-2 border-gray-300 ml-5"></div>
                        <div className="w-full content-center">
                            <ul className="outline-none outline-0 pl-28 pr-20">
                                <li className="flex flex-wrap justify-between gap-3">{renderItems}</li>
                            </ul>
                        </div>
                    </div>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}
function CasterDataCenterListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = CasterDataListMenuItems.map(({ title, description, to, value }, key) => (
        <Link to={to} state={{ value }} key={key} className="">
            <MenuItem className="flex items-center hover:bg-white rounded-none p-0">
                <a className="flex items-center font-bold">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-1.5 mr-1 text-red-900"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {title}
                    <span variant="paragraph" className="text-xs !font-medium !text-blue-gray-500 pl-1">
                        {description}
                    </span>
                </a>
            </MenuItem>
        </Link>
    ));

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                animate={{
                    mount: { x: 0, y: 0 },
                    unmount: { x: 0, y: 0 },
                }}
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <a
                            href="/caster-data"
                            className="items-center text-center text-black hover:text-red-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <Typography className=" opacity-80" variant="h5">
                                캐스터자료실
                            </Typography>
                            <Typography
                                variant="paragraph"
                                className="text-xs capitalize text-black opacity-40 font-bold"
                            >
                                Caster Data
                            </Typography>
                        </a>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden rounded-none w-screen lg:block  sm:px-20 2xl:px-52 mt-3.5 select-none  border-y border-red-900">
                    <div className="flex md:h-32">
                        <div className="md:w-80 m-auto">
                            <Typography variant="h4" className="text-black opacity-80">
                                캐스터자료실
                            </Typography>
                            <Typography className="!font-bold text-xs">캐스터의 해결책을 제시하는 기업</Typography>
                        </div>
                        <div class="md:h-16 my-auto border-l-2 border-gray-300 ml-5"></div>
                        <div className="w-full">
                            <ul className="outline-none outline-0 pl-28">
                                <li className="flex flex-wrap justify-start gap-3">{renderItems}</li>
                            </ul>
                        </div>
                    </div>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}
function ProductsCenterListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = ProductListMenuItems.map(({ title, description, to, value }, key) => (
        <Link to={to} state={{ value }} key={key} className="">
            <MenuItem className="flex items-center hover:bg-white rounded-none p-0">
                <a className="flex items-center font-bold">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-1.5 mr-1 text-red-900"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {title}
                    <span variant="paragraph" className="text-xs !font-medium !text-blue-gray-500 pl-1">
                        {description}
                    </span>
                </a>
            </MenuItem>
        </Link>
    ));

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                animate={{
                    mount: { x: 0, y: 0 },
                    unmount: { x: 0, y: 0 },
                }}
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <a
                            href="/products"
                            className="items-center text-center text-black hover:text-red-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <Typography className=" opacity-80" variant="h5">
                                제품소개
                            </Typography>
                            <Typography
                                variant="paragraph"
                                className="text-xs capitalize text-black opacity-40 font-bold"
                            >
                                Products
                            </Typography>
                        </a>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden rounded-none w-screen lg:block  sm:px-20 2xl:px-52 mt-3.5 select-none  border-y border-red-900">
                    <div className="flex md:h-32">
                        <div className="md:w-80 m-auto">
                            <Typography variant="h4" className="text-black opacity-80">
                                제품소개
                            </Typography>
                            <Typography className="!font-bold text-xs">캐스터의 해결책을 제시하는 기업</Typography>
                        </div>
                        <div class="md:h-16 my-auto border-l-2 border-gray-300 ml-5"></div>
                        <div className="w-full">
                            <ul className="outline-none outline-0 pr-16">
                                <li className="flex flex-wrap justify-start gap-2 pl-11">{renderItems}</li>
                            </ul>
                        </div>
                    </div>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}
function CustomerCenterListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = CustomerCenterListMenuItems.map(({ title, description, to, value }, key) => (
        <Link to={to} state={{ value }} key={key} className="">
            <MenuItem className="hover:bg-white rounded-none p-0">
                <a className="flex items-center font-bold">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-1.5 mr-1 text-red-900"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {title}
                    <span variant="paragraph" className="text-xs !bottom-0 !font-medium !text-blue-gray-500 pl-1">
                        {description}
                    </span>
                </a>
            </MenuItem>
        </Link>
    ));

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                animate={{
                    mount: { x: 0, y: 0 },
                    unmount: { x: 0, y: 0 },
                }}
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <a
                            href="/customer-center"
                            className="items-center text-center text-black hover:text-red-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <Typography className=" opacity-80" variant="h5">
                                고객센터
                            </Typography>
                            <Typography variant="paragraph" className="text-xs text-black opacity-40 font-bold">
                                Customer Center
                            </Typography>
                        </a>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden rounded-none w-screen lg:block  sm:px-20 2xl:px-52 mt-3.5 select-none  border-y border-red-900">
                    <div className="flex md:h-32">
                        <div className="md:w-80 m-auto">
                            <Typography variant="h4" className="text-black opacity-80">
                                고객센터
                            </Typography>
                            <Typography className="!font-bold text-xs">캐스터의 해결책을 제시하는 기업</Typography>
                        </div>
                        <div class="md:h-16 md:ml-5 my-auto border-l-2 border-gray-300"></div>
                        <div className="w-full">
                            <ul className="outline-none outline-0 pr-16">
                                <li className="flex flex-wrap justify-end gap-3">{renderItems}</li>
                            </ul>
                        </div>
                    </div>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}
function NavList({ isFlex }) {
    return (
        <div className={`mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:p-1 justify-between xl:ml-44  ${isFlex ? 'flex' : ''}`}>
            <CompanyDataCenterListMenu />
            <CasterDataCenterListMenu />
            <ProductsCenterListMenu />
            <CustomerCenterListMenu />
        </div>
    );
}
function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const [isFlex, setIsFlex] = React.useState(window.innerWidth >= 960);

    React.useEffect(() => {
        const handleResize = () => {
            setIsFlex(window.innerWidth >= 960);
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-screen">
            <header className="w-full bg-red-900 h-8  sm:px-20 2xl:px-52">
                <div className="flex font-medium text-xs text-white justify-end md:container md:mx-auto py-2">
                    <a href="#" className="px-2 tracking-tighter opacity-85 text-center">
                        HOME
                    </a>
                    <Typography className="content-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-2.5 rotate-90 mr-0"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </Typography>
                    <a href="#" className="px-2 tracking-tighter opacity-85">
                        SITEMAP
                    </a>
                    <Typography className="content-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-2.5 rotate-90 mr-0"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </Typography>
                </div>
            </header>
            <div className="rounded-none shadow-none px-0 ">
                <div className="flex items-center justify-between text-blue-gray-900 sm:px-20 2xl:px-52">
                    <a href="/" className="mr-4 w-[23rem]">
                        <img className="select-none" src="/src/assets/headers/logo.jpg" alt="" />
                    </a>
                    <div className="hidden lg:block py-4 w-full">
                        <NavList isFlex={isFlex} />
                    </div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </div>
        </div>
    );
}

export default Header;
