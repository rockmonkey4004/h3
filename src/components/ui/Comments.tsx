'use client';

import React, { useState } from 'react';
import { Send, User as UserIcon, MessageSquare } from 'lucide-react';

interface CommentsProps {
    slug: string;
    title: string;
}

export default function Comments({ slug, title }: CommentsProps) {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && comment) {
            // For now, we'll just simulate a submission.
            // In a real app, this would hit an API route.
            console.log('New Comment:', { name, comment });
            setIsSubmitted(true);
            setName('');
            setComment('');

            setTimeout(() => setIsSubmitted(false), 5000);
        }
    };

    return (
        <div className="mt-24 pt-16 border-t border-border">
            <div className="flex items-center gap-3 mb-10 justify-center">
                <MessageSquare className="w-6 h-6 text-accent-blue" />
                <h3 className="text-3xl font-bold font-serif">Thoughts & Reflections</h3>
            </div>

            <div className="max-w-2xl mx-auto">
                {/* Real comments would be fetched and mapped here */}

                {/* Comment Form */}
                <div className="bg-white rounded-3xl border border-border/50 p-8 shadow-xl shadow-foreground/5 relative">
                    <h4 className="text-xl font-bold font-serif mb-6">Leave a Comment</h4>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-foreground/40 px-1">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="What should we call you?"
                                className="w-full bg-secondary/10 border border-border focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-foreground/20 font-light"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="comment" className="text-xs font-bold tracking-widest uppercase text-foreground/40 px-1">Your Thoughts</label>
                            <textarea
                                id="comment"
                                rows={4}
                                placeholder="Share your experience..."
                                className="w-full bg-secondary/10 border border-border focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-2xl px-4 py-3 outline-none transition-all placeholder:text-foreground/20 font-light resize-none"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-foreground text-background font-bold tracking-widest uppercase py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
                            disabled={isSubmitted}
                        >
                            <Send className="w-4 h-4" />
                            {isSubmitted ? 'Comment Sent for Moderation' : 'Post Comment'}
                        </button>

                        {isSubmitted && (
                            <p className="text-center text-sm font-medium text-accent-sage animate-in fade-in slide-in-from-top-2">
                                Thank you! Your comment has been submitted and is awaiting moderation.
                            </p>
                        )}
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-[10px] text-foreground/30 font-medium tracking-[0.2em] uppercase">
                            No login required. We value your privacy and community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
