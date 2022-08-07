import { useState } from "react";
import { FormBase } from "../FormBase";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { initialStateForm } from "./initialState";
import { IvaluesInputs, IvaluesInputsType } from "./interfaces";
import { getRamdomUser } from "./functions/getRamdomUser";

export function ActionFormGenerateRamdonData() {
  const [ramdomData, setRamdomData] = useState<IvaluesInputs>(initialStateForm);
  async function setRamdomUserButtonCall() {
    const ramdomUser = await getRamdomUser();
    setRamdomData(ramdomUser);
  }
  function updateIndividualField(
    name: IvaluesInputsType,
    value: number | string
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setRamdomData((prevRamdomUser: any) => {
      prevRamdomUser[name] = value;
      return { ...prevRamdomUser };
    });
  }
  return (
    <>
      <FormBase
        valuesInputs={ramdomData}
        updateIndividualField={updateIndividualField}
      />
      <Box sx={{ pt: 5 }}>
        <Button onClick={setRamdomUserButtonCall} variant="contained">
          Create random data
        </Button>
      </Box>
    </>
  );
}
