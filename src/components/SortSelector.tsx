

import { Button, Menu } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

const SortSelector = () => {
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
         Order By: Relevance <ChevronDown size={16} />
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
          <Menu.Item value="relevance">Relevance</Menu.Item>
          <Menu.Item value="date-added">Date added</Menu.Item>
          <Menu.Item value="name">Name</Menu.Item>
          <Menu.Item value="release-date">Release Date</Menu.Item>
          <Menu.Item value="popularity">Popularity</Menu.Item>
          <Menu.Item value="average-rating">Average Rating</Menu.Item>
         
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
