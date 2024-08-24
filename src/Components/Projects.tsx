import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PaymentsCover from "../assets/Payments Website Cover.png";
import IllDecideCover from "../assets/Ill Decide Cover.png";
import { useRef } from "react";
import { useInView } from "framer-motion";

type MyComponentProps = React.PropsWithChildren<object>;

function Section({ children }: MyComponentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Projects() {
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
      <Section>
        <Grid
          container
          columnSpacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            px: 5,
            pb: 40,
          }}
        >
          <Grid item xs={7}>
            <Box
              bgcolor={"#333333"}
              sx={{ p: 1, display: "flex", justifyContent: "center" }}
            >
              <img src={PaymentsCover} width="90%" alt="" />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Stack>
              <Typography variant="h4" align="center" gutterBottom>
                Payments Website
              </Typography>
              <Typography variant="subtitle1" align="center">
                About Parapgraph
              </Typography>
              <Link href="https://github.com/calebbertumen/PaymentsWebApp">
                <Typography align="center">Github Repo</Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Section>

      {/* Project #2 */}
      <Section>
        <Grid
          container
          columnSpacing={4}
          sx={{ display: "flex", justifyContent: "center", px: 5, pb: 40 }}
        >
          <Grid item xs={5}>
            <Stack>
              <Typography variant="h4" align="center" gutterBottom>
                "I'll Decide" Restaurant Generator
              </Typography>
              <Typography variant="subtitle1" align="center">
                About Parapgraph
              </Typography>
              <Link href="https://github.com/calebbertumen/Ill-Decide">
                <Typography align="center">Github Repo</Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Box
              bgcolor={"#333333"}
              sx={{ p: 1, display: "flex", justifyContent: "center" }}
            >
              <img src={IllDecideCover} width="90%" alt="" />
            </Box>
          </Grid>
        </Grid>
      </Section>

      {/* Project #3 */}
      <Section>
        <Grid
          container
          columnSpacing={4}
          sx={{ display: "flex", justifyContent: "center", px: 5, pb: 40 }}
        >
          <Grid item xs={7}>
            <Box
              bgcolor={"#333333"}
              sx={{ p: 1, display: "flex", justifyContent: "center" }}
            >
              <img src={PaymentsCover} width="90%" alt="" />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Stack>
              <Typography variant="h4" align="center" gutterBottom>
                Shopping LIst
              </Typography>
              <Typography variant="subtitle1" align="center">
                About Parapgraph
              </Typography>
              <Link>
                <Typography align="center">Github Repo</Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}

export default Projects;
