import type { Metadata } from 'next';
import ChristmasClient from '@/components/features/ChristmasClient';

export const metadata: Metadata = {
    title: "Christmas Treats E-Book",
    description: "Download our free Christmas Treats E-Book featuring paleo and vegan friendly holiday recipes.",
    alternates: { canonical: "/christmas" },
};

export default function ChristmasPage() {
    return <ChristmasClient />;
}
