import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 85 ? "green" : score > 70 ? "yellow" : "";

  return (
    <Badge colorPalette={color} paddingX={3} fontSize="14px" borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
