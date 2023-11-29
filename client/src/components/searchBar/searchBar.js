import Form from 'react-bootstrap/Form';

const SearchBar = ({ label, searchTerm }) => {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        onChange={searchTerm}
      />
    </>
  );
}

export default SearchBar;