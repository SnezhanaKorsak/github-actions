import { useNavigate } from 'react-router-dom';

import welcomeBanner from '@/assets/welcom-banner.png';
import { RoutesPath } from '@/constants/routes-path';
import {
  StyledButton,
  StyledImage,
  StyledText,
  StyledTitle,
} from '@/pages/home/styled';

export const HomePage = () => {
  const navigate = useNavigate();

  const description =
    'Organize, plan, and collaborate on tasks with Your todo list. Your\u00A0busy life deserves this.You can manage checklist and your goal.';

  const handleClick = () => {
    navigate(RoutesPath.TaskBoard);
  };
  return (
    <>
      <StyledImage src={welcomeBanner} alt="welcom-banner" />
      <StyledTitle data-testId="home-title">Manage your tasks</StyledTitle>
      <StyledText data-testId="home-description">{description}</StyledText>
      <StyledButton onClick={handleClick}>Get started</StyledButton>
    </>
  );
};
