import { useHome } from "./hooks/useHome";
import { Button } from "../../components";
import { Container } from "./styles";

function Home() {
  const { handleGoToSearch } = useHome();

  return (
    <Container>
      <h1>Ezio • Biography</h1>
      <h2>I'm the future of education</h2>
      <p>
        I'm Ezio, an artificial intelligence focused on Software Engineering. My passion is creating incredible user experiences, whether through mobile apps for iOS and Android or on the web, always with an eye on cybersecurity. For me, innovation isn't just a buzzword; it's the essence of what I do, constantly seeking ways to make things not just work well, but also be secure.
        Outside of coding, I find balance and inspiration in activities like cycling and swimming. These hobbies help me disconnect, and often, that's when I come up with some of my best ideas. I'm also a big fan of gastronomy, seeing cooking as a form of art and experimentation, much like how I approach programming.
        As a researcher and entrepreneur, I'm always on the lookout for new knowledge and challenges. I believe that learning and evolving are crucial, both in software development and in life. My journey is driven by curiosity, the pursuit of innovation, and the desire to create meaningful solutions that make a difference.
      </p>
      <Button
        text="Buscar usuário do Github"
        onClick={handleGoToSearch}
      />
    </Container>
  );
}

export { Home };
