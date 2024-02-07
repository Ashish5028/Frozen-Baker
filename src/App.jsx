import "./App.css";
import AppRoutes from "./app/routes";

function App() {
  const user = () => {};
  return (
    <>
      <div>{user ? <AppRoutes /> : null}</div>
    </>
  );
}

export default App;
