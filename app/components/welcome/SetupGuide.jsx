import {
  BlockStack,
  Box,
  Button,
  Card,
  Collapsible,
  InlineStack,
  Link,
  ProgressBar,
  Text,
  Thumbnail,
} from '@shopify/polaris';
import { ExternalIcon } from '@shopify/polaris-icons';

import { NUMBER_OF_TASKS } from '../../constants/welcome.js';

export default function SetupGuide({ progress = 0 }) {
  return (
    <Card>
      <BlockStack gap="400">
        <Box>
          <Text as="h2" fontWeight="bold">
            Setup Guide
          </Text>
          <Text as="p">Use this personalized guide get your app up and running.</Text>
          <InlineStack blockAlign="center" gap="300">
            <Text as="span">
              {progress} / {NUMBER_OF_TASKS}
            </Text>
            <div style={{ width: 150 }}>
              <ProgressBar progress={(progress / NUMBER_OF_TASKS) * 100} size="small" />
            </div>
          </InlineStack>
        </Box>
        <Collapsible id="create-template" open={true}>
          <Box background="bg-surface-secondary" padding="400" borderRadius="200">
            <Text as="h3" fontWeight="bold">
              Create Template
            </Text>
          </Box>
        </Collapsible>
        <Collapsible id="product-group" open={true}>
          <Box background="bg-surface-secondary" padding="400" borderRadius="200">
            <InlineStack align="space-between">
              <BlockStack gap="300" inlineAlign="start">
                <Text as="h3" fontWeight="bold">
                  Create Product Group
                </Text>
                <Button variant="primary" url="https://polaris.shopify.com/" external>
                  Polaris docs
                </Button>
              </BlockStack>
              <Thumbnail
                alt="enable app"
                source="https://www.charle.co.uk/articles/shopify-pricing/images/reporting.png"
              />
            </InlineStack>
          </Box>
        </Collapsible>
        <Collapsible id="app-embed" open={true}>
          <Box background="bg-surface-secondary" padding="400" borderRadius="200">
            <InlineStack align="space-between">
              <BlockStack gap="300" inlineAlign="start">
                <Text as="h3" fontWeight="bold">
                  Enable app embedded
                </Text>
                <Text as="p">To display options on your Online Store, you must enable app embed in your theme.</Text>
                <InlineStack gap="400">
                  <Button
                    variant="primary"
                    icon={ExternalIcon}
                    url="https://example.myshopify.com/admin/settings/apps/embed/app_id"
                    external>
                    Enable app embed
                  </Button>
                  <Link removeUnderline>
                    <Text as="span" fontWeight="semibold" tone="subdued">
                      Learn more
                    </Text>
                  </Link>
                </InlineStack>
              </BlockStack>
              <Thumbnail
                size="large"
                alt="enable app"
                source="https://www.charle.co.uk/articles/shopify-pricing/images/reporting.png"
              />
            </InlineStack>
          </Box>
        </Collapsible>
      </BlockStack>
    </Card>
  );
}
