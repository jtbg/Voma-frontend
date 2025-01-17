import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import { ReactComponent as WhiteSlackIcon } from '../assets/WhiteSlackIcon.svg';

const StyledSection = styled.section`
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;

  svg {
    height: 36px;
    width: 36px;
  }
  @media (max-width: 900px){
    width: 80%;
  }

  .MuiButton-textPrimary {
    color: #6200EE;
    margin-left: 20px;
  }

  .MuiButton-root {
    padding: 0 10px;
  }
`;

export default function Home({ userNotFound, findUser }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const onInputChange = (e) => {
    setEmail(e.target.value);
  }

  const searchForUser = () => {
    findUser(email);
  };

  const goToSlackLink = () => {
    window.location = 'https://join.slack.com/t/apitest-jwd7276/shared_invite/zt-11cgm52ly-60DmFwe6BaXUN1wJnRa79g';
  }

  const buttonText = loading ? 'Searching...' : 'Submit';

  useEffect(() => {
    if (userNotFound) {
      setLoading(false);
    }
  }, [userNotFound]);

  return (
    <>
    <Dialog open={modalOpen}>
      <DialogContent>
        <DialogContentText>
          Let&apos;s see if you&apos;re in our workspace:
        </DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={onInputChange}
          />
        { userNotFound &&
          <DialogContentText>
            Looks like you haven&apos;t joined our workspace. Please <a href="https://join.slack.com/t/apitest-jwd7276/shared_invite/zt-11cgm52ly-60DmFwe6BaXUN1wJnRa79g">click here</a> to join.
          </DialogContentText>
        }
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={searchForUser}>{buttonText}</Button>
        </DialogActions>
    </Dialog>
    <StyledSection>
      <Typography variant="subtitle">Code for Chicago</Typography>
      <Typography gutterBottom variant="h4" component="h1">Volunteer Registration</Typography>
      <Typography gutterBottom vairant="body" paragraph>
      As part of the Code for America brigade network, Code for Chicago connects skills-based volunteers to Chicago-based nonprofits, mutual aid groups, and people with ideas on how they can improve their community.
      </Typography>
      <Typography gutterBottom vairant="body" paragraph>
      All incoming volunteers are required to register to our Slack workspace. If you haven’t joined our Slack workshpace yet then register first. Afterwards, come back here to complete the volunteer registration process.
      </Typography>
      <Button size="small" startIcon={<WhiteSlackIcon />} style={{backgroundColor: '#6200EE' }} variant="contained" onClick={openModal}>
        Sign in With Slack
      </Button>
      <Button onClick={goToSlackLink} href="https://join.slack.com/t/apitest-jwd7276/shared_invite/zt-11cgm52ly-60DmFwe6BaXUN1wJnRa79g" size="small" variant="text">Not registered to our slack?</Button>
    </StyledSection>
    </>
  )
}

Home.propTypes = {
  userNotFound: PropTypes.bool.isRequired,
  findUser: PropTypes.func.isRequired,
};

