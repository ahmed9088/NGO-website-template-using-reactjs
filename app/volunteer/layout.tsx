import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Volunteer Hub | HopeFront NGO",
  description: "Join our global network of volunteers. Apply today to become a field relief worker, remote tutor, or community ambassador."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
