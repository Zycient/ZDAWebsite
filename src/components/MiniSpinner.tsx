import { CircularProgress } from "@mui/joy";
import * as React from "react";

type props = {
  theme?: string;
  variant?: string;
};

const MiniSpinner = ({ theme, variant }: props) => {
  const variants = ["info-banner-lg", "info-banner-sm"];
  const colorPaletteRGB = "rgb(151, 116, 239)"; // ? uses main color palette's `500` as RGB
  return (
    <>
      {variant === variants[0] && (
        <CircularProgress
          variant={theme === "dark" ? "plain" : "solid"}
          sx={{
            marginLeft: 1,
            marginTop: "1px",
            "--CircularProgress-size": "15px",
            "--CircularProgress-trackThickness": "2px",
            "--CircularProgress-progressThickness": "2px",
            "--CircularProgress-progressColor": `${colorPaletteRGB}`,
            "--CircularProgress-trackColor": `${
              theme === "dark" ? "rgba(0,0,0,0)" : "rgb(226, 232, 240)"
            }`,
          }}
        />
      )}
      {variant === variants[1] && (
        <CircularProgress
          variant={theme === "dark" ? "plain" : "solid"}
          sx={{
            marginLeft: "2px",
            marginRight: "2px",
            marginTop: "1px",
            "--CircularProgress-size": "12px",
            "--CircularProgress-trackThickness": "2px",
            "--CircularProgress-progressThickness": "2px",
            "--CircularProgress-progressColor": `${colorPaletteRGB}`,
            "--CircularProgress-trackColor": `${
              theme === "dark" ? "rgba(0,0,0,0)" : "rgb(226, 232, 240)"
            }`,
          }}
        />
      )}
      {/* DEFAULT */}
      {!variant && (
        <CircularProgress
          variant={theme === "dark" ? "plain" : "solid"}
          sx={{
            marginLeft: "2px",
            marginRight: "2px",
            "--CircularProgress-size": "14px",
            "--CircularProgress-trackThickness": "2px",
            "--CircularProgress-progressThickness": "2px",
            "--CircularProgress-progressColor": `${colorPaletteRGB}`,
            "--CircularProgress-trackColor": `${
              theme === "dark" ? "rgba(0,0,0,0)" : "rgb(226, 232, 240)"
            }`,
          }}
        />
      )}
    </>
  );
};

export default MiniSpinner;
