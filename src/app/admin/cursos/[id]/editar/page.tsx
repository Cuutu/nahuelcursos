import EditarCursoClient from './EditarCursoClient';

interface PageParams {
  id: string;
}

export default function EditarCursoPage({
  params,
}: {
  params: PageParams;
}) {
  return <EditarCursoClient id={params.id} />;
} 