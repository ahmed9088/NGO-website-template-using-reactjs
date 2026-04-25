import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Support | HopeFront NGO",
  description: "Get in touch with our team for general inquiries, press information, or partnership opportunities."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
