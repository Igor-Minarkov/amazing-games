import React, { Fragment, useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import InlineEdit from "../../inlineEdit/InlineEdit";
import Modal from "../../modal/Modal";
import "./DashboardDetails.css";

const DashboardDetails = ({ name, id, customData, setter }) => {
  const { deleteData } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();

  return (
    <Fragment>
      <span className="basic-flex presenter-wrapper">
        <InlineEdit
          value={name}
          setValue={setValue}
          id={id}
          customData={customData}
          setter={setter}
        />
        <button onClick={() => setShow(true)}>Delete</button>
      </span>
      <Modal show={show} onClose={() => setShow(false)}>
        <h2>
          This action will delete the target. If you want to proceed, click yes
        </h2>
        <button onClick={() => deleteData(id, customData, setter)}>
          Yes, please
        </button>
      </Modal>
    </Fragment>
  );
};

export default DashboardDetails;
