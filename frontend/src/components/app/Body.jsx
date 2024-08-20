import Router from "../router/Router";
import "../../css/body.css";

const Body = () => {
  return (
    <main className="test">
      <div className="py-4">
        <div className="container">
          <Router></Router>
        </div>
      </div>
    </main>
  );
};

export default Body;
