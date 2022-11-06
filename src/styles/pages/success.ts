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
    lineHeight: 1.4,
  },

  a: {
    marginTop: "5rem",
    display: "block",
    fontSize: "1.25rem",
    color: "#00875f",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "#00b37e",
    },
  },
});

export const ImagesContainer = styled("section", {
  display: "flex",
  alignItems: "center",
  marginBottom: "3rem",

  "div + div": {
    marginLeft: "calc(-140px / 2)",
  },
});

export const ImageContainer = styled("div", {
  width: 140,
  height: 140,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
  borderRadius: "50%",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
