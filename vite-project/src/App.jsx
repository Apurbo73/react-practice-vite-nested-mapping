import Users from "./component/Users";
import data from "../src/data";
// import Phones from "./component/Phones";
import "./style.css";
function App() {
  return (
    <div>
      <h1 className="cardHeader">Nested Mapping !!</h1>
      <div style={{ display: "flex" }}>
        {data.map((d, index) =>
          <div className="card">
            <Users key={index} d={d} />
            {d.phones.map((phone, index) =>
              <div>
                <h3>
                  Home: {phone.home}
                </h3>
                <h4>
                  Office :{phone.office}
                </h4>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
