import styled from 'styled-components';

const Alert = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 14px;
  role: alert;
  background-color: #d1fae5; /* bg-green-100 */
  color: #065f46; /* text-green-900 */
  border-left: 4px solid #10b981; /* border-green-500 */
  padding: 0.5rem; /* p-2 */
  border-radius: 0.5rem; /* rounded-lg */
  display: flex;
  align-items: center;
  transition: background-color 0.1s ease-in-out, transform 0.1s ease-in-out;
  
  &:hover {
    background-color: #bbf7d0; /* hover:bg-green-200 */
    transform: scale(1.01);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #134e4a; /* dark:bg-green-900 */
    color: #d1fae5; /* dark:text-green-100 */
    border-left-color: #4ade80; /* dark:border-green-700 */
    
    &:hover {
      background-color: #065f46; /* dark:hover:bg-green-800 */
    }
  }
`;

const Icon = styled.svg`
  height: 1.25rem; /* h-5 */
  width: 1.25rem; /* w-5 */
  flex-shrink: 0;
  margin-right: 0.5rem; /* mr-2 */
  color: #16a34a; /* text-green-600 */
`;

const Message = styled.p`
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
`;

export function SuccessAlert({message}) {
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
      <Message>{message}</Message>
    </Alert>
  );
}

export default SuccessAlert;
