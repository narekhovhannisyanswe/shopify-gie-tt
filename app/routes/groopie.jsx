import { AppProvider, Page, Layout } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";

export default function Groopie() {
  return (
    <AppProvider i18n={{ translations }}>
      <Page title="Welcome 🚀">
        <Layout></Layout>
      </Page>
    </AppProvider>
  );
}
