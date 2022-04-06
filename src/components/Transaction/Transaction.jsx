import React from 'react';
import PropTypes from 'prop-types';
import {
  Transhyst,
  Tablehead,
  Tablerow,
  Thead,
  Tablebody,
  Tbody,
} from './Transaction.styled';

const Transaction = ({ items }) => {
  return (
    <Transhyst>
      <Tablehead>
        <Tablerow>
          <Thead>Type</Thead>
          <Thead>Amount</Thead>
          <Thead>Currency</Thead>
        </Tablerow>
      </Tablehead>
      <Tablebody>
        {items.map(({ id, type, amount, currency }) => (
          <Tablerow key={id}>
            <Tbody>{type}</Tbody>
            <Tbody>{amount}</Tbody>
            <Tbody>{currency}</Tbody>
          </Tablerow>
        ))}
      </Tablebody>
    </Transhyst>
  );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transaction;
