import { IvaluesInputsType, IvaluesInputs } from "../../interfaces";

export interface Iitem {
  input: IvaluesInputsType;
  valuesInputs: IvaluesInputs;
  updateIndividualField: (
    name: IvaluesInputsType,
    value: number | string
  ) => void;
}
