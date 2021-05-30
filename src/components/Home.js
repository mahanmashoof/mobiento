import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import useStyles from "./styles";
import Photo from "./photo/index";

function Home() {
  const [freeText, setFreeText] = useState("");
  const [photoColor, setPhotoColor] = useState("original");
  const [outputColor, setOutputColor] = useState("");
  const [photosPerSearch, setPhotosPerSearch] = useState("10");
  const [objArr, setObjArr] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    photoColor === "original" ? setOutputColor("") : setOutputColor(photoColor);
  }, [photoColor]);

  const handleSearch = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?per_page=${photosPerSearch}&query=${freeText}${outputColor}&client_id=Hdb76tDuj5OK_dKmow8ptvHDTg_VhuCY0o0-OFnrnbY`
      )
      .then((res) => {
        setObjArr(res.data.results);
      });
  };

  const handleFreeText = (e) => {
    setFreeText(e.target.value);
  };

  const handlePhotoColor = (e) => {
    setPhotoColor(e.target.value);
  };

  const handlePhotosPerSearch = (e) => {
    setPhotosPerSearch(e.target.value);
  };

  return (
    <Container>
      <h1 className={classes.heading}>
        Search for photos by writing any topic
      </h1>
      <Box className={classes.form}>
        <form autoComplete="off">
          <TextField
            id="standard-basic"
            label="What are you looking for?"
            value={freeText}
            onChange={handleFreeText}
          />
        </form>
        <FormControl variant="outlined" className={classes.photoForm}>
          <InputLabel>Color</InputLabel>
          <Select label="Color" value={photoColor} onChange={handlePhotoColor}>
            <MenuItem value="original">Original Colors</MenuItem>
            <MenuItem value="&color=black_and_white">Black & White</MenuItem>
            <MenuItem value="&color=red">Red</MenuItem>
            <MenuItem value="&color=green">Green</MenuItem>
            <MenuItem value="&color=blue">Blue</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.photoForm}>
          <InputLabel>Photos per search</InputLabel>
          <Select
            label="Photos per search"
            value={photosPerSearch}
            onChange={handlePhotosPerSearch}
          >
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="20">20</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container justify="flex-end">
        <Button variant={"contained"} onClick={handleSearch}>
          Search
        </Button>
      </Grid>
      <Grid className={classes.photoGrid}>
        {objArr.map((obj, i) => (
          <a key={i} href={obj.links.download} target="_blank" rel="noreferrer">
            <Photo src={obj.urls.small} size={`${obj.width} x ${obj.height}`}/>
          </a>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
