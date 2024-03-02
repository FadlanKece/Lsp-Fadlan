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
} from "@nextui-org/react";
import Logo from '../../image/Logo.png'

export default function Discountpage(props) {
    const { DataProduct, DataDiscount, ProductCategory, auth } = props;

    const [search, setSearch] = React.useState("");
    const searchData = DataDiscount.filter((item) =>
        item.products.product_name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(DataDiscount, ProductCategory)
    return (
        <div className="w-screen min-h-screen flex flex-col gap-10 bg-[#262222]">
            <div className="">
                <div className="w-full top-0 h-[60px] bg-[#83A603] absolute"></div>
                <Navbar isBordered className="w-screen bgblur">
                    <NavbarItem className="w-full flex flex-row justify-between">
                        <NavbarBrand className=" flex flex-row gap-3 ">
                            {/* <AcmeLogo /> */}
                            <img className="w-[80px] h-[80px]" src={Logo} alt="logo" />
                            <p className="hidden sm:block font-bold text-inherit text-white text-xl">
                                FreshpickCorner
                            </p>
                            <NavbarItem>
                                <Link className="text-white" href={route("homepage")}>
                                    Home
                                </Link>
                            </NavbarItem>
                            <NavbarItem isActive>
                                <Link className="text-white"
                                    href={route("discountpage")}>
                                    Discount
                                </Link>
                            </NavbarItem>
                        </NavbarBrand>
                        <NavbarItem className=" sm:flex gap-3 h-[80px] flex flex-row items-center justify-center">
                            <Input
                                classNames={{
                                    base: "max-w-full sm:max-w-[10rem] h-10",
                                    mainWrapper: "h-full",
                                    input: "text-small",
                                    inputWrapper:
                                        "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
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
                                    <p>hello! {auth.user.name}</p>
                                ) : (
                                    <Button className="bg-[#4F7302]">
                                        <Link
                                            href={route("register")}
                                            aria-current="page"
                                            color="secondary"
                                        >
                                            Sign up
                                        </Link>
                                    </Button>
                                )}
                            </NavbarItem>
                        </NavbarItem>
                    </NavbarItem>
                </Navbar>
            </div>
            <div className="w-full h-full px-[120px]">
                <div className="w-full flex flex-row flex-wrap gap-5 justify-center">
                    {searchData.map((item, index) => (
                        <div
                            key={index}
                            className="w-[300px] bg-[#D9D7CC] rounded-2xl h-fit drop-shadow flex flex-col gap-2 "
                        >
                            <Image
                                isZoomed
                                src={item.products.image1_url}
                                alt={item.products.name}
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
                                    <h1 className="text-xl ">{item.products.name}</h1>
                                        <p className="line-clamp-2">
                                            {item.products.description}
                                        </p>
                                    <p className="">
                                        Rp
                                        {item.products.price
                                            .toString()
                                            .replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                "."
                                            )}
                                        ,00{item.minimum_qty}
                                    </p>
                                </div>
                                <Button className="w-full bg-[#83A603] text-white">
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
