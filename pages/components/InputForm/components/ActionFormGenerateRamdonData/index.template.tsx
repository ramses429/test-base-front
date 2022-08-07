import { FormBase } from "../FormBase";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { ModalLoader } from "../../../ModalLoader";
import { IActionFormGenerateRamdonDataTemplate } from "./interfaces";

export function ActionFormGenerateRamdonDataTemplate({
  ramdomData,
  updateIndividualField,
  setRamdomUserButtonCall,
  openModalLoader,
}: IActionFormGenerateRamdonDataTemplate) {
  return (
    <>
      {" "}
      <FormBase
        valuesInputs={ramdomData}
        updateIndividualField={updateIndividualField}
      />
      <Box sx={{ pt: 5 }}>
        <Button onClick={setRamdomUserButtonCall} variant="contained">
          Create random data
        </Button>
      </Box>
      <ModalLoader open={openModalLoader} />
    </>
  );
}
