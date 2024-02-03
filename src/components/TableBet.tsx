import React, { useState } from 'react';
import { ScrollArea, Table } from '@mantine/core';
import { ITableBetProps, ITableBetItem } from '../interface';
import { DarkMode } from '@/theme';

const TableBet: React.FC<ITableBetProps> = ({ elements }) => {
  // Usar um objeto para rastrear o estado de hover de cada linha por nome
  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>(
    {},
  );

  const handleMouseEnter = (name: string) => {
    setHoverStates((prevStates) => ({ ...prevStates, [name]: true }));
  };

  const handleMouseLeave = (name: string) => {
    setHoverStates((prevStates) => ({ ...prevStates, [name]: false }));
  };

  const rows = elements.map((element: ITableBetItem) => (
    <Table.Tr
      key={element.name}
      onMouseEnter={() => handleMouseEnter(element.name)}
      onMouseLeave={() => handleMouseLeave(element.name)}
      style={{
        cursor: 'pointer',
        color: hoverStates[element.name] ? 'black' : DarkMode.colors.primary, // Muda a cor ao fazer hover somente se o estado hover específico da linha for true
      }}
    >
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea offsetScrollbars scrollbarSize={12} h={340}>
      <Table highlightOnHover withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
};

export default TableBet;
