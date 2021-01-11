import styled, { css } from 'styled-components'

function Product(prop)
{
    const {image,title,price,description} = prop;
    const Container = styled.div`
    width:50%;
    border-bottom: 1px solid #888;
    height:150px;
    padding:5px;
    display:flex;
    justify-content:space-between;
    `;
    const Img = styled.div`
    height:150px;
    width:200px;
    background-image:url('${image}');
    background-repeat: no-repeat;
    background-size: cover;
    `;
    const CardHead = styled.div`
    display:flex;
    `;
    const CardBody = styled.div`
    display:flex;
    `;
    const Card = styled.div`
    border-top: 5px solid #FDB515;
    display:flex;
    flex-direction: column;
    margin-left:10px;
    width:80%;
    `;
    const H3 = styled.h3`
    margin-left:30px;
    `;

    return (
        <Container>
            
            <Img/>
            <Card>
            <CardHead>
            <h3>{title}</h3><H3>${price}</H3>
            
            </CardHead>
            <CardBody>
            <p>{description}</p>
            </CardBody>
            </Card>

        </Container>
    )
}

export default Product;