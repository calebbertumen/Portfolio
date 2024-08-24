import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Home() {
  return (
    <>
      {/* view my work TEXT */}
      <Box>
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >
          <Stack sx={{ py: 3, alignItems: "center" }}>
            <ArrowUpwardIcon />
            <Typography
              variant="h5"
              color="primary.main"
              sx={{ fontWeight: "bold", m: 1 }}
            >
              view my work above
            </Typography>
          </Stack>
        </motion.div>
      </Box>

      {/* Center TEXT */}
      <Box sx={{ py: 25, textAlign: "center" }}>
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Typography variant="h3">
            <Box sx={{ fontWeight: "bold", m: 1 }}>
              Hello, I'm Caleb Bertumen.
            </Box>
          </Typography>
          <Typography variant="h3">
            <Box sx={{ fontWeight: "bold", m: 1 }}>
              I'm a Full Stack Web Developer.
            </Box>
          </Typography>
        </motion.div>
      </Box>
    </>
  );
}

export default Home;
