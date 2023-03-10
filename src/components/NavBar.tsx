import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMoon, BiSun } from "react-icons/bi";
import { useRouter } from "next/router";
import { ConnectKitButton } from "connectkit";
import {
  Flex,
  Box,
  Text,
  Stack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  const { pathname } = useRouter();

  return (
    <>
      <nav className="fixed z-10 w-full mx-auto bg-pink-300 bg-opacity-80 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black dark:bg-opacity-80 drop-shadow-lg dark:drop-shadow-[0_10px_25px_rgba(255,255,255,0.25)]">
        <div className="max-w-[1080px] container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center flex-1">
            <span className="flex flex-row items-center self-center text-xl font-bold whitespace-nowrap text-[#9504ff] hover:text-[#a137df] dark:text-[#c26fff]">
              <Image
                src="/trustChainLogo.png"
                width="60"
                height="60"
                className="mr-4"
                alt="TrustChainLogo"
              />
              TrustChain
            </span>
          </Link>
          <div className="flex md:order-2" style={{ marginLeft: "2rem" }}>
            <ConnectKitButton />
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="ml-2 md:ml-0 inline-flex items-center py-2 px-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineMenu size="20" />
            </button>
          </div>
          <div
            className={`${isOpenMenu ? "block" : "hidden"
              } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li></li>
              <li>
                <Link
                  href="/"
                  className={`${pathname === "/"
                      ? "text-[#a137df] dark:text-white"
                      : "text-gray-700"
                    } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  <b>Home</b>
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  className={`${pathname === "/products"
                      ? "text-[#a137df] dark:text-white"
                      : "text-gray-700"
                    } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  <b>Explore</b>
                </Link>
              </li>
              <li>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                    <Link
                      href="#"
                      className={`${pathname === "#"
                          ? "text-[#a137df] dark:text-white"
                          : "text-gray-700"
                        } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                      aria-current="page"
                    >
                      <b>Register</b>
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent className="bg-pink-100 bg-opacity-80 box-border h-25 w-35 dark:bg-black/40 dark:bg-opacity-80 dark:text-white/80 shadow-lg rounded-xl border-1 p-4 min-w-sm">
                    <Link
                      target={"_blank"}
                      href="https://platform-test.polygonid.com/claim-link/2ed5b81c-e88e-4fea-843c-06f607b1d94c"
                      className="group display-block p-2 rounded-md hover:bg-pink-200 hover:text-[#a13bf7]"
                    >
                      <Stack direction={"row"} align={"center"}>
                        <Box>
                          <Text className="font-semibold pb-1 transition ease-in-out delay-10 group-hover:pink-400">
                            {"Manufacturer"}
                          </Text>
                        </Box>
                        <Flex className="transition ease-in-out delay-10 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 justify-flex-end flex self-center flex-1">
                          <Icon w={15} h={15} as={ChevronRightIcon} />
                        </Flex>
                      </Stack>
                    </Link>
                    <Link
                      target={"_blank"}
                      href="https://platform-test.polygonid.com/claim-link/12aed2db-ff18-45eb-bd7a-480320f3c6c8"
                      className="group display-block p-2 rounded-md hover:bg-pink-200 hover:text-[#a13bf7]"
                    >
                      <Stack direction={"row"} align={"center"}>
                        <Box>
                          <Text className="font-semibold transition ease-in-out delay-10 group-hover:pink-400">
                            {"Distrubutor"}
                          </Text>
                        </Box>
                        <Flex className="transition ease-in-out delay-10 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 justify-flex-end flex self-center flex-1">
                          <Icon w={15} h={15} as={ChevronRightIcon} />
                        </Flex>
                      </Stack>
                    </Link>
                  </PopoverContent>
                </Popover>
              </li>
              <li>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                    <Link
                      href="#"
                      className={`${pathname === "#"
                          ? "text-[#a137df] dark:text-white"
                          : "text-gray-700"
                        } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                      aria-current="page"
                    >
                      <b>Products</b>
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent className="bg-pink-100 bg-opacity-80 box-border h-25 w-35 dark:bg-black/40 dark:bg-opacity-80 dark:text-white/80 shadow-lg rounded-xl border-1 p-4 min-w-sm">
                    <Link
                      href="/addproduct"
                      className="group display-block p-2 rounded-md hover:bg-pink-200 hover:text-[#a13bf7]"
                    >
                      <Stack direction={"row"} align={"center"}>
                        <Box>
                          <Text className="font-semibold pb-1 transition ease-in-out delay-10 group-hover:pink-400">
                            {"Add Product"}
                          </Text>
                        </Box>
                        <Flex className="transition ease-in-out delay-10 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 justify-flex-end flex self-center flex-1">
                          <Icon w={15} h={15} as={ChevronRightIcon} />
                        </Flex>
                      </Stack>
                    </Link>
                    <Link
                      href="/updateproduct"
                      className="group display-block p-2 rounded-md hover:bg-pink-200 hover:text-[#a13bf7]"
                    >
                      <Stack direction={"row"} align={"center"}>
                        <Box>
                          <Text className="font-semibold pb-1 transition ease-in-out delay-10 group-hover:pink-400">
                            {"Update Status"}
                          </Text>
                        </Box>
                        <Flex className="transition ease-in-out delay-10 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 justify-flex-end flex self-center flex-1">
                          <Icon w={15} h={15} as={ChevronRightIcon} />
                        </Flex>
                      </Stack>
                    </Link>
                  </PopoverContent>
                </Popover>
              </li>
              <li>
                <Link
                  href="/producthistory"
                  className={`${pathname === "/producthistory"
                      ? "text-[#a137df] dark:text-white"
                      : "text-gray-700"
                    } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  <b>Product History</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="z-10 bg-[#008dff] w-9 h-9 fixed bottom-[18px] right-[50px] flex justify-center items-center rounded-full">
        {theme === "dark" ? (
          <BiMoon
            size="25"
            onClick={switchTheme}
            className="text-white hover:cursor-pointer"
          />
        ) : (
          <BiSun
            size="20"
            onClick={switchTheme}
            className="text-white hover:cursor-pointer"
          />
        )}
      </div>
    </>
  );
};

export default Header;
