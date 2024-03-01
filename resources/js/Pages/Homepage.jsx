import React from "react";
import { Head } from "@inertiajs/react";
import {
    Navbar,
    NavbarBrand,
    NavbarItem,
    Link,
    Input,
    Button,
    Tooltip,
    Image,
} from "@nextui-org/react";

export default function Homepage(props) {
    const { DataProduct, DataDiscount, ProductCategory } = props;

    const [search, setSearch] = React.useState("");
    const searchData = DataProduct.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-screen h-screen flex flex-col gap-10 bg-[#262222]">
            <div className="">
                <div className="w-full top-0 h-[60px] bg-white absolute"></div>
                <Navbar isBordered className="w-screen bgblur">
                    <NavbarItem className="w-full flex flex-row justify-between">
                        <NavbarBrand className=" flex flex-row gap-3 ">
                            {/* <AcmeLogo /> */}
                            <p className="hidden sm:block font-bold text-inherit">
                                ACME
                            </p>
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Home
                                </Link>
                            </NavbarItem>
                            <NavbarItem isActive>
                                <Link
                                    href="#"
                                    aria-current="page"
                                    color="secondary"
                                >
                                    Discount
                                </Link>
                            </NavbarItem>
                        </NavbarBrand>
                        <NavbarItem className=" sm:flex gap-3">
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
                                <Button>
                                    {" "}
                                    <Link
                                        href={route("register")}
                                        aria-current="page"
                                        color="secondary"
                                    >
                                        Sign up
                                    </Link>
                                </Button>
                            </NavbarItem>
                        </NavbarItem>
                    </NavbarItem>
                </Navbar>
            </div>
            <div className="w-full h-full px-[120px]">
                <div className="w-full flex flex-row flex-wrap gap-5">
                    {searchData.map((item, index) => (
                        <div
                            key={index}
                            className="w-[300px] bg-[#D9D7CC] rounded-2xl h-fit drop-shadow flex flex-col gap-2 "
                        >
                            <Image
                                isZoomed
                                src={item.image1_url}
                                alt={item.name}
                                radius="none"
                                width={600}
                                height={600}
                                className="rounded-t-2xl w-[300px] h-[250px] "
                            />
                            <div className="flex flex-col p-4 justify-between items-start gap-5">
                                <h1 className="text-2xl font-bold text-[#4F7302]">
                                    {item.product_name}
                                </h1>
                                <div>
                                    <h1 className="text-xl ">{item.name}</h1>
                                    <Tooltip content={item.description}>
                                        <p className="line-clamp-2">
                                            {item.description}
                                        </p>
                                    </Tooltip>
                                    <p>Rp.{item.price}</p>
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
