import { IinputBase, IvaluesInputsType } from "./interfaces";
import { Item } from "./components/Item";

export function InputBaseO({
  inputsNames,
  valuesInputs,
  updateIndividualField,
}: IinputBase) {
  return (
    <>
      {inputsNames.map((input: IvaluesInputsType) => {
        return (
          <Item
            key={input}
            valuesInputs={valuesInputs}
            input={input}
            updateIndividualField={updateIndividualField}
          />
        );
      })}
    </>
  );
}
