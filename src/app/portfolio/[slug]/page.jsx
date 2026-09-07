import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/portfolio/CaseStudyLayout";
import { getAllProjects, getNextProject, getProjectBySlug } from "@/lib/projectsData";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Kivro Solutions" };
  }

  return {
    title: project.title + " Case Study | Kivro Solutions",
    description: project.summary,
    openGraph: {
      title: project.title + " Case Study | Kivro Solutions",
      description: project.summary,
      type: "article",
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <CaseStudyLayout
      project={project}
      nextProject={getNextProject(slug)}
    />
  );
}
