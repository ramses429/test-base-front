import { InputBaseO } from "../IntemBase/ItemInput";
import { inputsNames } from "./inputsNames";
import { Box } from "@mui/material";
import { stylesSX } from "./styleSX";
import { IFormBase } from "./interfaces";

export function FormBase({ valuesInputs, updateIndividualField }: IFormBase) {
  return (
    <Box sx={{ ...stylesSX.formBaseColor, ...stylesSX.formBaseForm }}>
      <InputBaseO
        valuesInputs={valuesInputs}
        inputsNames={inputsNames}
        updateIndividualField={updateIndividualField}
      />
    </Box>
  );
}
