const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Sai", lastName: "Kalyan" };
const element = (
  <div>
    <h1 className="greeting">{fullName(user)}</h1>
    <p className="description">softwareEngineer</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
