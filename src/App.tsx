import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import Categorias from "./componentes/Categorias";
import Produtos from "./componentes/Produtos";
import Parceiros from "./componentes/Parceiros";
import Logo from "./componentes/Logo";
import Footer from "./componentes/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Banner />

        <Categorias />
        <Produtos />

        <Parceiros />

        <Produtos />

        <Parceiros />

        <Logo />

        <Produtos />
      </main>

      <Footer />
    </>
  );
}

export default App;
