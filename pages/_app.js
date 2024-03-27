import "../styles/globals.css";
import { ModalStore } from "../components/ModalStore";

function MyApp({ Component, pageProps }) {
  return (
    <ModalStore>
      <Component {...pageProps} />
    </ModalStore>
  );
}

export default MyApp;
