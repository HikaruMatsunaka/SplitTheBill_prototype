import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Chip from "@mui/material/Chip";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ef5350"
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#4caf50"
    }
  }
});

export default function SliderSample() {
  const Input = styled(MuiInput)`
    width: 42px;
  `;

  //ボタンの判定
  const [expanded, setExpanded] = useState(false);

  //特定のユーザー
  const [value, setValue] = useState(2000);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    //　スライダーが動いた時に、他のユーザーも動くように設定する
    setValueOther(-1 * newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "0" : Number(event.target.value));
    setValueOther(-1 * Number(event.target.value));
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 5000) {
      setValue(5000);
    }
  };

  //他のユーザー
  const [valueOther, setValueOther] = useState(-1 * value);
  const handleChangeOther = (event, newValue) => {
    setValueOther(newValue);
    setValue(-1 * newValue);
    setExpanded(true);
    console.log(expanded);
  };
  const handleInputChangeOther = (event) => {
    setValueOther(event.target.value === "" ? "0" : Number(event.target.value));
    setValue(-1 * Number(event.target.value));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 400, p: 2, m: 3 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <CardHeader
                sx={{ p: 1 }}
                avatar={<Avatar alt="M" src="/static/images/avatar/1.jpg" />}
                title="まつなか"
              />
              <Chip
                label="あなた"
                color="secondary"
                variant="outlined"
                size="small"
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Chip
                  label={`-${2000 - value}`}
                  color="primary"
                  variant="filled"
                  size="small"
                />
              </Collapse>
              <Input
                sx={{ width: 60 }}
                //valueは、0以上になったら、2番目の要素を出すようにしたい
                value={value}
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: -5000,
                  max: 5000,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </Stack>
          </Stack>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="input-slider"
                min={0}
                max={5000}
                aria-label="Small"
                valueLabelDisplay="auto"
                step={10}
                color="secondary"
              />
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ maxWidth: 400, p: 2, m: 3 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <CardHeader
              sx={{ p: 1 }}
              avatar={<Avatar alt="N" src="/static/images/avatar/1.jpg" />}
              title="Nishiki"
            />

            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Chip
                  label={`+${2000 - value}`}
                  color="primary"
                  variant="filled"
                  size="small"
                />
              </Collapse>
              <Input
                sx={{ width: 60 }}
                //valueは、0以上になったら、2番目の要素を出すようにしたい
                value={valueOther}
                size="small"
                onChange={handleInputChangeOther}
                inputProps={{
                  step: 1,
                  min: -5000,
                  max: 5000,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </Stack>
          </Stack>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Slider
                track="inverted"
                value={valueOther}
                onChange={handleChangeOther}
                aria-labelledby="input-slider"
                min={-5000}
                max={0}
                aria-label="Small"
                valueLabelDisplay="auto"
                step={10}
                color="primary"
              />
            </Grid>
          </Grid>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Button
                variant="contained"
                startIcon={<CurrencyExchangeIcon />}
                sx={{ width: 240, padding: 1, margin: 1 }}
                color="secondary"
              >
                渡す
              </Button>
              <Button
                variant="outlined"
                sx={{ width: 240, padding: 1, margin: 1 }}
                color="secondary"
              >
                キャンセル
              </Button>
            </Stack>
          </Collapse>
        </Card>
      </ThemeProvider>
    </>
  );
}
