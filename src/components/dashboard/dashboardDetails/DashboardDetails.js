import React, { Fragment, useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import InlineEdit from "../../inlineEdit/InlineEdit";
import Modal from "../../modal/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const DashboardDetails = ({ name, id, customData, setter }) => {
  const { deleteData } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();

  return (
    <Fragment>
      <Box>
        <InlineEdit
          value={name}
          setValue={setValue}
          id={id}
          customData={customData}
          setter={setter}
        />
        <Button
          sx={{ m: 1 }}
          variant="contained"
          size="medium"
          onClick={() => setShow(true)}
        >
          Delete
        </Button>
      </Box>
      <Modal show={show} onClose={() => setShow(false)}>
        <h2>
          This action will delete the target. If you want to proceed, click yes
        </h2>
        <button
          onClick={() => deleteData(id, customData, setter)}
          style={{ background: "black", color: "#F8F8FF" }}
        >
          Yes, please
        </button>
      </Modal>
    </Fragment>
  );
};

export default DashboardDetails;
