import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function PoltiqueSec() {
  return (
    <div>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    </div>
  );
}

export default PoltiqueSec;
