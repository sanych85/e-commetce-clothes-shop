import { categories } from '../data';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
const Categories = () => {
   
  return (
    <Container className = "categories">
      {categories.map((category) => {
       return <CategoryItem {...category} key = {category.id} />;
      })}
    </Container>
  );
};

export default Categories;
