import React from 'react'
import { Transhyst, Tablehead, Tablerow, Thead, Tablebody, Tbody} from "./Transaction.styled"


const Transaction = ({ items}) => {
  return (
      <Transhyst>
          <Tablehead>
              <Tablerow>
                  <Thead>Type</Thead>
                  <Thead>Amount</Thead>
                  <Thead>Currency</Thead>
              </Tablerow>
          </Tablehead>
          <Tablebody>{
              items.map(({ id, type, amount, currency }) =>
                  <Tablerow key={id}>
                      <Tbody>{type}</Tbody>
                      <Tbody>{amount}</Tbody>
                      <Tbody>{currency}</Tbody>
                  </Tablerow>
              )}
          </Tablebody>
      </Transhyst>
  )
}

export default Transaction