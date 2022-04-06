import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 20px auto;
  background-color: #e7e3e3;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

export const Description = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Photo = styled.img`
  border-radius: 50%;
  width: 100px;
  padding: 30px 60px 15px 60px;
`;

export const Name = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 15px;
`;

export const Tag = styled.span`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
`;

export const Location = styled.span`
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
`;

export const StatsItems = styled.ul`
  background-color: white;
  display: flex;
  padding: 0;
  margin: 0;
  width: 220px;
  background-color: #e0e0e0;
`;

export const StItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #b8b2b2;
  width: 220px;
  padding: 10px;
`;
