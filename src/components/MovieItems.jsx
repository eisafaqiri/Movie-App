/* eslint-disable react/prop-types */
import {
  Box,
  Card, CardContent, CardHeader, CardMedia, Grid, Typography,
} from "@mui/material";
import React from "react";

function MovieItems({
  search, totalResults, colors,
}) {
  return (
    <Box sx={{
      flexGrow: 1, ml: 2, mr: 2, mt: 3,
    }}
    >
      <Typography variant="h3" mb="1rem">
        Total Results:
        {" "}
        {totalResults}
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 3 }}
        columns={{
          xs: 12, sm: 12, md: 12, lg: 12, xl: 12,
        }}
      >

        {search && search.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.imdbID}>
            <Card
              sx={{
                maxWidth: 345, height: "92%", mb: 3, backgroundColor: colors.primary[500],
              }}
              key={movie.Title}
            >
              <CardHeader
                action={(
                  <Typography variant="subtitle1" color={colors.greenAccent[400]} ml="1px">
                    {movie.Year}
                  </Typography>
                )}
                title={
                  movie.Title
                }
                subheader={
                  movie.Released
                }
              />
              <CardMedia
                sx={{ objectFit: "scale-down" }}
                component="img"
                loading="lazy"
                height={200}
                image={movie.Poster}
                alt={movie.Title}
              />
              <CardContent>
                <Typography variant="body1" color={colors.grey[200]}>
                  Type:
                  {" "}
                  {movie.Type}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MovieItems;