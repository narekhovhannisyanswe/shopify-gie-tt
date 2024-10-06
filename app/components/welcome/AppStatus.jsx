import { Badge, BlockStack, Card, InlineStack, Link, Text } from '@shopify/polaris';

export default function AppStatus() {
  return (
    <Card>
      <BlockStack gap="300">
        <Text as="h3" fontWeight="bold">
          App Status
        </Text>
        <BlockStack gap="100">
          <InlineStack align="space-between">
            <Text as="h4">App Status</Text>
            <Badge tone="success">On</Badge>
          </InlineStack>
          <InlineStack align="space-between">
            <Text as="h4">Collection widget status</Text>
            <Badge>Off</Badge>
          </InlineStack>
        </BlockStack>
        <BlockStack inlineAlign="end">
          <Link>View settings</Link>
        </BlockStack>
      </BlockStack>
    </Card>
  );
}
