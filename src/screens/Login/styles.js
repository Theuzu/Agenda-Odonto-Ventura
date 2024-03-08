import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
flex: 1;
background-color: #e8ecf0 ;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    padding: 24px;
`;

export const HeaderView = styled.View`
    margin-top: 3%;
    margin-bottom: 5%;
    
`;

export const Logo = styled.Image`
    align-self: center;
    width:120px;
    height:120px;
    border-radius: 25px;
    
`;

export const Title = styled.Text`
    font-size: 33px;
    font-weight: 700;
    margin-top: 4%;
    margin-bottom: 0%;
    text-align: center;
    color: #61c5c6;
    
`;

export const Desc = styled.Text`
    font-size: 16px;
    font-weight: 600;
    margin-top: 0%;
    margin-bottom: 4%;
    text-align: center;
    color: #778899;
`;
export const Form = styled.View`
    margin-bottom: 7%;
    padding-right: 7%;
    padding-left: 7%;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
`;

export const InputView = styled.View`
    margin-bottom: 3%;
`;

export const InputLabel = styled.Text`
font-size: 17px;
font-weight: 600;
color: #222;
margin-bottom: 4%;
`;

export const Input = styled.TextInput`
    height: 50px;
    background-color: #fff ;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 500;
    color: #222;
`;

export const SubmitBtn = styled.TouchableOpacity`
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-top: 8%;
    margin-bottom: 3%;
    background-color: #61c5c6;
    `;

export const SubmitBtnText = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`;

// export const Name = styled.Component`

// `;