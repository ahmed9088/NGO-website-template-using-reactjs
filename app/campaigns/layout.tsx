import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Campaigns | HopeFront NGO",
  description: "Explore our active campaigns around the world, from clean water initiatives to disaster relief and education."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
