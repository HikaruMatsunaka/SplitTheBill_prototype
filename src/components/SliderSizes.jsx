import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useState } from "react";

export default function SliderSizes() {
  const Input = styled(MuiInput)`
    width: 42px;
  `;

  const [value, setValue] = useState([0, -2400]);
  const [valueOther, setValueOther] = useState([0, 1200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const calcu = (2400 + value[0]) * -1;
  };

  const handleChangeOther = (event, newValue) => {
    setValueOther(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  return (
    <>
      <Box sx={{ width: 500 }}>
        <Typography id="input-slider" gutterBottom>
          Volume
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={value}
              onChange={handleChange}
              aria-labelledby="input-slider"
              min={-5000}
              max={5000}
              aria-label="Small"
              valueLabelDisplay="auto"
              step={10}
            />
          </Grid>
          <Grid item>
            <Input
              sx={{ width: 60 }}
              //valueは、0以上になったら、2番目の要素を出すようにしたい
              value={value[0] >= 0 ? value[1] : value[0]}
              size="small"
              onChange={handleInputChange}
              inputProps={{
                step: 1,
                min: -5000,
                max: 5000,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: 500 }}>
        <Typography id="input-slider" gutterBottom>
          Volume
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={valueOther}
              onChange={handleChangeOther}
              aria-labelledby="input-slider"
              min={-5000}
              max={5000}
              aria-label="Small"
              valueLabelDisplay="auto"
              step={10}
            />
          </Grid>
          <Grid item>
            <Input
              sx={{ width: 60 }}
              //valueは、0以上になったら、2番目の要素を出すようにしたい
              value={valueOther[0] >= 0 ? valueOther[1] : valueOther[0]}
              size="small"
              onChange={handleInputChange}
              inputProps={{
                step: 1,
                min: -5000,
                max: 5000,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
