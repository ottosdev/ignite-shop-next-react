import { styled } from "@stitches/react";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,
  h1: {
    fontSize: "2rem",
    color: "$gray100",
  },

  p: {
    fontSize: "1rem",
    marginTop: "2rem",
    color: "$gray300",
    maxWidth: 568,
    textAlign: "center",
    lineHeight: 1.4
  },

  a: {
    marginTop: "5rem",
    display: "block",
    fontSize: "1.25rem",
    color: "#00875f",
    textDecoration: "none",
    fontWeight: 'bold',

    "&:hover": {
      color: "#00b37e",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  borderRadius: 8,
  padding: "0.25rem",
  background: "linear-gradient(180deg, #1ea483 0%, #7565d4 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "4rem",
  img: {
    objectFit: "cover",
  },
});
