//import { useState } from 'react';
import {
  StyledDescription,
  StyledDescriptionHint,
} from '@/components/category-description/styled';

type Props = {
  description: string;
};

export const CategoryDescription = ({ description }: Props) => {
  //const [editDescriptionMode, setEditDescriptionMode] = useState(false);

  return (
    <>
      <StyledDescriptionHint>Descriptions:</StyledDescriptionHint>
      <StyledDescription>{description}</StyledDescription>
    </>
  );
};
