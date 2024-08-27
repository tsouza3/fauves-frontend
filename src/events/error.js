import styled from 'styled-components';

const Alert = styled.div`
font-family: "Montserrat", sans-serif;
font-weight: 600;
font-size: 14px;
  role: alert;
  background-color: #fee2e2; /* bg-red-100 */
  color: #b91c1c; /* text-red-900 */
  border-left: 4px solid #ef4444; /* border-red-500 */
  padding: 0.5rem; /* p-2 */
  border-radius: 0.5rem; /* rounded-lg */
  display: flex;
  align-items: center;
  transition: background-color 0.1s ease-in-out, transform 0.1s ease-in-out;
  &:hover {
    background-color: #fecaca; /* hover:bg-red-200 */
    transform: scale(1.01);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #7f1d1d; /* dark:bg-red-900 */
    color: #fee2e2; /* dark:text-red-100 */
    border-left-color: #b91c1c; /* dark:border-red-700 */
    &:hover {
      background-color: #991b1b; /* dark:hover:bg-red-800 */
    }
  }
`;

const Icon = styled.svg`
  height: 1.25rem; /* h-5 */
  width: 1.25rem; /* w-5 */
  flex-shrink: 0;
  margin-right: 0.5rem; /* mr-2 */
  color: #dc2626; /* text-red-600 */
`;

const Message = styled.p`
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
`;

export function ErrorAlert({error}) {
  return (
    <Alert>
      <Icon
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </Icon>
      <Message>{error}</Message>
    </Alert>
  );
}

export default ErrorAlert;
