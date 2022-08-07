import type { NextPage } from "next";
import { FormCompleteActions } from "./components/InputForm";
import { Box } from "@mui/material";
import { stylesSX } from "./stylesSX";
import { ModalLoader } from "./components/ModalLoader";

const Home: NextPage = () => {
  return (
    <Box sx={stylesSX.homePageContainerPosition}>
      <FormCompleteActions />
    </Box>
  );
};

export default Home;
