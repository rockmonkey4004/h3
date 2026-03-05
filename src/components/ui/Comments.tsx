import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

interface CommentsProps {
    title: string;
}

export default function Comments({ title }: CommentsProps) {
    return (
        <section className="mt-24 pt-16 border-t border-border">
            <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-border/50 p-8 shadow-xl shadow-foreground/5 text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                    <MessageSquare className="w-6 h-6 text-accent-blue" />
                    <h3 className="text-3xl font-bold font-serif">Comments</h3>
                </div>

                <p className="text-foreground/70 font-light leading-relaxed">
                    On-site comments are currently disabled while moderation tooling is rebuilt.
                </p>
                <p className="text-sm text-foreground/50">
                    Post: <span className="font-medium">{title}</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-bold tracking-widest uppercase"
                    >
                        Contact Laura
                    </Link>
                    <a
                        href="https://instagram.com/lauramsanders"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full border border-border text-xs font-bold tracking-widest uppercase hover:bg-muted/50 transition-colors"
                    >
                        Continue on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}
