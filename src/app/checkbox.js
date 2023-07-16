import { useState } from "react";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
  );
}