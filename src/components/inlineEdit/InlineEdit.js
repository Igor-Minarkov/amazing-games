import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "./InlineEdit.css";

const InlineEdit = ({ value, setValue, id, customData, setter }) => {
  const [editingValue, setEditingValue] = useState(value);
  const { edit } = useContext(AppContext);

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
    } else {
      setValue(event.target.value);
      edit(event.target.value, id, customData, setter);
    }
  };

  return (
    <input
      className="edit-input"
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

export default InlineEdit;
