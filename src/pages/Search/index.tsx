import { useSearch } from "./hooks/useSearch";
import { Button } from "../../components";
import { Container, SearchArea } from "./styles";

function Search() {
  const { username, handleInput, throwUser } =
    useSearch();

  return (
    <Container>
      <SearchArea>
        <h1>Ezio</h1>
        <h2>Biografia</h2>
        <input
          value={username}
          onChange={handleInput}
          type="text"
          name="username"
          id="username"
          placeholder="Escreva seu Prompt"
        />
        <Button
          text="Enviar"
          onClick={throwUser}
        />
      </SearchArea>
    </Container>
  );
}

export { Search };
