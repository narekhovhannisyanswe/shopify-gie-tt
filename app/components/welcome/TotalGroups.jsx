import { BlockStack, Card, Link, Text } from '@shopify/polaris';

export default function TotalGroups() {
  return (
    <Card>
      <BlockStack gap="300">
        <Text as="h3" fontWeight="bold">
          Total groups
        </Text>
        <Text as="h4">
          <Text as="span" fontWeight="bold">
            0{' '}
          </Text>
          / Unlimited groups
        </Text>
        <BlockStack inlineAlign="end">
          <Link>View settings</Link>
        </BlockStack>
      </BlockStack>
    </Card>
  );
}
