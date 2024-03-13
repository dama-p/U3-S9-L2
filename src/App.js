import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
/* import AllTheBooks from './components/AllTheBooks'; */
import horror from "../src/data/horror.json";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />

      {/*   <SingleBook book={horror[0]} /> */}

      <BookList booksArray={horror} />

      {/* <AllTheBooks /> */}

      <MyFooter />
    </>
  );
}

export default App;
