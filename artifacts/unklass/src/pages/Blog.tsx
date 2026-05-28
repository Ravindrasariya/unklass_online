import { BaseLayout } from "@/components/layout/BaseLayout";

export default function Blog() {
  return (
    <BaseLayout>
      <div className="py-32 min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-8 shadow-lg">
          <span className="text-4xl">✍️</span>
        </div>
        <h1 className="text-5xl font-heading font-bold text-foreground mb-6">Our Blog</h1>
        <p className="text-xl text-foreground/70 max-w-2xl mb-8">
          Insights, tips, and stories from the Unklass team.
        </p>
        <div className="bg-primary/10 border border-primary/20 text-primary font-bold px-8 py-4 rounded-xl inline-block">
          Coming Soon
        </div>
      </div>
    </BaseLayout>
  );
}
