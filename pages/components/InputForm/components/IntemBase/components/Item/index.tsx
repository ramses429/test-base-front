import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { stylesSX } from "./stylesSX";
import { Iitem } from "./interfaces";
import { IvaluesInputsType } from "../../interfaces";

export function Item({ input, valuesInputs, updateIndividualField }: Iitem) {
  return (
    <>
      <Box
        sx={{ ...stylesSX.itemBase0Separation, ...stylesSX.itemBase0Color }}
        key={input}
      >
        <TextField
          sx={stylesSX.intemWidth}
          id={`InputBase0-${input}`}
          label={input}
          variant="standard"
          value={valuesInputs[input] || ""}
          name={input}
          onChange={(e) => {
            updateIndividualField(
              e.target.name as IvaluesInputsType,
              e.target.value as string | number
            );
          }}
        />
      </Box>
    </>
  );
}
