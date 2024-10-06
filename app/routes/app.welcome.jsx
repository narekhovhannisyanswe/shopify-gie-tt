import { useState } from 'react';

import { Page, Layout, InlineGrid } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

import SetupGuide from '../components/welcome/SetupGuide';
import AppStatus from '../components/welcome/AppStatus.jsx';
import TotalGroups from '../components/welcome/TotalGroups.jsx';
import TotalProducts from '../components/welcome/TotalProducts.jsx';
import { GROUPS_INITIAL_COUNT, PRODUCTS_INITIAL_COUNT } from '../constants/welcome.js';

export default function WelcomePage() {
  const [groupsCount, setGroupsCount] = useState(GROUPS_INITIAL_COUNT);
  const [productsCount, setProductsCount] = useState(PRODUCTS_INITIAL_COUNT);

  return (
    <Page fullWidth>
      <TitleBar title="Welcome 🚀" />
      <Layout>
        <Layout.Section variant="fullWidth">
          <SetupGuide />
        </Layout.Section>
        <Layout.Section variant="fullWidth">
          <InlineGrid columns={3} gap="400">
            <AppStatus />
            <TotalGroups groupsCount={groupsCount} />
            <TotalProducts productsCount={productsCount} />
          </InlineGrid>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
