"use client"

import Section from "./section";
import { Container } from "./container";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function LoginLink() {
  return (
    <Section id="hero">
      <Container>
        <div
          className="flex flex-col py-10 md:py-16 gap-10 items-center justify-center h-screen"
        >
          <div
            className="flex flex-col items-center gap-6 text-center"
          >
            <h1 className="text-xl">
              A link has been sent to your email.
            </h1>
          </div>
          <div
            id="home-hero-buttons"
            className="w-full md:w-auto flex flex-col-reverse items-stretch md:flex-row gap-3 text-center"
          >
            <Button
              color="primary"
              variant="light"
              size="lg"
              radius="full"
            >
              See Our Process
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}