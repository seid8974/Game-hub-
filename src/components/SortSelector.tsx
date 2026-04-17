

import { Button, Menu } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

interface Props {
  onSelectSortOrder: ( sortOrder:string ) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
const sortOrders = [
  { value:"", Label: "Relevance" },
  { value:"-added", Label: "Date added" },
  { value:"name", Label: "Name" },
  { value:"-released", Label: "Release Date" },
  { value:"metacritic", Label: "Popularity" },
  { value:"-rating", Label: "Average Rating" },
]

const currentSortOrder = sortOrders.find(order => order.value === sortOrder)?.Label || "Relevance";

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="ghost"
          size="sm"
          gap="1"
          bg="gray.700"
          _hover={{ bg: "gray.600" }}
        >
         Order By: {currentSortOrder} <ChevronDown size={16} />
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content
          bg="gray.800"
          border="1px solid"
          borderColor="gray.700"
          borderRadius="md"
          p="1"
          minW="250px"
        >

          { sortOrders.map((order) => <Menu.Item onClick={ () => onSelectSortOrder(order.value) } value={order.value} key={order.value}   _hover={{ bg: "gray.700" }}
  _active={{ bg: "gray.600" }}> {order.Label} </Menu.Item> )}
          
         
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
