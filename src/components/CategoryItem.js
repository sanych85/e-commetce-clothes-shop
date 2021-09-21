import React from 'react'
import styled from 'styled-components';


const Container = styled.div `
flex: 1;
margin: 3;
height: 70vh;
position: relative;
`

const Image = styled.img `
/* width: 60%; */
height: 100%;
object-fit: cover;

`

const Info = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1 `
color: white;
margin: 20px;

 `

 const Button = styled.button `
border: none;
padding: 20px;
background-color : white ;
color:grey;
cursor: pointer;
font-weight: 500;
 `

const CategoryItem = ({title, img }) => {
    console.log(title)
    return (
        <Container>
            <Image src = {img}/>
            <Info>
                <Title >{title}</Title>
                <Button>Shop now</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
