import React from "react"
import SEO from "../components/seo"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  }
}));

function IndexPage () {
  const classes = useStyles();

  return (
    <React.Fragment>
        <SEO title="Landing Page Title" keywords={[`Sailing`, `Eating`, `Drinking`]} />
        {/* Hero unit */}
        
        <div className={classes.heroContent}>
          <Container maxWidth="md" >
          <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>
            Digital Experience
          </Typography>
            <Typography variant="h5" align="center" paragraph>
            Helping marketers serve unmatched cross-phase personalized experiences at every step of the lorem ipsum. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the insert buzzword here Digital Experience Platform.
            </Typography>
            
          </Container>
        </div>
        
        
      </React.Fragment>
  )
};

export default IndexPage;

