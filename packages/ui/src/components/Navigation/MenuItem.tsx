import { MenuItemProps, MenuProps } from './types';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProject } from '../../pages/Acquire/Essentials/queries/project';
import {
  Box,
  useMultiStyleConfig,
  OrderedList,
  ListItem,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { Icon } from '../Icon';

function getActiveChildIndex(children: Array<ReactElement<MenuItemProps>>) {
  return Math.max(
    children.findIndex(
      (c) => c.props.path === window.location.pathname.split('/').pop(),
    ),
    0,
  );
}

export const Menu = ({ children }: MenuProps) => {
  const styles = useMultiStyleConfig('MenuQuestionnaire', {});
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(getActiveChildIndex(children));

  useEffect(() => {
    setActiveIndex(getActiveChildIndex(children));
  }, [window.location.pathname]);

  function onNextClick() {
    const nextChild = children.at(activeIndex + 1);
    if (nextChild) {
      navigate(nextChild.props.path);
      setActiveIndex(activeIndex + 1);
    } else {
      const currentChild = children.at(activeIndex);
      if (currentChild?.props.next) {
        navigate(currentChild.props.next);
      }
    }
  }

  return (
    <OrderedList sx={styles.menuContainer}>
      {children}
      <ListItem sx={styles.menuNavItem}>
        <Box sx={styles.nextButton}>
          <Button width="300px" onClick={onNextClick}>
            Next
          </Button>
        </Box>
      </ListItem>
    </OrderedList>
  );
};

export function MenuItem({ name, path, icon = 'completed' }: MenuItemProps) {
  const styles = useMultiStyleConfig('MenuQuestionnaire', {});
  const navigate = useNavigate();
  const { projectId, buildId } = useParams();
  const { data } = useProject({
    variables: { projectId },
  });
  const [activeLink, setActiveLink] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname.split('/').pop();
    setActiveLink(currentPath === path);
  }, [window.location.pathname]);

  const questionnaire = data?.project.builds?.find(
    (build) => build.id === buildId,
  )?.questionnaire;

  const isCompleted = questionnaire?.completed?.includes(name);

  function handleSelect() {
    navigate(path);
  }

  return (
    <ListItem
      key={name}
      sx={activeLink ? styles.menuActiveLink : styles.menuNavItem}
      onClick={() => handleSelect()}
    >
      {name}
      <Spacer />

      {icon !== undefined && icon !== null && isCompleted && (
        <Box sx={styles.iconAlign}>
          <Icon name={icon} />
        </Box>
      )}
    </ListItem>
  );
}
