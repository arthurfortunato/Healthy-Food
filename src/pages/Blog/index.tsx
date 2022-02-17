import { Container, CarouselStyled, HeaderStyled } from "./styles";
import { Carousel } from "./components/Carousel";
export const Blog = () => {
  return (
    <Container id="Blog">
      <HeaderStyled>
        <h2>Read Our Blog</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </HeaderStyled>
      <CarouselStyled>
        <Carousel />
      </CarouselStyled>
    </Container>
  );
};
