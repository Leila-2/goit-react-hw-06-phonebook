import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";

import { connect } from "react-redux";
import { addContact } from "./redux/contacts-actions";

function App() {
  return (
    <div className="App">
      <Form />
      <Filter />
      <Contacts />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(App);

export { App };
