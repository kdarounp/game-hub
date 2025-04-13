import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By
      </MenuButton>
      <MenuList>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="release-date">Release Date</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
