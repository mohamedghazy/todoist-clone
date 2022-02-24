import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function ControlledSwitches({darkmode,setDarkmode}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(
      event.target.checked,
      setDarkmode(!darkmode)
      );
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
