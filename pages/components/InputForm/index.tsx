import { Box } from "@mui/system";
import * as React from "react";
import { stylesSX } from "../../stylesSX";
import { ActionFormGenerateRamdonData } from "./components/ActionFormGenerateRamdonData";

export function FormCompleteActions() {
  return (
    <Box sx={stylesSX.homePageContainerPosition}>
      <ActionFormGenerateRamdonData />
    </Box>
  );
}
