import styled from 'styled-components';

export const TableWrapper = styled.table`
  border-collapse: collapse;

  td > button {
    font-weight: 800;
    font-size: 18px;

    &:hover {
      border-bottom: 3px solid black;
    }
  }

  td,
  th {
    text-align: left;
    padding: 10px 24px;
  }

  th {
    border-bottom: 2px solid;
    border-top: 2px solid;
    font-weight: 800;
  }

  td:nth-child(odd),
  th:nth-child(odd) {
    background: #fbfbfb;
  }
`;
