import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Upcoming Events | HopeFront NGO",
  description: "Join us at our upcoming charity galas, volunteer training seminars, and fundraising marathons."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
