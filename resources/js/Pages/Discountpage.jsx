import React from "react";
import { Head } from "@inertiajs/react";
import {
    Navbar,
    NavbarBrand,
    NavbarItem,
    Link,
    Input,
    Button,
    Image,
    Tooltip,
} from "@nextui-org/react";
import Logo from "../../image/Logo.png";
import Dropdown from "@/Components/Dropdown";

export default function Discountpage(props) {
    const { DataProduct, DataDiscount, ProductCategory, auth } = props;
    const [filter, setFilter] = React.useState("");
    const [search, setSearch] = React.useState("");
    const searchData = DataProduct.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase())
    );
    const dataFilter =
        filter === ""
            ? DataDiscount
            : DataDiscount.filter(
                  (item) => item.discount_categories.category_name === filter
              );

    console.log(DataDiscount);

    return (
        <div className="w-full overflow-x-hidden min-h-screen flex flex-col gap-10 bg-[#f0f0f0]">
            <div className="">
                {/* <div className="w-full top-0 h-[60px] bg-[#83A603] absolute"></div> */}
                <Navbar isBordered className="w-screen bg-[#83A603]">
                    <NavbarItem className="w-full flex flex-row justify-between">
                        <NavbarBrand className=" flex flex-row gap-3 ">
                            {/* <AcmeLogo /> */}
                            <img
                                className="w-[80px] h-[80px]"
                                src={Logo}
                                alt="logo"
                            />
                            <p className="hidden sm:block font-bold text-inherit text-white text-xl">
                                FreshpickCorner
                            </p>
                            <NavbarItem>
                                <Link
                                    className="text-white"
                                    href={route("homepage")}
                                >
                                    Home
                                </Link>
                            </NavbarItem>
                            <NavbarItem isActive>
                                <Link
                                    className="text-white"
                                    href={route("discountpage")}
                                >
                                    Discount
                                </Link>
                            </NavbarItem>
                        </NavbarBrand>
                        <NavbarItem className=" sm:flex gap-3 h-[80px] flex flex-row items-center justify-center">
                            <Input className="rounded-lg border-0"
                            classNames={{
                                input:'border-0 active:outline-none'
                            }}
                                placeholder="Type to search..."
                                size="sm"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                //   startContent={<SearchIcon size={18} />}
                                type="search"
                            />
                            <NavbarItem>
                                {" "}
                                {auth.user ? (
                                    <p className="text-white">hello! {auth.user.name}</p>
                                ) : (
                                    <Button className="bg-[#4F7302]">
                                        <Link
                                            className="text-white"
                                            href={route("register")}
                                            aria-current="page"
                                            color="secondary"
                                        >
                                            Sign up
                                        </Link>
                                    </Button>
                                )}
                            </NavbarItem>
                            <NavbarItem>
                            {" "}
                                {auth?.user?.roles === 'owner' ? (
                                   <Link
                                   className="text-white"
                                   href={route("adminpage")}
                               >
                                   Admin
                               </Link>
                                ) : null}
                            </NavbarItem>
                            <NavbarItem>
                            {" "}
                                {auth.user ? (
                                   <Link
                                   className="text-white"
                                   href="#"
                               >
                                   Wishlist
                               </Link>
                                ) : null}
                            </NavbarItem>
                            <NavbarItem>
                            {" "}
                                {auth.user ? (
                                   <Link
                                   className="text-white"
                                   href={route('logout')} method="post"
                               >
                                   Logout
                               </Link>
                                ) : null}
                            </NavbarItem>
                        </NavbarItem>
                    </NavbarItem>
                </Navbar>
            </div>
            <div className="px-[170px] w-fit ">
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-[#83A603] hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                            >
                                Discount category
                                <svg
                                    className="ms-2 -me-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content contentClasses="bg-[#83A603] text-white flex flex-col items-start">
                    <button
                            onClick={() => {
                                setFilter("");
                            }}
                            className="p-1 px-2 text-sm text-white hover:text-gray-700 rounded-md hover:bg-white w-full text-left transition-all"
                        >
                            All
                        </button>
                        {ProductCategory.map((item, i) => (
                            <button
                                onClick={() => {
                                    setFilter(item.category_name);
                                }}
                                key={i}
                                className="p-1 px-2 text-sm text-white hover:text-gray-700 rounded-md hover:bg-white w-full text-left transition-all"
                            >
                                {item.category_name}
                            </button>
                        ))}


                    </Dropdown.Content>
                </Dropdown>
            </div>
            <div className="w-full h-full px-[120px] pb-10">
                <div className="w-full flex flex-row flex-wrap gap-5 justify-center">
                    {dataFilter.map((item, index) => (
                         <div
                         key={index}
                         className="w-[300px] bg-[#ffffff] rounded-2xl shadow-md h-fit flex flex-col gap-2"
                     >
                         <Image
                            isZoomed
                            src={item.products.image1_url}
                            alt={item.products.product_name}
                            radius="none"
                            width={600}
                            height={600}
                            className="rounded-t-2xl w-[300px] h-[250px] "
                         />
                         <div className="flex flex-col p-4 justify-between items-start gap-5">
                                <h1 className="text-2xl font-bold text-[#4F7302]">
                                 {item.products.product_name}
                             </h1>
                             <div>

                                     <p className="line-clamp-2">
                                         {item.products?.description}
                                     </p>
                                 <div className="pt-4">
                                     <sup>
                                         <del className="text-green-800">
                                             <p>
                                                 Rp{" "}
                                                 {item.products.price
                                                     .toString()
                                                     .replace(
                                                         /\B(?=(\d{3})+(?!\d))/g,
                                                         "."
                                                     )} {item?.products?.minimum_qty}
                                             </p>
                                         </del>
                                     </sup>
                                     <p>
                                         Rp
                                         {(
                                             item.products.price -
                                             (item.products.price *
                                                 item.percentage) /
                                                 100
                                         )
                                             .toString()
                                             .replace(
                                                 /\B(?=(\d{3})+(?!\d))/g,
                                                 "."
                                             )} {item?.products?.minimum_qty}
                                     </p>
                                 </div>
                                 <p className="text-sm pt-2">
                                     Periode :{" "}
                                     {new Date(
                                         item?.start_date
                                     ).toLocaleDateString("id-ID", {
                                         year: "numeric",
                                         month: "long",
                                         day: "numeric",
                                     })}{" "}
                                     -{" "}
                                     {new Date(
                                         item?.end_date
                                     ).toLocaleDateString("id-ID", {
                                         year: "numeric",
                                         month: "long",
                                         day: "numeric",
                                     })}
                                 </p>
                             </div>
                             <Button

                                 className="w-full bg-[#83A603] text-white"
                             >
                                 Add To Cart
                             </Button>
                         </div>
                     </div>

                    ))}
                </div>
            </div>
        </div>
    );
}
