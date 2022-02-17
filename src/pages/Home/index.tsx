import {
  ContainerStyled,
  HeaderStyled,
  SearchRecipesStyled,
} from "./styles";

import { ModalCreateUser } from "./components/Modal";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { IoSearchOutline } from "react-icons/io5";

export const Home = () => {
  return (
    <ContainerStyled>
        <HeaderStyled>
          <h1>Healthy Food</h1>
          <nav>
            <ul>
             <li><a href="#BestRecipes">HEALTHY RECIPES</a></li>
             <li><a href="#Blog">BLOG</a></li>
             <li><a href="#Join">JOIN</a></li>
            </ul>
            <ModalCreateUser />
          </nav>
        </HeaderStyled>
        <SearchRecipesStyled className="teste">
          <h2>Ready for Trying a new recipe?</h2>
          <div>
            <Input
              type="text"
              name=""
              mask=""
              placeholder="Search healthy recipes"
            />
            <Button>
              <IoSearchOutline />
            </Button>
          </div>
        </SearchRecipesStyled>
    </ContainerStyled>
  );
};
