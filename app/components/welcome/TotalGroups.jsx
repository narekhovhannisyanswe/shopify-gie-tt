import { BlockStack, Card, Link, Text } from '@shopify/polaris';

export default function TotalGroups({ groupsCount = 0 }) {
  return (
    <Card>
      <BlockStack gap="300">
        <Text as="h3" fontWeight="bold">
          Total groups
        </Text>
        <Text as="h4">
          <Text as="span" variant="headingLg" fontWeight="bold">
            {groupsCount}{' '}
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
