import Dropdown from '../DropDown/DropDown';

type PaginationDropDownProps = {
  total: number;
  page: number;
  pageSize: number;
  setPage: (page: number) => void;
};

function PaginationDropDown({
  total,
  page,
  pageSize,
  setPage,
}: PaginationDropDownProps) {
  const totalPages = Math.ceil(total / pageSize);
  const options = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <Dropdown
      options={options}
      value={page + 1}
      onChange={(value) => setPage(Number(value) - 1)}
    />
  );
}

export default PaginationDropDown;
