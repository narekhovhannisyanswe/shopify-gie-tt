import { useEffect, useRef, useState } from 'react';

import { Page, Layout, InlineGrid } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

import SetupGuide from '../components/welcome/SetupGuide';
import AppStatus from '../components/welcome/AppStatus.jsx';
import TotalGroups from '../components/welcome/TotalGroups.jsx';
import TotalProducts from '../components/welcome/TotalProducts.jsx';

export default function WelcomePage() {
  const [productCount, setProductCount] = useState(0);
  const [productGroup, setProductGroup] = useState([]);
  const [isEmbedEnabled, setIsEmbedEnabled] = useState(false);

  const [progress, setProgress] = useState(0);

  const handleCreateProductGroup = () => setProductGroup(['mock group']);
  const toggleEmbedEnabled = () => setIsEmbedEnabled(!isEmbedEnabled);

  useEffect(() => {
    setProgress(Number(productGroup.length > 0) + Number(isEmbedEnabled));
  }, [productGroup.length, isEmbedEnabled]);

  return (
    <Page fullWidth>
      <TitleBar title="Welcome 🚀" />
      <Layout>
        <Layout.Section variant="fullWidth">
          <SetupGuide
            progress={progress}
            onCreateProductGroup={handleCreateProductGroup}
            isGroupEmpty={productGroup.length === 0}
            isEmbedEnabled={isEmbedEnabled}
            onToggleEmbedEnabled={toggleEmbedEnabled}
          />
        </Layout.Section>
        <Layout.Section variant="fullWidth">
          <InlineGrid columns={3} gap="400">
            <AppStatus />
            <TotalGroups productGroupsCount={productGroup.length} />
            <TotalProducts productCount={productCount} />
          </InlineGrid>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
