import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItem, setNewName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error("Please add a value");
      return;
    }
    addItem(newItem);
    setNewName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
