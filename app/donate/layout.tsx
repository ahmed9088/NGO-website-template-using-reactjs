import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Secure Donation | HopeFront NGO",
  description: "Your gift changes everything. 100% of your tax-deductible donation goes directly to the field to fund sustainable solutions."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
