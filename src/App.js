import Header from "./components/Header";
import Loading from "./components/Loading";
import Router from "./routers/Router";

function App() {
  return (
    <div className="App">
      <Loading />

      <Header />

      <Router />
    </div>
  );
}

export default App;
