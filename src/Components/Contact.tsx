import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";

import Email_Image from "../assets/emaillogo.png";
import LinkedIn_Image from "../assets/linkedinlogo.png";
import GitHub_Image from "../assets/githublogo.png";
import { motion } from "framer-motion";

function Contact() {
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
            <Box sx={{ fontWeight: "bold", m: 1 }}>Contact</Box>
          </Typography>

          {/* Contact Paragraph */}
          <Stack justifyContent="center" alignItems="center" display="flex">
            <Box sx={{ px: "25%", py: 3 }}>
              <Typography align="center" variant="subtitle1">
                Thank you for taking the time out to check out my portfolio! If
                you want to contact me, please use any of the following links
                below and I will get back to you ASAP.
              </Typography>
            </Box>

            {/* Links to contact pages */}
            <Grid
              container
              columnSpacing={5}
              justifyContent="center"
              sx={{ py: 1 }}
            >
              <Grid item>
                <Stack>
                  <IconButton
                    aria-label="Email"
                    target="_blank"
                    href="mailto:calebbertumen99@gmail.com"
                  >
                    <img src={Email_Image} width={100} height={100} alt="" />
                  </IconButton>
                  <Typography align="center" variant="subtitle2" gutterBottom>
                    Email
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack>
                  <IconButton
                    aria-label="LinkedIn"
                    target="_blank"
                    href="https://www.linkedin.com/in/calebbertumen/"
                  >
                    <img src={LinkedIn_Image} width={100} height={100} alt="" />
                  </IconButton>
                  <Typography align="center" variant="subtitle2" gutterBottom>
                    LinkedIn
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack>
                  <IconButton
                    aria-label="GitHub"
                    target="_blank"
                    href="https://github.com/calebbertumen"
                  >
                    <img src={GitHub_Image} width={100} height={100} alt="" />
                  </IconButton>
                  <Typography align="center" variant="subtitle2" gutterBottom>
                    GitHub
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

export default Contact;
