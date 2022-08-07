export interface IvaluesInputs {
  Name: string;
  Age: number;
  Email: string;
  Phone: string;
}

export type IvaluesInputsType = "Name" | "Age" | "Email" | "Phone";

export interface IActionFormGenerateRamdonDataTemplate {
  ramdomData: IvaluesInputs;
  updateIndividualField: (
    name: IvaluesInputsType,
    value: number | string
  ) => void;
  setRamdomUserButtonCall: () => Promise<void>;
  openModalLoader: boolean;
}
