import React from 'react';
// Components
import { Title, Text, Flex } from '../../ui';
// Styles
import s from './style.module.css';

export const SideBar = (props) => (
  <Flex direction="column" justify="flex-start" className={s.SideBar}>
    <Title>DAIRY APP</Title>
    <Text>Some description</Text>
  </Flex>
);
