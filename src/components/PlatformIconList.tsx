import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGame";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="grey.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;

/**
 What does { [key: string]: IconType } mean?

It's saying:
"This is an object where:
    - every key is a string -> "[key: string]""
    - every value is of type IconType -> ": IconType"



Why use [key: string]?
Because we don't know the keys in advance. The keys are dynamic and depend on the data we get from the API.
We look up the keys using the brackets notation: iconMap[platform.slug].
 */
