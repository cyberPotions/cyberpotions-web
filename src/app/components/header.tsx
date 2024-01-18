'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input} from "@nextui-org/react";


export default function Header() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <Navbar isBordered maxWidth="full" className="px-4 navbar">
      <NavbarBrand className="flex gap-3">
        <Image src="/icon.svg" width={28} radius="none" alt="cyberPotions logo"/>
        <p className="font-medium text-inherit text-xl">cyber<span className="">Potions</span></p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-6" justify="center">
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
          <Button onPress={onOpen} color="primary" variant="shadow" className="text-base" radius="full">
            Log In
          </Button>
        </NavbarItem>
      </NavbarContent>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
        classNames={{
          backdrop: "bg-gradient-to-t from-emerald-950 to-emerald-950/10"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose} radius="full">
                  Close
                </Button>
                <Button variant="shadow" color="primary" onPress={onClose} radius="full">
                  Log In
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Navbar>
  );
}
