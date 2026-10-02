import { Mail, MapPin, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Laura for questions, collaborations, or just to say hello.",
    alternates: { canonical: "/contact" },
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-8 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Info Column */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
                            Get in <span className="text-accent-blue italic">Touch</span>
                        </h1>
                        <p className="text-lg text-foreground/60 font-light leading-relaxed">
                            Have questions about a recipe? Want to share your own H3 journey? I’d love to hear from you.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center shrink-0 group-hover:bg-accent-blue/20 transition-colors">
                                <Mail className="w-6 h-6 text-accent-blue" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold font-serif text-xl">Email Me</h3>
                                <p className="text-foreground/60 font-light">laura@h3withlaura.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 rounded-2xl bg-accent-sage/10 flex items-center justify-center shrink-0 group-hover:bg-accent-sage/20 transition-colors">
                                <MapPin className="w-6 h-6 text-accent-sage" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold font-serif text-xl">Location</h3>
                                <p className="text-foreground/60 font-light">Nashville, Tennessee</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 rounded-2xl bg-accent-warm/10 flex items-center justify-center shrink-0 group-hover:bg-accent-warm/20 transition-colors">
                                <MessageSquare className="w-6 h-6 text-accent-warm" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold font-serif text-xl">Community</h3>
                                <p className="text-foreground/60 font-light">Join the reflections on our blog posts.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Column */}
                <div className="bg-white rounded-[2.5rem] border border-border/50 p-10 shadow-2xl shadow-foreground/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-bl-full animate-pulse" />

                    <div className="relative z-10 flex min-h-[28rem] flex-col items-center justify-center text-center space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center">
                            <Mail className="w-8 h-8 text-accent-blue" />
                        </div>
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold font-serif">Send me an email</h2>
                            <p className="text-foreground/60 font-light leading-relaxed max-w-sm">
                                Email is the most reliable way to reach me for recipe questions, collaborations, or a quick hello.
                            </p>
                        </div>
                        <a
                            href="mailto:laura@h3withlaura.com?subject=H3%20Website%20Message"
                            className="inline-flex items-center gap-3 bg-foreground text-background font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity"
                        >
                            <Mail className="w-5 h-5" />
                            Email Laura
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
