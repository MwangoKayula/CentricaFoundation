import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  href: string;
}

function ProjectCard({ title, description, category, href }: ProjectCardProps) {
  return (
    <article className="bg-surface p-6 rounded-xl shadow-sm border border-border hover:shadow-lg hover:border-primary/40 transition-all duration-300 flex flex-col">
      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
        {category}
      </span>
      <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{title}</h3>
      <p className="text-muted mb-4 leading-relaxed flex-grow">{description}</p>
      <Link
        href={href}
        className="text-primary font-medium hover:underline inline-flex items-center gap-1"
      >
        Learn More
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Community Tree Planting Drive',
      description:
        'Mobilizing local communities to plant indigenous trees in degraded areas to restore ecosystems and combat deforestation.',
      category: 'Conservation',
      href: '/projects/tree-planting',
    },
    {
      title: 'School Greening Initiative',
      description:
        'Partnering with schools to create green spaces, teach environmental stewardship, and provide shade for students.',
      category: 'Community',
      href: '/projects/school-greening',
    },
    {
      title: 'Sustainable Land Use Workshops',
      description:
        'Training farmers and landowners in agroforestry and sustainable practices to improve soil health and food security.',
      category: 'Education',
      href: '/projects/land-use-workshops',
    },
    {
      title: 'Ecosystem Restoration Partnership',
      description:
        'Working with local authorities and NGOs to restore critical ecosystems, including wetlands and riverbanks.',
      category: 'Conservation',
      href: '/projects/ecosystem-restoration',
    },
    {
      title: 'Climate Education Program',
      description:
        'Raising awareness about climate change and sustainable practices in schools and community centers.',
      category: 'Education',
      href: '/projects/climate-education',
    },
    {
      title: 'Urban Greening and Beautification',
      description:
        'Planting trees and creating green spaces in urban areas to improve air quality and community well-being.',
      category: 'Community',
      href: '/projects/urban-greening',
    },
  ];

  return (
    <main className="pt-6 pb-12">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          Our Projects
        </h1>
        <p className="text-muted max-w-2xl">
          Explore our initiatives focused on climate action and community-led
          conservation across Zambia.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </main>
  );
}