import React from "react";
import { Button } from "@material-ui/core";
import axios from 'axios';

function Home() {
  const handleSearch = () => {
    axios
      .get(
        'https://api.unsplash.com/search/photos?per_page=10&query=sweden&client_id=Hdb76tDuj5OK_dKmow8ptvHDTg_VhuCY0o0-OFnrnbY'
      )
      .then((data) => {
        console.log(data.data);
      });
  };

  return (
    <div>
      <h1>Homepage</h1>
      <Button variant={"contained"} onClick={handleSearch}></Button>
    </div>
  );
}

export default Home;
