import styled from 'styled-components';

export const TableWrapper = styled.table`
  border-collapse: collapse;

  td,
  th {
    text-align: left;
    padding: 10px 24px;
  }

  th {
    border-bottom: 2px solid;
    border-top: 2px solid;
  }

  td:nth-child(odd),
  th:nth-child(odd) {
    background: #fbfbfb;
  }
`;
