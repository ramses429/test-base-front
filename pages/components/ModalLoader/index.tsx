import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { stylesSX } from "./stylesSX";
import { IModalLoader } from "./interface";

export function ModalLoader({ open = false }: IModalLoader) {
  return (
    <Modal open={open}>
      <Box sx={{ ...stylesSX.modalStyle, ...stylesSX.modalPosition }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Loading data please wait...
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <CircularProgress />
        </Typography>
      </Box>
    </Modal>
  );
}
