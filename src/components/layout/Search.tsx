'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search as SearchIcon, X, Loader2 } from 'lucide-react';
import FlexSearch from 'flexsearch';

type SearchDocument = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
};

type SearchResultGroup = {
    result: string[];
};

type SearchIndex = {
    add: (doc: SearchDocument) => void;
    search: (query: string, options: { limit: number; enrich: true }) => SearchResultGroup[];
};

export default function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchDocument[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const indexRef = useRef<SearchIndex | null>(null);
    const dataRef = useRef<SearchDocument[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (!isOpen || indexRef.current) {
            return;
        }

        let isActive = true;
        const controller = new AbortController();

        async function loadSearchIndex() {
            setIsLoading(true);

            try {
                const response = await fetch('/api/search', { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`Search API responded with ${response.status}`);
                }

                const data: SearchDocument[] = await response.json();
                const index = new FlexSearch.Document({
                    document: {
                        id: 'slug',
                        index: ['title', 'description', 'tags'],
                    },
                    tokenize: 'forward',
                }) as unknown as SearchIndex;

                data.forEach((doc) => index.add(doc));

                if (isActive) {
                    indexRef.current = index;
                    dataRef.current = data;
                }
            } catch (error) {
                if (!(error instanceof DOMException && error.name === 'AbortError')) {
                    console.error('Failed to initialize search index', error);
                }
            } finally {
                if (isActive) {
                    setIsLoading(false);
                }
            }
        }

        void loadSearchIndex();

        return () => {
            isActive = false;
            controller.abort();
        };
    }, [isOpen]);

    useEffect(() => {
        const trimmedQuery = query.trim();

        if (indexRef.current && trimmedQuery.length > 0) {
            const searchResults = indexRef.current.search(trimmedQuery, { limit: 5, enrich: true });
            const matchedSlugs = Array.from(new Set(searchResults.flatMap((result) => result.result)));

            const orderedResults = matchedSlugs
                .map((slug) => dataRef.current.find((doc) => doc.slug === slug))
                .filter((doc): doc is SearchDocument => Boolean(doc));

            setResults(orderedResults);
        } else {
            setResults([]);
        }
    }, [query]);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Open search"
            >
                <SearchIcon className="w-5 h-5 text-foreground/50" />
            </button>
        );
    }

    return (
        <div
            className="fixed inset-0 z-[100] bg-foreground/20 backdrop-blur-md flex items-start justify-center pt-24 px-4 transition-all animate-in fade-in duration-200"
            onClick={() => { setIsOpen(false); setQuery(''); }}
        >
            <div
                className="w-full max-w-2xl bg-white border border-border shadow-2xl rounded-[2rem] overflow-hidden flex flex-col max-h-[70vh] animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-8 border-b border-border/50 flex items-center gap-5">
                    <SearchIcon className="w-6 h-6 text-foreground/20" />
                    <label htmlFor="search-input" className="sr-only">Search</label>
                    <input
                        autoFocus
                        id="search-input"
                        type="text"
                        placeholder="Search for recipes, tips, stories..."
                        className="flex-grow bg-transparent border-none outline-none text-xl font-light tracking-tight placeholder:text-foreground/20"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        onClick={() => { setIsOpen(false); setQuery(''); }}
                        className="p-2.5 hover:bg-muted rounded-full transition-colors group"
                        aria-label="Close search"
                    >
                        <X className="w-6 h-6 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                    </button>
                </div>

                <div className="overflow-y-auto p-6 flex-grow custom-scrollbar">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-16 gap-5">
                            <Loader2 className="w-10 h-10 animate-spin text-accent-blue/40" />
                            <p className="text-sm font-medium tracking-widest uppercase text-foreground/30">Indexing Wellness...</p>
                        </div>
                    ) : results.length > 0 ? (
                        <div className="flex flex-col gap-3">
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/30 px-4 mb-2">Search Results</p>
                            {results.map((result) => (
                                <button
                                    key={result.slug}
                                    onClick={() => {
                                        router.push(`/blog/${result.slug}`);
                                        setIsOpen(false);
                                        setQuery('');
                                    }}
                                    className="p-5 text-left hover:bg-muted/50 rounded-2xl transition-all group flex flex-col gap-1 border border-transparent hover:border-border/50 shadow-sm hover:shadow-md"
                                >
                                    <h4 className="font-bold font-serif text-xl group-hover:text-accent-blue transition-colors leading-tight">{result.title}</h4>
                                    <p className="text-sm text-foreground/50 line-clamp-1 font-light">{result.description}</p>
                                </button>
                            ))}
                        </div>
                    ) : query.length > 2 ? (
                        <div className="py-20 text-center space-y-3">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                                <SearchIcon className="w-8 h-8 text-foreground/10" />
                            </div>
                            <p className="text-lg font-serif">Nothing found for "{query}"</p>
                            <p className="text-sm text-foreground/30 font-light">Try another keyword or browse the blog</p>
                        </div>
                    ) : (
                        <div className="py-20 text-center space-y-4">
                            <p className="text-sm italic font-serif text-foreground/40 max-w-xs mx-auto leading-relaxed">
                                "The journey of 1,000 miles begins with a single recipe."
                            </p>
                            <div className="flex items-center justify-center gap-2 pt-4">
                                <span className="w-2 h-2 rounded-full bg-accent-blue/20"></span>
                                <span className="w-2 h-2 rounded-full bg-accent-sage/20"></span>
                                <span className="w-2 h-2 rounded-full bg-accent-warm/20"></span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
