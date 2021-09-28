//importando useSelector do react-redux
import { useSelector, useDispatch } from "react-redux";
import { PageTitle, FruitName } from "./style.js";
import { addFruit } from "../../store/modules/fruits/actions";
import { useState } from "react";

const FruitsPage = () => {
  const [fruit, setFruit] = useState("");
  const dispatch = useDispatch();
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);
  const handleAddFruit = () => dispatch(addFruit(fruit));

  return (
    <div>
      <PageTitle>Top 3 frutas</PageTitle>
      <input onChange={(e) => setFruit(e.target.value)} />
      <button onClick={handleAddFruit}>Adicionar fruta</button>
      {fruits.map((fruit) => (
        <FruitName key={fruit}> {fruit} </FruitName>
      ))}
    </div>
  );
};

export default FruitsPage;
