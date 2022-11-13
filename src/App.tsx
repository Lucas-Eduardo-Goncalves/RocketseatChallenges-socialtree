import { GlobalStyles } from "./global";
import { AreaIcons, Avatar, Button, Center } from "./styles";

import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitch,
  FiTwitter,
} from "react-icons/fi";

export function App() {
  const imgURL = "https://avatars.githubusercontent.com/u/92813658?v=4";
  return (
    <>
      <GlobalStyles />

      <Center>
        <Avatar>
          <img src={imgURL} alt="Imagem de um menino muito bonito" />
        </Avatar>

        <p className="instagram">@instagram</p>

        <Button>link 1</Button>
        <Button>link 2</Button>
        <Button>link 3</Button>
        <Button>link 4</Button>

        <AreaIcons>
          <FiTwitter />
          <FiTwitch />
          <FiInstagram />
          <FiLinkedin />
          <FiGithub />
        </AreaIcons>
      </Center>
    </>
  );
}
