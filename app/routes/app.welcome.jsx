import { Page, Layout, InlineGrid } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

import SetupGuide from '../components/welcome/SetupGuide';
import AppStatus from '../components/welcome/AppStatus.jsx';
import TotalGroups from '../components/welcome/TotalGroups.jsx';
import TotalProducts from '../components/welcome/TotalProducts.jsx';

export default function WelcomePage() {
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
            <TotalGroups />
            <TotalProducts />
          </InlineGrid>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
