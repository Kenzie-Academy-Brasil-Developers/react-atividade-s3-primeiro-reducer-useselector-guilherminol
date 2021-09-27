//importando useSelector do react-redux
import { useSelector } from "react-redux";
import { PageTitle, FruitName } from "./style.js";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      <PageTitle>Top 3 frutas foda</PageTitle>
      {fruits.map((fruit) => (
        <FruitName key={fruit}> {fruit} </FruitName>
      ))}
    </div>
  );
};

export default FruitsPage;
