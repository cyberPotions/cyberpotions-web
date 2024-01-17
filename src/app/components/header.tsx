import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar isBordered maxWidth="full" className="px-4 navbar">
      <NavbarBrand className="flex gap-3">
        <Image src="/logo.svg" width={28} radius="none" alt="cyberPotions logo"/>
        <p className="font-medium text-inherit text-xl">cyber<span className="">Potions</span></p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Our Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Resources
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            cyberUniversity
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="shadow" className="text-base" radius="full">
            Hire Us
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
