import { Input, Box } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) {
          onSearch(inputRef.current.value);
        }
      }}
    >
      <Box position="relative" w="100%">
        
        {/* ICON */}
        <Box
          position="absolute"
          left="12px"
          top="50%"
          transform="translateY(-50%)"
          pointerEvents="none"
          zIndex={2}
          color="gray.400"
        >
          <Search size={20} />
        </Box>

        {/* INPUT */}
        <Input
          ref={inputRef}
          placeholder="Search games..."
          borderRadius={20}
          variant="subtle"
          pl="40px"
        />
      </Box>
    </form>
  );
};

export default SearchInput;

// import { Input, InputGroup, InputElement } from "@chakra-ui/react";
// import { Search } from "lucide-react";
// import React, { useRef } from "react";

// interface Props {
//     onSearch: (searchText: string) => void;
// }

// const SearchInput = ({ onSearch }: Props) => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   return (
//     <form onSubmit={(event) => {
//         event.preventDefault();
//         if (inputRef.current) {
//             onSearch(inputRef.current.value);
//         }
//     }}>
//       <InputGroup>
//         <React.Fragment>
//           <InputElement placement="start" pointerEvents="none">
//             {/* 🔍 */}
//             <Search size={23} />
//           </InputElement>
//           <Input
//             px={12}
//             py={6}
//             borderRadius={20}
//             placeholder="Search games..."
//             variant="subtle"
//           />
//         </React.Fragment>
//       </InputGroup>
//     </form>
//   );
// };

// export default SearchInput;
