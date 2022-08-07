import { useState } from "react";
import { initialStateForm } from "./initialState";
import { IvaluesInputs, IvaluesInputsType } from "./interfaces";
import { getRamdomUser } from "./functions/getRamdomUser";
import { ActionFormGenerateRamdonDataTemplate } from "./index.template";

export function ActionFormGenerateRamdonData() {
  const [ramdomData, setRamdomData] = useState<IvaluesInputs>(initialStateForm);
  const [loader, setLader] = useState<boolean>(false);
  async function setRamdomUserButtonCall() {
    setLader(true);
    const ramdomUser = await getRamdomUser();
    setRamdomData(ramdomUser);
    setLader(false);
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
    <ActionFormGenerateRamdonDataTemplate
      ramdomData={ramdomData}
      updateIndividualField={updateIndividualField}
      setRamdomUserButtonCall={setRamdomUserButtonCall}
      openModalLoader={loader}
    />
  );
}
