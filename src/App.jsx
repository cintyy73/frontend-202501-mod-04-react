import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.secondary ? "#6c757d" : "#007bff")};
  color: white;
  border: none;
  padding: ${(props) => (props.size === "large" ? " 12px 24px" : "8px 16px")};
  border-radius: 4px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  &:hover {
    background: #0056b3;
  }
`;

const BaseButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const PrimaryButton = styled(BaseButton)`
  background: #007bff;
  color: white;

  &:hover {
    background: #0056b3;
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: #1f0622ff;
  color: white;
`;

const ButtonThemeDanger = styled.button`
  background: ${(props) => props.theme.colors.danger};
  padding: ${(props) => props.theme.spacing.xlarge};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) => props.theme.spacing.small};
  }
`;
 const device = {
  mobile: `(max-width: 768px)`,
  tablet: `(max-width: 1024px)`,
  desktop: `(min-width: 1025px)`,
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
const InteractiveCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  padding: 16px;

  @media (max-width: 768px) {
    background: red;
  }

  @media (min-width: 1200px) {
    background: blue;
  }
  &:hover {
    transform: translateY(-24px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
 
function App() {
  return (
    <div style={{ backgroundColor: "black", height: "110vh" }}>
      <Grid>
      <InteractiveCard>
        <Button disabled>Disabled</Button>
        <Button size="large">Click primary</Button>
        <Button secondary>Click secondary</Button>
        <hr />
        <BaseButton>Base</BaseButton>
        <PrimaryButton>primary extend base</PrimaryButton>
        <SecondaryButton>Secondary extend base</SecondaryButton>
        <hr />
        <ButtonThemeDanger>theme Danger</ButtonThemeDanger>
      </InteractiveCard>
      </Grid>
    </div>
  );
}

export default App;
