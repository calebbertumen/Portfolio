import { Box, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

//images
import PaymentsCover from "../assets/Payments Website Cover.png";
import IllDecideCover from "../assets/Ill Decide Cover.png";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function Projects() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {/* Projects TITLE */}
        <Box sx={{ p: 3 }}>
          <Typography align="center" variant="h3" color="primary.main">
            <Box sx={{ fontWeight: "bold", m: 1 }}>Projects</Box>
          </Typography>
        </Box>
      </motion.div>

      {/* Project #1 */}
      <Box sx={{ width: "50%" }}>
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
            <Box
              bgcolor={"#333333"}
              sx={{ p: 1, display: "flex", justifyContent: "center" }}
            >
              <img src={PaymentsCover} width="90%" alt="" />
            </Box>
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Payments Website
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Typography gutterBottom>About Parapgraph</Typography>
            </DialogContent>
            <DialogActions>
              <Link href="https://github.com/calebbertumen/PaymentsWebApp">
                <Button autoFocus onClick={handleClose}>
                  <Typography align="center">Github Repo</Typography>
                </Button>
              </Link>
            </DialogActions>
          </BootstrapDialog>
        </React.Fragment>
      </Box>

      {/* Project #2 */}
      <Box sx={{ width: "50%" }}>
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
            <Box
              bgcolor={"#333333"}
              sx={{ p: 1, display: "flex", justifyContent: "center" }}
            >
              <img src={IllDecideCover} width="90%" alt="" />
            </Box>
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              "I'll Decide" Restaurant Generator
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Typography gutterBottom>About Parapgraph</Typography>
            </DialogContent>
            <DialogActions>
              <Link href="https://github.com/calebbertumen/Ill-Decide">
                <Button autoFocus onClick={handleClose}>
                  <Typography align="center">Github Repo</Typography>
                </Button>
              </Link>
            </DialogActions>
          </BootstrapDialog>
        </React.Fragment>
      </Box>
    </>
  );
}

export default Projects;
