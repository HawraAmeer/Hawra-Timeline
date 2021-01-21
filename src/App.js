import Top from "./components/Top";
import List from "./components/List";
import Bottom from "./components/Bottom";
import "./styles.css";

function App() {
  return (
    <div>
      <body id="page-top">
        <section className="page-section" id="about">
          <div className="container">
            <Top />
            <List />
            <Bottom />
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
