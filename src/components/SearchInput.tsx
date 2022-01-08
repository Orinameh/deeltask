import React from "react";

type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  searchTerm: string;
};
const SearchInput = ({ onChange, searchTerm }: Props) => {
  return (
    <input className="input" placeholder="Search item" onChange={onChange} value={searchTerm} />
  );
};

export default SearchInput;
