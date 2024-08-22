"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { SearchIcon } from "@/components/icons";

import { Logo } from "@/components/icons"; // Ensure the Logo component uses the provided logo image
import { usePathname } from "next/navigation";
export const Navbar = () => {
  const pathname = usePathname();
  const caseStudy = pathname.slice(1, 10);
  // console.log(caseStudy);

  return (
    <>
      {caseStudy == "caseStudy" ? (
        <div></div>
      ) : (
        <NextUINavbar
          className="mt-4 bg-transparent absolute top-0 mb-16"
          isBlurred={false}
          maxWidth="xl"
          // position="absolute"
        >
          <NavbarContent className="sm:basis-full " justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <NextLink
                className="flex justify-center items-center gap-1"
                href="/"
              >
                <Logo />{" "}
                {/* This should render the logo as provided in the image */}
              </NextLink>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent
            className="hidden sm:flex sm:basis-full"
            justify="center"
          >
            <ul className="hidden lg:flex gap-4 justify-start ml-2">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    // className={clsx(
                    //   linkStyles({}),
                    //   "data-[active=true]:text-primary data-[active=true]:font-medium"
                    // )}
                    className="text-lg font-medium"
                    // color="black"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </ul>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex sm:basis-full" justify="end">
            <NavbarItem className="hidden md:flex">
              {/* <Button
            isExternal
            as={Link}
            className="text-sm font-bold"
            radius="sm"
            href={siteConfig.links.sponsor}
            color="primary"
          >
            Let&apos;s Talk!
          </Button> */}
              <div className="button-container-1 animate__animated animate__fadeInUp animate__slow animate__delay-4s">
                <span className="mas"> Let&apos;s Talk!</span>
                <button id="work" type="button" name="Hover">
                  Let&apos;s Talk!
                </button>
              </div>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
            {/* <ThemeSwitch /> */}
            <NavbarMenuToggle />
          </NavbarContent>

          <NavbarMenu>
            {/* {searchInput} */}
            <div className="mx-4 mt-2 flex flex-col gap-2">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    // className={clsx(
                    //   linkStyles({}),
                    //   "data-[active=true]:text-primary data-[active=true]:font-medium"
                    // )}
                    className="text-lg font-medium"
                    // color="black"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </div>
          </NavbarMenu>
        </NextUINavbar>
      )}
    </>
  );
};
