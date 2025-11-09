"use client";

import React, { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwzzved", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8">
      <p className="text-center text-muted-foreground mb-12">
        Feel free to drop a message for any opportunities or inquiries!
      </p>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
          <p className="text-green-800 dark:text-green-200 text-center">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-red-800 dark:text-red-200 text-center">
            Oops! Something went wrong. Please try again or email directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground text-left"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={isSubmitting}
            className="mt-1 block w-full px-4 py-2 border border-input bg-background rounded-md shadow-sm focus:ring-ring focus:border-ring disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground text-left"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isSubmitting}
            className="mt-1 block w-full px-4 py-2 border border-input bg-background rounded-md shadow-sm focus:ring-ring focus:border-ring disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground text-left"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            disabled={isSubmitting}
            className="mt-1 block w-full px-4 py-2 border border-input bg-background rounded-md shadow-sm focus:ring-ring focus:border-ring disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-md shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          Or{" "}
          <a
            href="mailto:sahinmeric22@gmail.com"
            className="text-primary hover:underline"
          >
            send an e-mail
          </a>{" "}
          directly.
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="https://linkedin.com/in/sahinmeric"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sahinmeric"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
