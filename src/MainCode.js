import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Detail from "./CardDetail";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CheckboxLabels from "./CheckBox";

const MainCode = () => {
  const [filter, setfilter] = useState("");
  const [Filters, setFilters] = useState({
    Detail: []
})

  const searchText = (e) => {
    setfilter(e.target.value);
  };
  let dataSearch = Detail.cardDetail.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const handleFilters = (filters, category) => {

    const newFilters = { ...Filters }

    newFilters[category] = filters

    // if (category === "Detail") {
    //     let priceValues = handlePrice(filters)
    //     newFilters[category] = priceValues

    // }

    console.log(newFilters)

    // showFilteredResults(newFilters)
    setFilters(newFilters)
}

  return (
    <>
      {/* search bar */}
      <TextField
        style={{ margin: "20px" }}
        label="Search"
        value={filter}
        onChange={searchText.bind(this)}
      />

      {/* checkbox */}
      <CheckboxLabels
                        handleFilters={filters => handleFilters(filters, "Detail")}/>

      {/* Card */}
      {dataSearch.map((item, index) => {
        return (
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={2}>
                <Item>
                  <Card>
                    <CardMedia
                      component="img"
                    //   height="140"
                      src={item.img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Item>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </>
  );
};

export default MainCode;
