import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


type LangToggleProps = {
  lang: string;
  setLang: Function;
 
};

const LangToggle: React.FC<LangToggleProps> = ({lang,setLang}) =>  {
  

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setLang(newAlignment);
  };


  console.log({lang})

  return (
    <ToggleButtonGroup
      color="primary"
      value={lang}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className='mb-5 ml-auto'
    >
      <ToggleButton value="en">English</ToggleButton>
      <ToggleButton value="ar">Arabic</ToggleButton>
    </ToggleButtonGroup>
  );
}


export default LangToggle
