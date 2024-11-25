import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '@/components/header';
import { StyledContainer, StyledWrapper } from '@/components/layout/styled';
import { RoutesPath } from '@/constants/routes-path';

export const Layout = () => {
  const { pathname } = useLocation();
  const isShowHeader = pathname != RoutesPath.Home;
  return (
    <>
      <StyledWrapper>
        {isShowHeader && <Header />}
        <StyledContainer>
          <Outlet />
        </StyledContainer>
        <Toaster position="top-right" />
      </StyledWrapper>
    </>
  );
};
