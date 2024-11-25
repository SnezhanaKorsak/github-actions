import { ChangeEvent, useState } from 'react';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  StyledButtonIcon,
  StyledDescription,
  StyledDescriptionHint,
  StyledTextArea,
} from '@/components/category-description/styled';
import { useAppDispatch } from '@/hooks/redux';
import { changeCategoryDescription } from '@/store/task-categories/slice';

type Props = {
  category: string;
  description: string;
};

export const CategoryDescription = ({ category, description }: Props) => {
  const dispatch = useAppDispatch();

  const [editDescriptionMode, setEditDescriptionMode] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const onEditModeHandler = () => setEditDescriptionMode(true);
  const offEditModeHandler = () => {
    dispatch(
      changeCategoryDescription({ category, description: newDescription }),
    );
    setEditDescriptionMode(false);
  };

  const onChangeDescriptionHandler = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewDescription(event.target.value);
  };
  return (
    <>
      <StyledDescriptionHint>
        Descriptions:
        <StyledButtonIcon onClick={onEditModeHandler}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </StyledButtonIcon>
      </StyledDescriptionHint>
      {editDescriptionMode ? (
        <StyledTextArea
          value={newDescription}
          onChange={onChangeDescriptionHandler}
          onBlur={offEditModeHandler}
          autoFocus={true}
        />
      ) : (
        <StyledDescription>{description}</StyledDescription>
      )}
    </>
  );
};
