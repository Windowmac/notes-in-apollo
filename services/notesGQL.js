import { gql } from '@apollo/client';

const GET_NOTES = gql`
  query notes {
    notes {
      title
      body
    }
  }
`;

