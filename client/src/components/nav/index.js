import styled, { css } from 'styled-components'

function Nav ()
{
    const Cart = styled.div`
    display:flex;
    font-size:20px;
    width: 20px;
    height: 20px;
    text-align: center;
    align-items:center;
    cursor:pointer;
    `;
    const Span = styled.div`
    font-size: 16px;
    margin-left: 3px;
    `;

    const LoginBtn = styled.div`
    font-size:16px;
    margin-left: 10px;
    cursor:pointer;
    `;
    const Container = styled.div`
    margin-left: 5px;
    display:flex;
    `

    return (
        <Container>
        <Cart className="fa">&#xf07a; </Cart>
        <Span>(3)</Span>
        <LoginBtn>Login</LoginBtn>
        </Container>


    );
}

export default Nav;