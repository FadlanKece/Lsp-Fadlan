import React from "react";
import { Head } from "@inertiajs/react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    Button,
} from "@nextui-org/react";

export default function Homepage(props) {
    console.log(props.data);
    return (
        <Navbar isBordered className="w-screen bg-[#0F9200] ">
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
                        <Link href="#" aria-current="page" color="secondary">
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
                        //   startContent={<SearchIcon size={18} />}
                        type="search"
                    />
                    <NavbarItem>
                        <Button>sign up</Button>
                    </NavbarItem>
                </NavbarItem>
            </NavbarItem>
        </Navbar>
    );
}
