import styled from 'styled-components';

const StyledSection = styled.section`
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
`;

const SlackButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
`;

const SlackImg = styled.img`
  width: 100%;
  border: none;
`;

export default function Home() {
  return (
    <StyledSection>
      <StyledH1>Sign in with Slack</StyledH1>
      <StyledParagraph>
        We utilize Slack throughout our onboarding process. If you haven&#39;t already, please join
        our <a href="https://code-for-chicago-slack-invite.herokuapp.com/">Slack</a> and come back
        here to sign in.
      </StyledParagraph>
      <SlackButton type="button">
        <SlackImg
          src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
          srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
          alt=""
          aria-label="Sign in with Slack"
        />
      </SlackButton>
    </StyledSection>
  );
}
