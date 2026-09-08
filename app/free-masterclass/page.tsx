import type { Metadata } from "next";
import Masterclass from "./Masterclass";

export const metadata: Metadata = {
  title: "Free Live Dog Training Masterclass",
  description:
    "Transform your dog in just 15 minutes a day. Join Jas Leverette of Netflix's Canine Intervention live for a free online masterclass on the Cali K9® training system.",
  // Funnel page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

export default function FreeMasterclassPage() {
  return <Masterclass />;
}
