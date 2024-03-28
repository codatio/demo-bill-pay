import "../styles/globals.css";
import { ModalStore } from "../components/ModalStore";

//import "../components/Orchard/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ModalStore>
      <Component {...pageProps} />
    </ModalStore>
  );
}

export default MyApp;
