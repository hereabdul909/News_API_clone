import styled from "styled-components";
export const News = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem;
  }
  .news-box {
    padding: 10px;
    transition: all 0.2s ease;
    transition: transform 0.2s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 8px 17px 0 rgb(0, 0, 0), 0 6px 20px 0 rgb(0, 0, 0);
      transform: scale3d(1.02, 1.045, 1);
    }
    h4 {
      padding: 1rem;
      background-color: black;
      color: white;
      @media (max-width: 500px) {
        font-size: 0.9rem;
        padding: 0.7rem;
      }
    }
    p {
      padding: 0.1rem 0.3rem;
      font-size: 1.3rem;
      @media (max-width: 500px) {
        font-size: 0.9rem;
        padding: 0.2rem;
      }
    }
    .link {
      text-decoration: none;
      margin-left: 1rem;
    }
  }
  .spinner {
   
  }
`;
