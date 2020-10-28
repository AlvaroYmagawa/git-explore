import React from 'react';
import { MdPerson, MdExitToApp, MdAccountCircle } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import { useDispatch } from 'react-redux';

// ACTIONS
import { signOut } from '~/store/modules/auth/actions';

// CUSTOM IMPORTS
import history from '~/services/history';
import { Container, Button, NoAvatar, Options, Option } from './styles';

function Avatar({ src, ...rest }) {
  const dispatch = useDispatch();

  // STATES
  const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);

  // FUNCTIONS
  function handleOptionClick({ callback }) {
    setIsOptionsVisible(false);
    callback();
  }

  const options = [
    {
      name: 'Meu Perfil',
      onClick: () =>
        handleOptionClick({ callback: () => history.push('/profile/me') }),
      icon: <MdAccountCircle />,
    },
    {
      name: 'Sair',
      onClick: () => handleOptionClick({ callback: () => dispatch(signOut()) }),
      icon: <MdExitToApp />,
    },
  ];

  return (
    <Container {...rest}>
      <Button
        type="button"
        onClick={() => setIsOptionsVisible(!isOptionsVisible)}
      >
        <NoAvatar>
          <MdPerson />
        </NoAvatar>
      </Button>

      {isOptionsVisible && (
        <>
          <IoIosArrowUp id="arrow-top" />

          <Options>
            {options.map(option => (
              <Option onClick={option.onClick} key={option.name}>
                {option.icon}

                <p>{option.name}</p>
              </Option>
            ))}
          </Options>
        </>
      )}
    </Container>
  );
}

export default Avatar;
