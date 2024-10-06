import { BlockStack, Box, Button, Card, Icon, InlineStack, Link, ProgressBar, Text, Thumbnail } from '@shopify/polaris';
import { ExternalIcon, CheckCircleIcon } from '@shopify/polaris-icons';

import CycleEmptyDashed from '../ui/CycleEmptyDashed';

import { NUMBER_OF_TASKS } from '../../constants/welcome';

export default function SetupGuide({
  isGroupEmpty,
  onCreateProductGroup,
  isEmbedEnabled,
  onToggleEmbedEnabled,
  progress,
}) {
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

        <Box background="bg-surface-secondary" padding="400" borderRadius="200">
          <BlockStack gap="300">
            <InlineStack gap="200" blockAlign="center">
              <span>{isGroupEmpty ? <CycleEmptyDashed /> : <Icon source={CheckCircleIcon} />}</span>
              <Text as="h3" fontWeight="bold">
                Create Product Group
              </Text>
            </InlineStack>
            <InlineStack align="space-between">
              <BlockStack>
                <Button onClick={onCreateProductGroup} variant="primary">
                  Create product group
                </Button>
              </BlockStack>
              <Thumbnail
                alt="product group"
                source="https://www.charle.co.uk/articles/shopify-pricing/images/reporting.png"
              />
            </InlineStack>
          </BlockStack>
        </Box>

        <Box background="bg-surface-secondary" padding="400" borderRadius="200">
          <BlockStack gap="300">
            <InlineStack gap="200" blockAlign="center">
              <span>{isEmbedEnabled ? <Icon source={CheckCircleIcon} /> : <CycleEmptyDashed />}</span>
              <Text as="h3" fontWeight="bold">
                Enable app embedded
              </Text>
            </InlineStack>
            <InlineStack align="space-between">
              <BlockStack gap="300" inlineAlign="start">
                <Text as="p">To display options on your Online Store, you must enable app embed in your theme.</Text>
                <InlineStack gap="400">
                  <Button onClick={onToggleEmbedEnabled} variant="primary" icon={ExternalIcon}>
                    {isEmbedEnabled ? 'Disable' : 'Enable'} app embed
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
          </BlockStack>
        </Box>
      </BlockStack>
    </Card>
  );
}
