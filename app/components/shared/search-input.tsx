import { Form } from "react-router";
import { TextField, LinearProgress } from "@mui/material";

export const SearchInput = ({
  submit,
  searching,
  searchKey,
  searchInputRef,
  defaultValue,
}) => {
  return (
    <Form
      id="search-form"
      role="search"
      className="w-full"
      onSubmit={(event) => submit(event.currentTarget)}
    >
      <TextField
        id={searchKey}
        name={searchKey}
        label="Search"
        type="search"
        variant="filled"
        disabled={searching}
        defaultValue={defaultValue}
        ref={searchInputRef}
        fullWidth
      />
      <LinearProgress
        aria-hidden
        sx={{ display: searching ? "block" : "none" }}
        id="loading-bar"
      />
    </Form>
  );
};
