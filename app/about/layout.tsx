import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | HopeFront NGO",
  description: "Learn about our history, our dedicated leadership team, and our mission to provide sustainable solutions globally."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
