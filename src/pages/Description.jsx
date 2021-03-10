import { useContext, useEffect } from "react";
import { DescriptionCard } from "../components/DescriptionCard";
import { TryAlsoCard } from "../components/TryAlsoCard";
import { DescriptionContext } from "../contexts/DescriptionContext";
import { DescriptionContainer } from "../styles/Description.style";

export const Description = () => {
  const { tryAlso, recipeDescription } = useContext(DescriptionContext);

  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);

  console.log("sugestoes: ", tryAlso);
  console.log("descrição receita: ", recipeDescription);

  return (
    <>
      <DescriptionContainer>
        <DescriptionCard />
        <TryAlsoCard />;
      </DescriptionContainer>
    </>
  );
};
