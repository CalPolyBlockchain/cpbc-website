import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const ModalContent = ({ setShowModal }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(false);
  const [results, setResults] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const closeModal = () => {
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === '' || email === '') {
      setAlert(true);
    } else {
      setAlert(false);
      setIsSubmitting(true);
      try {
        const response = await fetch(
          `https://salty-falls-07506.herokuapp.com/api/sheet?` +
            new URLSearchParams({
              name,
              email,
              message,
            })
        );
        if (!response.ok) {
          throw new Error();
        }
        const result = await response.json();
        setResults(result);
        setIsSubmitting(false);
        setHasSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        setIsSubmitting(false);
        setError({
          error: true,
          message: error.message,
        });
      }
    }
  };

  return (
    <section class='h-full'>
      <div className='h-full w-full flex justify-center items-center my-2 md:my-10 text-[24px]'>
        {!hasSubmitted && isSubmitting && <p>Submitting...</p>}
        {!hasSubmitted && !isSubmitting ? (
          <form
            className='flex flex-col w-full items-center mx-2 md:mx-10'
            onSubmit={handleSubmit}
          >
            <div className='modal-grid pb-[32px] mb-0 md:mb-[32px]'>
              {' '}
              <p> </p>
              <h1 className='font-bold text-center text-[24px] md:text-[32px]'>
                CONTACT US
              </h1>{' '}
              <div
                className='flex justify-end items-center w-full '
                onClick={() => setShowModal(false)}
              >
                <FaTimes className='scale' />
              </div>
            </div>
            <label class='flex flex-col pb-[32px] md:flex-row w-full justify-between m-2 md:m-5'>
              Name:
              <input
                className='modal-input w-[100%] md:w-[80%] h-[40px]'
                type='text'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label class='flex w-full pb-[32px]  flex-col md:flex-row justify-between m-2 md:m-5'>
              Email:
              <input
                className='modal-input w-[100%]  md:w-[80%]  h-[40px]'
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label class='flex w-full flex-col md:flex-row pb-[32px] justify-between m-2 md:m-5 '>
              Message:
              <textarea
                className='modal-input w-[100%] md:w-[80%]  h-[132px] md:h-[132px]'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </label>
            <button
              class='modal-button button-dark-flip flex font-bold w-full border-black border-2 mt-[18px] mb-[18px] py-3 rounded-md justify-center'
              type='submit'
            >
              Submit
            </button>
          </form>
        ) : (
          !isSubmitting && (
            <>
              {closeModal()}
              <div>Message received. Thank you for Contacting CPBC.</div>
            </>
          )
        )}
      </div>
      {hasSubmitted ? <p></p> : null}
      {error ? <p></p> : null}
      {alert ? (
        <p className='pb-2 ml-2'>Please enter a valid email and name</p>
      ) : null}
    </section>
  );
};

export default ModalContent;
