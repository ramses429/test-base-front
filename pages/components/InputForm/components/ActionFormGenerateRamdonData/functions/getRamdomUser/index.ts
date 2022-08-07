import { getUsers } from "../../../../../../api/getUsers";
import { IvaluesInputs } from "../../interfaces";

export async function getRamdomUser(): Promise<IvaluesInputs> {
  const resulRamdomUser = await getUsers();
  const ramdomUser: IvaluesInputs = {
    Name: resulRamdomUser.name.first,
    Age: resulRamdomUser.dob.age,
    Email: resulRamdomUser.email,
    Phone: resulRamdomUser.phone,
  };
  return ramdomUser;
}
