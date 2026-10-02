'use client';

import { FormEvent, useState } from 'react';
import { Loader2, Send } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
    const [status, setStatus] = useState<FormStatus>('idle');

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus('submitting');

        const form = event.currentTarget;
        const formData = new FormData(form);
        const body = new URLSearchParams();
        formData.forEach((value, key) => body.append(key, String(value)));

        try {
            const response = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: body.toString(),
            });

            if (!response.ok) {
                throw new Error(`Form submission failed: ${response.status}`);
            }

            form.reset();
            setStatus('success');
        } catch {
            setStatus('error');
        }
    }

    return (
        <form
            name="h3-contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-8 relative z-10"
        >
            <input type="hidden" name="form-name" value="h3-contact" />
            <label className="absolute -left-[9999px] w-px h-px overflow-hidden">
                Leave this field empty
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>

            <div className="space-y-2">
                <label htmlFor="contact-name" className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/40 px-1">Your Name</label>
                <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Full Name"
                    className="w-full bg-secondary/10 border border-border focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-foreground/20 font-light"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/40 px-1">Email Address</label>
                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="hello@example.com"
                    className="w-full bg-secondary/10 border border-border focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-foreground/20 font-light"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/40 px-1">Message</label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your journey..."
                    className="w-full bg-secondary/10 border border-border focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-[2rem] px-6 py-4 outline-none transition-all placeholder:text-foreground/20 font-light resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-foreground text-background font-bold tracking-[0.2em] uppercase py-5 rounded-[2rem] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-60 disabled:hover:scale-100"
            >
                {status === 'submitting' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
                <p className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-800" role="status">
                    Thanks — your message was sent successfully.
                </p>
            )}
            {status === 'error' && (
                <p className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800" role="alert">
                    The form could not be sent. Please email laura@h3withlaura.com instead.
                </p>
            )}
        </form>
    );
}
