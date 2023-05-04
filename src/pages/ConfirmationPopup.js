import React from 'react';
import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
  fixed top-0 left-0 w-full h-full flex items-center justify-center
`;

const Modal = tw.div`
  bg-white rounded-md shadow-xl p-4
`;

const Title = tw.h2`
  text-lg font-bold mb-2
`;

const Buttons = tw.div`
  mt-4 flex justify-end space-x-4
`;

const ConfirmButton = tw.button`
  px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
`;

const CancelButton = tw.button`
  px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
`;

function ConfirmationPopup({ message, onConfirm, onCancel }) {
  return (
    <Wrapper>
      <Modal>
        <Title>{message}</Title>
        <Buttons>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
        </Buttons>
      </Modal>
    </Wrapper>
  );
}

export default ConfirmationPopup;
