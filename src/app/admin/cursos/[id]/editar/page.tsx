import EditarCursoClient from './EditarCursoClient';

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function EditarCursoPage({
  params,
}: PageProps) {
  return <EditarCursoClient id={params.id} />;
} 