import { ChakraProvider } from "@chakra-ui/react";
import Header from "../Header";
import LandingSection from "../LandingSection";
import ProjectsSection from "../ProjectsSection";
import ContactMeSection from "../ContactMeSection";
import Footer from "../Footer";
import { AlertProvider } from "../../context/alertContext";
import Alert from "../Alert";


export default function Home(props) {
    return (
        <ChakraProvider>
          <AlertProvider>
            <main>
              <LandingSection />
              <Footer />
              <Alert />
            </main>
          </AlertProvider>
        </ChakraProvider>
      );
}