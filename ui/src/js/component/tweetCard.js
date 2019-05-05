import React from 'react';
import Card from '@material-ui/core/Card';
import {
  CardContent, Typography, CardActions, Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { userSelect } from '../actions/simpleActions';

const styles = {
  card: {
    width: 500,
    justify: 'center',
    alignitems: 'center',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  buttons: {
    justifyContent: 'center',
  },
  real: {
    background: 'forestgreen',
    color: 'white',
    '&:hover': {
      background: 'darkgreen',
    },
  },
  fake: {
    color: 'white',
    backgroundColor: 'firebrick',
    '&:hover': {
      background: 'darkred',
    },
  },
};

function TweetCard({ classes, userSelection }) {
  return (
    <Card className={classes.card} raised square>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Trump Tweets
        </Typography>
        <Typography variant="h5" component="h2">
          How can it be possible that James Woods (and many others), a strong but responsible
          Conservative Voice, is banned from Twitter? Social Media &amp; Fake News Media, together
          with their partner, the Democrat Party, have no idea the problems they are causing for
          themselves. VERY UNFAIR!
        </Typography>
        <Typography>- Donald J. Trump</Typography>
        <CardActions className={classes.buttons}>
          <Button
            className={classes.real}
            variant="contained"
            onClick={() => userSelection('real')}
          >
            Real
          </Button>
          <Button
            className={classes.fake}
            variant="contained"
            onClick={() => userSelection('fake')}
          >
            Fake
          </Button>
        </CardActions>
      </CardContent>
      {' '}
    </Card>
  );
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  userSelection: x => dispatch(userSelect(x)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(TweetCard));
