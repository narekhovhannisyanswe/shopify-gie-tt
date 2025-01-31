import { BlockStack, Card, Text } from '@shopify/polaris';

export default function TotalProducts({ productCount = 0 }) {
  return (
    <Card>
      <BlockStack gap="300">
        <Text as="h3" fontWeight="bold">
          Total products
        </Text>
        <Text as="h4">
          <Text as="span" variant="headingLg" fontWeight="bold">
            {productCount}{' '}
          </Text>
          / Unlimited groups
        </Text>
      </BlockStack>
    </Card>
  );
}
