
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function App() {
  return (
    <SideNav
    onSelect={(selected) => {
      
        <h2>Your Documents</h2>
      
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="Documents">
            <NavIcon>
                <i className="fa fa-fw fa-files-o" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
               Documents
            </NavText>
            <NavItem eventKey="Documents/View Documents">
                <NavText>
                   View Documents
                </NavText>
            </NavItem>
            <NavItem eventKey="Documents/Upload Documents">
                <NavText>
                   Upload Documents
                   <br/><input type="file" multiple=""></input>
                </NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="Appointment">
            <NavIcon>
                <i className="fa fa-fw fa-user-md" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
               Book an Appointment
            </NavText>
        </NavItem>
        <NavItem eventKey="logout">
            <NavIcon>
                <i className="fa fa-fw fa-sign-out                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           " style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Logout
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
  );
}

export default App;
