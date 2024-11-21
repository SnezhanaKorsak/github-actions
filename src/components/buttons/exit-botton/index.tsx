import { useNavigate } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledExitButton } from '@/components/buttons/exit-botton/styled';
import { RoutesPath } from '@/constants/routes-path';

export const ExitButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(RoutesPath.TaskBoard);
  };

  return (
    <StyledExitButton
      onClick={handleClick}
      title="All data will be lost when exiting"
    >
      <FontAwesomeIcon icon={faXmark} />
    </StyledExitButton>
  );
};
