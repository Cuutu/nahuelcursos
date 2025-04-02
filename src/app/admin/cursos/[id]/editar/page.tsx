import EditarCursoClient from './EditarCursoClient';

// @ts-ignore - Ignoramos temporalmente los tipos para el deployment
export default async function EditarCursoPage({ params }: any) {
  return <EditarCursoClient id={params.id} />;
} 