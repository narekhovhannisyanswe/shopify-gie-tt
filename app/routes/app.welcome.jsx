import { useEffect, useRef, useState } from 'react';

import { Page, Layout, InlineGrid } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

import SetupGuide from '../components/welcome/SetupGuide';
import AppStatus from '../components/welcome/AppStatus.jsx';
import TotalGroups from '../components/welcome/TotalGroups.jsx';
import TotalProducts from '../components/welcome/TotalProducts.jsx';
import { EMBED_ENABLED_INITIAL_STATE, PRODUCTS_INITIAL_COUNT } from '../constants/welcome.js';

export default function WelcomePage() {
  const [isTemplateCreated, setIsTemplateCreated] = useState(false);
  const [isProductGroupCreated, setIsProductGroupCreated] = useState(false);
  const [isEmbedEnabled, setIsEmbedEnabled] = useState(EMBED_ENABLED_INITIAL_STATE);

  const [groupsCount, setGroupsCount] = useState(0);
  const [productsCount, setProductsCount] = useState(PRODUCTS_INITIAL_COUNT);

  const progress = useRef(0);

  useEffect(() => {
    progress.current = Number(isEmbedEnabled) + Number(isProductGroupCreated) + Number(isEmbedEnabled);
  }, [isTemplateCreated, isProductGroupCreated, isEmbedEnabled]);

  // const SECTIONS = {
  //   TEMPLATE: "template",
  //   PRODUCT_GROUP: "product group",
  //   EMBEDDING: "embedding",
  // };
  // const [activeSection, setActiveSection] = useState(SECTIONS.TEMPLATE);

  return (
    <Page fullWidth>
      <TitleBar title="Welcome 🚀" />
      <Layout>
        <Layout.Section variant="fullWidth">
          <SetupGuide progress={progress.current} />
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
