// import { Container } from "react-bootstrap";
import { List, ListItem } from '@mui/material';
import Grid from '@mui/material/Grid2';



const Footer = () => {
  return (
    <>
        <Grid container spacing={2} sx={{padding:5, marginTop:5}}>
          <Grid size={6}>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis, deserunt rerum autem quo ut minus repudiandae blanditiis! Architecto quos qui amet dolores esse assumenda laboriosam ullam, voluptatum pariatur nam.
               Aperiam, quos temporibus. Earum aliquam temporibus, maiores, quasi nihil soluta optio inventore unde similique nostrum explicabo consequuntur ullam voluptatem, laboriosam error accusantium obcaecati eius perspiciatis fugit commodi. Atque, iste sequi.
               Ab minus, quae nulla illo a fugit numquam maxime modi quisquam eius explicabo vero ad repudiandae, necessitatibus possimus? Totam repellendus qui earum ea vero voluptate nobis officiis, doloremque consequatur! Nisi.
              
            </p>
          </Grid>
          <Grid size={2}>
            <List>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>BOOTSTRAP</ListItem>
              <ListItem>UI/UX</ListItem>
              <ListItem>SEO</ListItem>
              <ListItem>REACT JS</ListItem>
            </List>
          </Grid>
          <Grid size={2}>
            <List>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>BOOTSTRAP</ListItem>
              <ListItem>UI/UX</ListItem>
              <ListItem>SEO</ListItem>
              <ListItem>REACT JS</ListItem>
            </List>
          </Grid>
          <Grid size={2}>
            <List>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>BOOTSTRAP</ListItem>
              <ListItem>UI/UX</ListItem>
              <ListItem>SEO</ListItem>
              <ListItem>REACT JS</ListItem>
            </List>
          </Grid>
        </Grid>
    </>
  );
};

export default Footer;
