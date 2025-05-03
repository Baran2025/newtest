import * as React from 'react';
import Grid from '@mui/material/Grid2';
import imageOne from './images/7.jpg';
import Container from '@mui/material/Container';


const About = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ marginTop: '30px' }}>
       <Grid container spacing={2}>
        <Grid size={6}>
        <img src={imageOne} alt="Image Description" style={{ width: '100%', height: '500px' }} />
        </Grid>
        <Grid size={6}>
        <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex distinctio odit tenetur vero obcaecati quasi facere, provident et dolores officiis quae, ut, necessitatibus nulla perspiciatis. Temporibus quae numquam officia!
              Dolorum commodi eum hic provident, quo doloribus mollitia asperiores porro tempore doloremque aut rerum totam voluptatum voluptatibus quia iusto exercitationem odio nam fuga inventore enim facilis reiciendis ut. Quasi, porro?
              Tempore cum alias fugiat mollitia nulla natus, ipsam consequuntur enim voluptas harum assumenda odio nobis qui accusantium nesciunt minus dignissimos earum consectetur illum accusamus. Rerum maxime delectus neque quo natus!
              Nulla laboriosam deleniti, impedit blanditiis commodi deserunt labore et voluptatem cupiditate molestiae pariatur explicabo consectetur numquam voluptatum quam accusamus. Optio commodi excepturi deserunt accusamus delectus tenetur maiores, odio dolorum tempora!
              Unde quisquam magnam doloremque dolore! Magni consequuntur repellat dolorum provident at praesentium. Laboriosam earum quibusdam quis sapiente molestias cumque, est eius a eum, sequi asperiores debitis omnis alias maiores illo?
              Esse saepe deserunt fugiat dolorem possimus sequi voluptate magni veniam unde optio neque at laborum earum aspernatur nemo accusamus inventore, libero qui praesentium voluptatibus est tempora. Fugit sapiente illo vero!
              Voluptate consequuntur numquam quos minima temporibus aperiam error quaerat illum iste distinctio quae velit odio similique officia placeat, laudantium ducimus. Ut non eos, quia recusandae dolor necessitatibus facere repellat beatae.
              Reprehenderit aperiam ratione, veniam porro minima voluptas eius officia perspiciatis nihil repellendus consequatur et odio reiciendis explicabo! Vel molestiae aliquid nisi ut porro molestias, delectus officia nam aut odit voluptate.
              Aliquam accusamus tenetur quidem officiis, iste nostrum ducimus dignissimos temporibus, ratione rem fuga, alias atque asperiores iusto. Enim blanditiis error qui ipsam quia dolore molestiae obcaecati beatae, provident reiciendis excepturi!
              Dolor praesentium ipsa officiis placeat, officia modi rerum alias error sint vero dolorum, in corrupti rem eveniet odit facilis facere repudiandae ab distinctio? Quisquam nostrum eum enim sit earum dicta.
          </p>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default About;
