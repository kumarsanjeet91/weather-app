import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./InfoBox.module.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  let RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UkFJTnxlbnwwfHwwfHx8MA%3D%3D";
  let COLD_URL =
    "https://images.unsplash.com/photo-1607857673310-bcb3954b8d41?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENPTER8ZW58MHx8MHx8fDA%3D";
  let HOT_URL =
    "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFNVTnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className={styles.cardContainer}>
      <div className={styles.box}>
        <Card sx={{ minWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <br />
            <br />
            <Typography gutterBottom variant="h5" component="p">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Feels Like : {info.feelsLike}&deg;C</p>
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Min Temperature: {info.tempMin}&deg;C</p>
              <p>Max Temperature: {info.tempMax}&deg;C</p>
              <p>Humidity: {info.humidity}</p>
              <p>Weather: {info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
