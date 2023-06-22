import "../App.css";
import { Dialog } from "@mui/material";
//import { exit } from '@tauri-apps/api/process';


const ClosePopup = ({ open, close }) => {
  const question = "Yazılımı Kapatmak İstediğinize\n Emin Misiniz ?";
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="logoutContainer">
        <div className="question">
          <p>{question}</p>
        </div>
        <div className="logoutButtons">
          <button
            className="evetBtn"
          //onClick={async () => await exit(1)}
          >
            EVET
          </button>
          <button
            className="hayırBtn"
            onClick={() => {
              close();
            }}
          >
            HAYIR
          </button>
        </div>
      </div>
    </Dialog >
  );
};
export default ClosePopup;
