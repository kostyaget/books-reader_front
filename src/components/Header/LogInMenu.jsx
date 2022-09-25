import { Logo, LogInContainer, NavList, NavItem, StyledNavLink ,Avatar,LogOutBtn} from './Header.styled';

import { ReactComponent as Home } from './Logo/home.svg';
import { ReactComponent as Lib } from './Logo/lib.svg';
import { ReactComponent as User} from './Logo/user.svg';

export default function LogInMenu() {
  return (
    <>
      <LogInContainer>
        <Logo>BR</Logo>
        <NavList>
          <NavItem>
            <StyledNavLink to='/training' >
              <Lib />
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to='/'>
              <Home />
            </StyledNavLink>
          </NavItem>
        </NavList>
        <Avatar><User/></Avatar>
        <LogOutBtn type='submit'>Logout</LogOutBtn>
      </LogInContainer>
    </>
  );
}
