import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // use a map to get the emoji
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };

  return (
    <Image
      {...emojiMap[rating]}
      boxSize="25px"
      marginTop={1}
      marginLeft={1}
      objectFit="cover"
      fallbackSrc="https://via.placeholder.com/25"
      borderRadius="50%"
      border="1px solid white"
      backgroundColor="white"
      padding="2px"
      boxShadow="0 0 5px rgba(0,0,0,0.5)"
    />
  );
};

export default Emoji;
