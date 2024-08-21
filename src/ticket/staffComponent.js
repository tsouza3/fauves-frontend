import React from "react";
import { UserIcon, UserName, Container, UserEmail, Wrapper } from './staffComponentStyles';

const StaffComponent = ({ userName, userEmail, profilePhoto }) => {
    return (
        <Container>
            <Wrapper>
            <UserIcon
                    src={
                        profilePhoto
                            ? `https://fauvesapi.thiagosouzadev.com/api/users/${profilePhoto}`
                            : null
                    }
                    style={{
                        backgroundColor: profilePhoto
                            ? "transparent"
                            : "#f3f8fc",
                    }}
                />
                <UserName>{userName}</UserName>
                <UserEmail>{userEmail}</UserEmail>
            </Wrapper>
        </Container>
    );
};

export default StaffComponent;
