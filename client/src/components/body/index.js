import styled, { css } from 'styled-components'
import Product from  '../product'

function Body()
{

    const Container = styled.div`
    display:flex;
    justify-content: center;
    margin-top:50px;
    `

    return(

        <Container>
         <Product image="./assets/fightclub.png" title="Fight Club" price="39.90"
         description="A depressed man (Edward Norton) suffering from insomnia meets
          a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds 
          himself living in his squalid house after his perfect apartment is destroyed. 
          The two bored men form an underground club with strict rules and fight other 
          men who are fed up with their mundane lives. Their perfect partnership frays 
          when Marla (Helena Bonham Carter), a fellow support group crasher, attracts 
          Tyler's attention."
         /> 

        </Container>
    )
}

export default Body;