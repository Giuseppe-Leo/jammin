import React from "react";
import "../styles/Footer.css";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleSharpIcon from "@mui/icons-material/ShuffleSharp";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
        className="footer_albumLogo"
         src="" alt="" />
        <div className="footer__songInfo">
          {/*SONG LABLED TO BE DISPLAYED*/}
        </div>
      </div>
      <div className="footer__center">
        <ShuffleSharpIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatRoundedIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
