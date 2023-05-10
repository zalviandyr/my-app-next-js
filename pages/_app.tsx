import "../styles/globals.css";

import { ContentLayout } from "@/components/layouts/ContentLayout";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ContentLayout>
      <Component {...pageProps} />
    </ContentLayout>
  );
};

export default MyApp;
