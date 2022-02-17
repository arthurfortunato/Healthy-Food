import {
  AsideStyled,
  ContainerStyled,
  ContentStyled,
  EmailStyled,
  FooterStyled,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const JoinUs = () => {
  return (
    <ContainerStyled id="Join">
      <ContentStyled>
        <EmailStyled>
          <h2>Join our membership to get special offer</h2>
          <div>
            <Input
              type="text"
              name=""
              mask=""
              placeholder="Enter your email address"
            />
            <Button>Join</Button>
          </div>
        </EmailStyled>
        <AsideStyled>

        </AsideStyled>
      </ContentStyled>
      <FooterStyled>
        <p>© Copyrights 2019 Stack. All Rights Reserved. </p>
        <nav>
          <ul>
            <li>Privacy Policy</li>
            <li>Term and Conditions</li>
          </ul>
        </nav>
      </FooterStyled>
    </ContainerStyled>
  );
};
