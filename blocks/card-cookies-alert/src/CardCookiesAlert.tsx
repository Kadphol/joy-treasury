import React from "react";
import { Alert, IconButton, SvgIcon } from "@mui/joy";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function CardCookiesAlert() {
  return (
    <Card
      variant="plain"
      sx={{
        borderRadius: "xl",
        boxShadow: "lg",
        padding: "2rem",
      }}
      size="sm"
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <Alert
          sx={{ padding: "0" }}
          variant="plain"
          endDecorator={
            <IconButton variant="plain" sx={{ borderRadius: "xl" }}>
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </SvgIcon>
            </IconButton>
          }
        >
          <Typography level="title-md">We use cookies!</Typography>
        </Alert>
        <Typography color="neutral" level="body-sm">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          gap: 1.5,
          flexDirection: "column",
          justifyItems: "center",
        }}
      >
        <Button variant="soft" size="lg" sx={{ width: "100%" }}>
          Configure cookies
        </Button>
        <Button variant="solid" size="lg" sx={{ width: "100%" }}>
          Confirm
        </Button>
      </CardActions>
    </Card>
  );
}
