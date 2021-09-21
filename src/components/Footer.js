import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.div``;
const Desc = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.ul`
  flex: 1;
  padding: 20px;
  margin-bottom: 30px;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div `
margin-bottom: 20px;
display: flex;
/* align-content:center; */
`

const Payment = styled.img ` 
width :50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Lama</Logo>
        <Desc></Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
          <Title>Contacts</Title>
          <ContactItem><Room style = {{marginRight: "10px"}}/>
        <span>622 Dixie Path, South Tochester 98336</span>
          </ContactItem>
          <ContactItem><Phone/>
              +1 234 567890
          </ContactItem>
          <ContactItem><MailOutline/>
                contact@mail.ru
          </ContactItem>
          <Payment  src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
