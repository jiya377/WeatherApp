import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1641970304228-9b10f9747195?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="InfoBox">
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 20
                  ? HOT_URL
                  : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;&nbsp;&nbsp;{
                info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 20
                  ? <SunnyIcon/>
                  : <AcUnitIcon/>
              }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature - {info.temp}&deg;</div>
              <div>Humidity - {info.humidity}</div>
              <div>Min Temp - {info.tempMin}</div>
              <div>Max Temp - {info.tempMax}</div>
              <div>
                The weather can be described as <i>{info.weather} </i>and feels
                like - {info.feelsLike}
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
