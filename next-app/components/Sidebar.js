import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Sidebar() {
    return (
        <Container>
            <Header>
                <UserAvatar />
                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>
            <Search>
                <SearchIcon />
            </Search>
        </Container>
    );
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div`
    display: flex;
    padding: 11px;
    position: sticky;
    z-index: 1;
    align-items: center;
    background: linear-gradient(-21deg, #511f6e, #f1dbff);
    border-bottom: 3px discrete black;
`;
const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.6;
    }
`;

const Search = styled.div`
    padding: 11px;
    cursor: pointer;
    :hover {
        opacity: 0.6;
    }
    color: salmon;
    border-radius: 21px;
`;

const IconsContainer = styled.div`
    margin-left: auto;
`;
