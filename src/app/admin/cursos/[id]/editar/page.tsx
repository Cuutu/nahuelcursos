import EditarCursoClient from './EditarCursoClient';

type PageProps = {
  params: { id: string } & Promise<any>;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function EditarCursoPage({
  params,
}: PageProps) {
  const id = params.id;
  return <EditarCursoClient id={id} />;
} 