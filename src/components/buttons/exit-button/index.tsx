import { useNavigate } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledExitButton } from '@/components/buttons/exit-button/styled';
import { RoutesPath } from '@/constants/routes-path';

type Props = {
  showTooltip?: boolean;
};

export const ExitButton = ({ showTooltip = true }: Props) => {
  const navigate = useNavigate();

  const buttonTitle = showTooltip ? 'All data will be lost when exiting' : '';

  const handleClick = () => {
    navigate(RoutesPath.TaskBoard);
  };

  return (
    <StyledExitButton onClick={handleClick} title={buttonTitle}>
      <FontAwesomeIcon icon={faXmark} />
    </StyledExitButton>
  );
};
