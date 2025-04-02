import EditarCursoClient from './EditarCursoClient';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function EditarCursoPage({
  params,
}: PageProps) {
  const resolvedParams = await params;
  return <EditarCursoClient id={resolvedParams.id} />;
} 