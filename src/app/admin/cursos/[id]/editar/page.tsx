import EditarCursoClient from './EditarCursoClient';

export default async function EditarCursoPage({
  params,
}: {
  params: { id: string }
}) {
  return <EditarCursoClient id={params.id} />;
} 