import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts-actions";

import { Section } from "../Section/Section";
const Filter = ({ value, onChange }) => (
  <Section>
    <label htmlFor="search">
      <h2>Find your contact by name</h2>

      <input id="search" type="text" value={value} onChange={onChange}></input>
    </label>
  </Section>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const mapStateToProps = (state) => ({ value: state.contacts.filter });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
