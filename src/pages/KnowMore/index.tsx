import { ContainerStyled, AsideStyled, ContentStyled } from "./styles";
import { Button } from "../../components/Button";
import imageServices from "../../assets/bloco_services.svg";
export const KnowMore = () => {
  return (
    <ContainerStyled>
      <AsideStyled>
        <img src={imageServices} alt="Woman Cooking" />
      </AsideStyled>
      <ContentStyled>
        <div>
          <h2> The best services ready To serve you</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <Button>Know More</Button>
        </div>
      </ContentStyled>
    </ContainerStyled>
  );
};
