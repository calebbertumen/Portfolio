import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "../assets/Grad Pic.png";
import React_Image from "../assets/Reactlogo.png";
import CSS_Image from "../assets/csslogo.png";
import HTML_Image from "../assets/htmllogo.png";
import GIT_Image from "../assets/gitlogo.png";
import JS_Image from "../assets/jslogo.png";
import NodeJS_Image from "../assets/nodejslogo.png";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Box sx={{ p: 3 }}>
          <Typography align="center" variant="h3" color="primary.main">
            <Box sx={{ fontWeight: "bold", m: 1 }}>About</Box>
          </Typography>

          {/* Picture and About Paragraph */}
          <Stack
            justifyContent="center"
            alignItems="center"
            display="flex"
            sx={{ py: 3 }}
          >
            <img src={Image} width={209} height={313} alt="" />
            <Typography align="center" variant="subtitle1" gutterBottom>
              <Box sx={{ px: 50, py: 1, fontWeight: "medium", m: 1 }}>
                A full stack developer having experience working with React,
                MUI, Node.Js, and more. Being able to be creative and loving the
                aspect of building motivates me to keep learning and becoming a
                better web delveoper.
              </Box>
            </Typography>

            {/* Experience Section (Images)*/}
            <Grid
              container
              columnSpacing={2}
              justifyContent="center"
              spacing={1}
            >
              <Grid item>
                <Stack sx={{ p: 1 }}>
                  <img src={React_Image} width={80} height={80} alt="" />
                  <Typography align="center" variant="subtitle2" gutterBottom>
                    REACT
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack sx={{ p: 1 }}>
                  <img src={CSS_Image} width={80} height={80} alt="" />
                  <Typography align="center" variant="subtitle2" gutterBottom>
                    CSS
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack sx={{ p: 1 }}>
                  <img src={HTML_Image} width={80} height={80} alt="" />
                  <Typography align="center" variant="subtitle2" gutterBottom>
                    HTML
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack sx={{ p: 1 }}>
                  <img src={JS_Image} width={80} height={80} alt="" />
                  <Typography align="center" variant="subtitle2" gutterBottom>
                    JavaScript
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack sx={{ p: 1 }}>
                  <img src={NodeJS_Image} width={80} height={80} alt="" />
                  <Typography align="center" variant="subtitle2" gutterBottom>
                    NodeJS
                  </Typography>
                </Stack>
              </Grid>

              <Grid item>
                <Stack sx={{ p: 1 }}>
                  <img src={GIT_Image} width={80} height={80} alt="" />
                  <Typography align="center" variant="subtitle2" gutterBottom>
                    GIT
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </motion.div>
    </>
  );
}

export default About;
