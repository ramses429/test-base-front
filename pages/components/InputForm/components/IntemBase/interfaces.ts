export interface IvaluesInputs {
  Name: string;
  Age: number;
  Email: string;
  Phone: string;
}

export type IvaluesInputsType = "Name" | "Age" | "Email" | "Phone";

export interface IinputBase {
  inputsNames: IvaluesInputsType[];
  valuesInputs: IvaluesInputs;
  updateIndividualField: (
    name: IvaluesInputsType,
    value: number | string
  ) => void;
}
