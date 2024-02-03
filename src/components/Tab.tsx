// pages/components/Tab.tsx
import React, { useEffect, useState } from 'react';
import { Box, Card, Container, Tabs, TextInput, rem } from '@mantine/core';
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from '@tabler/icons-react';
import TableBet from './TableBet';
import { elementsA, elementsB, elementsC } from '../mock';
import { ITableBetItem } from '../interface';
import { DarkMode } from '@/theme';

export default function Tab() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const [valueSearch, setValueSearch] = useState('');
  const [activeTab, setActiveTab] = useState('first'); // Estado para a aba ativa
  const [filteredElements, setFilteredElements] = useState({
    elementsA: elementsA,
    elementsB: elementsB,
    elementsC: elementsC,
  });

  useEffect(() => {
    const searchLower = valueSearch.toLowerCase();

    const filterElements = (elements: ITableBetItem[]) =>
      elements.filter(
        (element) =>
          element.name.toLowerCase().includes(searchLower) ||
          element.symbol.toLowerCase().includes(searchLower),
      );

    setFilteredElements({
      elementsA: filterElements(elementsA),
      elementsB: filterElements(elementsB),
      elementsC: filterElements(elementsC),
    });

    if (filterElements(elementsA).length > 0) {
      setActiveTab('first');
    } else if (filterElements(elementsB).length > 0) {
      setActiveTab('second');
    } else if (filterElements(elementsC).length > 0) {
      setActiveTab('third');
    }
  }, [valueSearch]);

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      bg={DarkMode.colors.lightBg}
      c={DarkMode.colors.primary}
    >
      <Tabs value={activeTab} onChange={setActiveTab as any}>
        <TextInput
          label="Input label"
          description="Input description"
          placeholder="Input placeholder"
          value={valueSearch}
          onChange={(event) => setValueSearch(event.currentTarget.value)}
          mb={12}
        />
        <Tabs.List grow>
          <Tabs.Tab
            value="first"
            c={DarkMode.colors.primary}
            leftSection={
              <IconPhoto style={iconStyle} color={DarkMode.colors.primary} />
            }
          >
            First tab
          </Tabs.Tab>
          <Tabs.Tab
            value="second"
            c={DarkMode.colors.primary}
            leftSection={
              <IconMessageCircle
                style={iconStyle}
                color={DarkMode.colors.primary}
              />
            }
          >
            Second tab
          </Tabs.Tab>
          <Tabs.Tab
            value="third"
            c={DarkMode.colors.primary}
            leftSection={
              <IconSettings
                style={iconStyle}
                color={DarkMode.colors.primary}
              />
            }
          >
            Third tab
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first" pt="xs" c={DarkMode.colors.secundary} >
          <TableBet elements={filteredElements.elementsA} />
        </Tabs.Panel>
        <Tabs.Panel value="second" pt="xs">
          <TableBet elements={filteredElements.elementsB} />
        </Tabs.Panel>
        <Tabs.Panel value="third" pt="xs">
          <TableBet elements={filteredElements.elementsC} />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
}
