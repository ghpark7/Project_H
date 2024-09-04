import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Form className="search-bar">
      <FormControl
        type="text"
        placeholder="Search for medical information..."
        className="mr-sm-2"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBar;