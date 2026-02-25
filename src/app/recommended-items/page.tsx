import type { Metadata } from 'next';
import RecommendedClient from '@/components/features/RecommendedClient';

export const metadata: Metadata = {
    title: "Recommended Items",
    description: "Explore Laura's curated collection of kitchen essentials, pantry staples, and favorite products.",
};

export default function RecommendedPage() {
    return <RecommendedClient />;
}
