import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGame from "../hooks/useGame";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          ref.current.value = "";
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games... "
          variant="filled"
          ref={ref}
          sx={{
            "::placeholder": {
              fontStyle: "italic",
              fontWeight: "bold",
              color: "gray.500",
              fontSize: "sm",
            },
          }}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
