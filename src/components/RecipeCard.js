import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AccessTime } from "@mui/icons-material";
import Button from '@mui/material/Button';

const RecipeCard = (props) => {
  return <Grid item xs={3}>
    <Paper elevation={3}>
      <img
        src="https://edamam-product-images.s3.amazonaws.com/web-img/284/2849b3eb3b46aa0e682572d48f86d487.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIEGPtKvFlwZPrzTQq0djVaTEwc5HC8PzahnU4sy68HsMAiAUP106TqliSpbBC4mtVsQEDGXcFvhLhgyIOouGEeFYYSrSBAhJEAAaDDE4NzAxNzE1MDk4NiIMa3YioAOxZ8gMhffOKq8E5Gal%2FCRIrb6mGvY1R5Sh1BswPYI8yGmY7GdnksKhwuDdBLo16zyTTgCwNXG2q0NQHud%2B63vleiRORFC7jhL0s9RtoWBfvkhjstxZ3QrUz3MTFFpT3POj9wSY5YkFqAx2NC3K3T8Q8BoF8gbyTsQUcLmST3t0OObOcRbHNimcUxjek%2BzdVo7cFzxmUxv%2FAalqC2NKCh9AjMtUu2MYAFMpHVFV1b8tTKZaL1z67FuBoUiudmGZZiO1iEua98w6hQdI1ZoLePYUZmyKZGkoJawzsgHMO%2BTiG1b%2B4SoL8bAzBH%2FzGuSNW23so%2Fhh2WDGVrybMXyw0zgmC76DO73btHdGUV0ZOIDiK05Nk8EEHybifw52sZRW%2F8AX50E2QmeCghm0Z84LQpUmkuVudENxDclF5c8gqHyEuyqvlYlF0hzo4tAuGfjOOGltC28TfHccgyFb2hIGByv731Z4pmcXXJCCQZodvVyp6gtCWRbKRKNIIFcCMk3Gt3p1fZhJQJKQuPHFM0YH7Bj%2FFzlBKw4pa5IfYTMPjgdKJKwYMq54GtBmkTJMmmqZrvgW9vHhM5VKMl%2BZ530wX2r8cuHW2H32miIWUg83PtJ9r1HeS7yuCaTQ9LheO6ZIlhkdm5oUXASkXnjARFxqAO9%2BPOCKK8NglMGe5uKplzzzWHav0dxeYiQz3e9CRe7M%2FrzooC9iqzDlLmu9GAuqqe8lzPXKOgWGAlwzPNw4ELvSCleOXq2SYP2yvzD0%2F7%2BTBjqqAZ9Q1M7%2BdPPikzsBaSLcEM0%2F1ZyBZ3%2FPs5N5iRlUvmXzBRg%2FeJffUNyZ45lDEEuIv%2Bcn2JxsCprdGT0jLFvxrX%2B580binOoNbks5IJMz%2FClX2o2XNlNvfC01kI74rka%2FG6d8MMl%2BWWSkSr37kpv7m8YdMDDb%2BTSsfANh%2F29UGkbk7u%2BAf7XSoJl6cRa7UNuGOKs%2BGZCUip9V%2By9kNjGm0NSb%2FgW3GdC5e2Dr&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220502T162441Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFC4KEILHB%2F20220502%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7f6cdca3a1eaf45c9891acef841d92b25633b94d3e68f2251e1a382f4d6d52aa"
        alt="..."
        className="img"
      />
      <Box paddingX={1}>
        <Typography variant="subtitle1" component="h2">
          NOT Pizza Dough
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <AccessTime sx={{ width: 12.5 }} />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            420 Minutes
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Typography variant="body2" component="p" marginLeft={0.5}>
            Recipe Tags or something will go here I guess
          </Typography>

        </Box>
        <Button varient="contained" onClick={() => { alert('recipe clicked'); }}>Go To Recipe!</Button>
      </Box>
    </Paper>
  </Grid>
};

export default RecipeCard;