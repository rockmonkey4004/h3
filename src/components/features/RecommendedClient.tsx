'use client';

import React from 'react';
import { ExternalLink, ShoppingBag, Check } from 'lucide-react';

const categories = [
    {
        name: "Baking/Cooking",
        items: [
            { name: "Baking Powder", url: "https://www.amazon.com/gp/product/B078T2TL6M" },
            { name: "Baking Soda", url: "https://www.amazon.com/gp/product/B014GMV7RC" },
            { name: "Brownie Mix", url: "https://www.amazon.com/gp/product/B07RBN4RLV" },
            { name: "Cashew Butter", url: "https://www.amazon.com/gp/product/B019ZRRVT6" },
            { name: "Collagen", url: "https://www.amazon.com/gp/product/B00NLR1PX0" },
            { name: "Coconut Milk", url: "https://www.amazon.com/gp/product/B001HTJ2BQ" },
        ]
    },
    {
        name: "Oils & Sweeteners",
        items: [
            { name: "Avocado Oil", url: "https://www.amazon.com/gp/product/B00K4QF4HO" },
            { name: "Coconut Oil", url: "https://www.amazon.com/gp/product/B00NFJPK5S" },
            { name: "Maple Syrup", url: "https://www.amazon.com/gp/product/B074V3V186" },
            { name: "Coconut Sugar", url: "https://amzn.to/39mBvoz" },
            { name: "Vegan Chocolate Chips", url: "https://www.amazon.com/gp/product/B00OWMIEYG" },
            { name: "Honey", url: "https://www.amazon.com/gp/product/B006MWDFUC" },
        ]
    },
    {
        name: "Kitchen Essentials",
        items: [
            { name: "Instant Pot", url: "https://www.amazon.com/gp/product/B07RCNHTLS" },
            { name: "Kitchen Aid", url: "https://www.amazon.com/gp/product/B00063ULMI" },
            { name: "Nut Milk Bag", url: "https://www.amazon.com/gp/product/B07JH5D6HQ" },
            { name: "Hand Mixer", url: "https://www.amazon.com/gp/product/B082V3WRRN" },
            { name: "Cookie Scoop", url: "https://www.amazon.com/gp/product/B0000CDVD2" },
            { name: "Moka Pot", url: "https://www.amazon.com/gp/product/B07CCLY82B" },
        ]
    },
    {
        name: "Snacks",
        items: [
            { name: "Almond Flour Crackers", url: "https://www.amazon.com/gp/product/B07FTV315M" },
            { name: "Grain Free Pretzels", url: "https://www.amazon.com/gp/product/B0887YXX7H" },
            { name: "Grain Free Tortilla Chips", url: "https://www.amazon.com/gp/product/B071XY8BDQ" },
            { name: "Plantain Chips", url: "https://www.amazon.com/gp/product/B078211CYX" },
            { name: "Simple Mills Cookies", url: "https://www.amazon.com/gp/product/B08FW89K6M" },
            { name: "SmartSweets Gummy Pack", url: "https://www.amazon.com/gp/product/B087NXZRHC" },
        ]
    }
];

export default function RecommendedClient() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-8 max-w-6xl">
            <div className="space-y-16">
                <div className="space-y-6 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 text-accent-blue rounded-full text-xs font-bold tracking-widest uppercase">
                        <ShoppingBag className="w-4 h-4" />
                        Curated Collection
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
                        Recommended <span className="text-accent-blue italic">Items</span>
                    </h1>
                    <p className="text-xl text-foreground/60 font-light leading-relaxed">
                        Not all products are created equal. I've curated this collection of my favorites to help you on your H3 journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {categories.map((category) => (
                        <section key={category.name} className="space-y-6">
                            <h2 className="text-2xl font-bold font-serif border-b border-border pb-4">{category.name}</h2>
                            <div className="grid grid-cols-1 gap-3">
                                {category.items.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:border-accent-blue/30 hover:bg-muted/30 transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                                                <Check className="w-4 h-4 text-foreground/30" />
                                            </div>
                                            <span className="font-medium group-hover:text-accent-blue transition-colors">{item.name}</span>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-foreground/20 group-hover:text-accent-blue/50 transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="bg-secondary/30 rounded-[2.5rem] p-12 text-center space-y-6">
                    <h3 className="text-2xl font-bold font-serif">A Note on Links</h3>
                    <p className="text-foreground/60 font-light max-w-2xl mx-auto">
                        Some of the links above are affiliate links, which means I may earn a small commission if you make a purchase—at no additional cost to you. This helps support H3 and allows me to keep creating free content for you. Thank you for your support!
                    </p>
                </div>
            </div>
        </div>
    );
}
