import type { Project } from '../data/portfolioData';

interface ProjectMediaProps {
  project: Project;
  className?: string;
  eager?: boolean;
  sizes?: string;
}

export function ProjectMedia({ project, className = '', eager = false, sizes = '(min-width: 1024px) 50vw, 100vw' }: ProjectMediaProps) {
  const src = project.imageUrl;
  const alt = project.imageAlt ?? `${project.title} project visual`;

  if (!src) {
    return (
      <div className={`flex h-full min-h-[12rem] items-end bg-studio-dark p-5 ${className}`}>
        <p className="font-sans text-sm text-studio-muted">
          No stills yet — case study has the architecture notes.
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={960}
      height={540}
      sizes={sizes}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
