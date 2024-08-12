import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  name: string;
  sessionId: string;
};

export const IdCard = ({ name, sessionId }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Id</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-3xl text-zinc-300">
          {name}
          <div className="text-sm text-zinc-500">{sessionId}</div>
        </div>
      </CardContent>
    </Card>
  );
};
