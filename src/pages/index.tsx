// pages/index.tsx
import {
  AppShell,
  Box,
  Burger,
  Text,
  Container,
  NavLink,
  Group,
  Avatar,
} from '@mantine/core';
import { IconGauge, IconActivity, IconFingerprint } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import Tab from '../components/Tab';
import { DarkMode } from '../theme';

export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);

  const Security = () => <div>Security Content</div>;
  const Activity = () => <div>Activity Content</div>;

  const data = [
    {
      icon: IconGauge,
      label: 'Dashboard',
      description: 'Item with description',
    },
    {
      icon: IconFingerprint,
      label: 'Security',
      description: 'Item with description',
    },
    {
      icon: IconActivity,
      label: 'Activity',
      description: 'Item with description',
    },
  ];

  const itemsNav = data.map((item, index) => (
    <NavLink
      href="#required-for-focus"
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      leftSection={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      footer={{
        height: 60,
      }}
    >
      <AppShell.Header bg={DarkMode.colors.lightBg}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Avatar color={DarkMode.colors.primary} radius="xl">
            PB
          </Avatar>
          <Text fw={700} color={DarkMode.colors.secundary}>
            Punch Back Bet
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" bg={DarkMode.colors.secundary}>
        <Box w={220}>{itemsNav}</Box>
      </AppShell.Navbar>
      <AppShell.Main bg={DarkMode.colors.strongBg}>
        <Container>
          {active === 0 && <Tab />}
          {active === 1 && <Security />}
          {active === 2 && <Activity />}
        </Container>
      </AppShell.Main>
      <AppShell.Footer bg={DarkMode.colors.lightBg}>
        <Container p={8}>
          <Text size="xs" c={DarkMode.colors.secundary}>
            @AnCaps by Punch_Back_Bet
          </Text>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}
