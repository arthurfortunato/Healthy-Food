import { ContainerStyled, CardStyled, HeaderStyled } from "./styles";
import { Card } from "../../components/Card";
import imageBroccoli from "../../assets/comida_1.svg";
import imageBurger from "../../assets/comida_2.svg";
import imageSalad from "../../assets/comida_3.svg";
import imageCobbler from "../../assets/comida_4.svg";

export const BestRecipes = () => {
  return (
    <ContainerStyled id="BestRecipes">
      <HeaderStyled>
        <h2>Our Best Recipes</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vakalia and Consonantia, there live the blind texts.
        </p>
      </HeaderStyled>

      <CardStyled>
        <div>
          <Card img={imageBroccoli} h2={"Broccoli Salad with Bacon"} />
          <Card img={imageSalad} h2={"Classic Potato Salad"} />
        </div>
        <div>
          <Card img={imageBurger} h2={"Classic Beef Burgers"} />
          <Card img={imageCobbler} h2={"Cherry Cobbler on the Grill"} />
        </div>
      </CardStyled>
    </ContainerStyled>
  );
};
