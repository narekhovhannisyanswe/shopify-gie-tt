import { BlockStack, Card, Text } from '@shopify/polaris';

export default function TotalProducts() {
  return (
    <Card>
      <BlockStack gap="300">
        <Text as="h3" fontWeight="bold">
          Total products
        </Text>
        <Text as="h4">
          <Text as="span" fontWeight="bold">
            0{' '}
          </Text>
          / Unlimited groups
        </Text>
      </BlockStack>
    </Card>
  );
}
