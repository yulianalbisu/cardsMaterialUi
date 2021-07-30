import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CssBaseline, Grid, Toolbar, Container, CardMedia, CardContent } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';
import { mergeClasses } from '@material-ui/styles';

const cards = [1,2,3,4,5,6,7,8,9];

const App = () => {
    const classes = useStyles();
    return (
        <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm" > 
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Hello this is my favorite album, I'm practicing with Material UI, the Bootstrap did'nt work well so I'm learning this
                    </Typography>
                </Container>
            </div>
        <div className={classes.buttons}>
        <Grid container spacing={2} justify="center">
            <Grid item>
                <Button variant="contained" color="primary">
                    See my photos
                </Button>
            </Grid>
                <Grid item>
                <Button variant="outline" color="primary">
                    Secondary Action
                </Button>
                </Grid>
                </Grid>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia

                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title">
                            </CardMedia>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                Heading
                                </Typography>
                            <Typography>
                                This is a cute card, making with React using material-ui, have to define the styles my app is not compiling lol.
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                View
                                </Button>
                                <Button size="small" color="primary">
                                Edith
                                </Button>
                            </CardActions>

                        </Card>

                    </Grid>
                ))};
                </Grid>
                
            </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Finito
                </Typography>
            <Typography variant="subtitle1" align="center" color='textSecondary'>
                Keep going you will learn everyday!

            </Typography>
            </footer>
        </>
    );
}

export default App;
