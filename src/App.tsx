import * as React from 'react';
import './style.css';

import List from './components/List/List';
import Detail from './components/Detail/Detail';
import { Modal } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useProducts } from './hooks/useProducts';
import { getLastImageNotThumbnail } from './utils/imageUtils';
import PaginationDropDown from './components/PaginationDropDown/PaginationDropDown';

const INITIAL_INDEX = -1;
const INITIAL_IMAGE_SRC = '';
const PAGE_SIZE = 10;

// TODO: Refactor to use Next.js - RSC or GSSP to fetch and hydrate data
export default function App() {
  const [page, setPage] = React.useState(0);
  const { data, isLoading, isError } = useProducts({ page });
  const total = data?.total ?? 0;

  // TODO: Refactor this to use URL query paramters to store state
  const [selectedProductId, setSelectedProductId] =
    React.useState(INITIAL_INDEX);

  const [modalOpen, setModalOpen] = React.useState(false);

  const selectedProductImage = React.useMemo(() => {
    if (isLoading || isError) return INITIAL_IMAGE_SRC;

    const selectedProduct =
      data?.products.find((product) => product.id === selectedProductId) ||
      undefined;

    return selectedProductId !== INITIAL_INDEX
      ? getLastImageNotThumbnail(
          selectedProduct?.images,
          selectedProduct?.thumbnail
        )
      : INITIAL_IMAGE_SRC;
  }, [selectedProductId]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error...</div>;
  }

  const handleClose = () => {
    setModalOpen(false);
    setSelectedProductId(INITIAL_INDEX);
  };

  return (
    <div className="flex justify-center items-start">
      <div className="w-full flex items-start gap-4">
        <List listData={data} setSelectedProductId={setSelectedProductId} />
        <PaginationDropDown
          total={total}
          page={page}
          pageSize={PAGE_SIZE}
          setPage={setPage}
        />
      </div>

      <Modal
        open={!!selectedProductImage}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex justify-center items-center w-[100vw] h-[100vh]">
          <Detail selectedProductImage={selectedProductImage}>
            <IconButton
              className="!absolute right-0 top-0 z-10"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Detail>
        </div>
      </Modal>
    </div>
  );
}
