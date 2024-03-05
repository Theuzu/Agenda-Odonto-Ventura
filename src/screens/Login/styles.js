import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
flex: 1;
background-color: whitesmoke;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
    width:200px;
    height:190px;
    
`;

export const InputArea = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: aliceblue;
    width: 90%;
    font-size: 17px;
    padding: 30px;
    border-radius: 8px;
    color: black;
`;

// export const Name = styled.Component`

// `;