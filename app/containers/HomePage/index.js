/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import HomeWidget from './HomeWidget';

const Wrapper = styled.div`
  width: auto;
  background-color: #fafafa;
  padding: 0 40px 20px 40px;
  margin: 3rem 0 0 0;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Helmet>
        <title>Dashboard - Codemi</title>
        <meta name="dashboard" content="Homepage for dashboard" />
      </Helmet>
      <HomeWidget />
    </Wrapper>
  );
}
